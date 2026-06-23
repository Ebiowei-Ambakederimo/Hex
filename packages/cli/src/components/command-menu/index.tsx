import type { RefObject } from "react";
import { TextAttributes, type ScrollBoxRenderable } from "@opentui/core";
import { getFilterCommands } from "./filter-commands";
import { COMMANDS } from "./commands";
import { useTheme } from "../../providers/theme";

interface CommandMenuProps {
  query: string;
  selectedIndex: number;
  scrollRef: RefObject<ScrollBoxRenderable | null>;
  onSelect: (index: number) => void;
  onExecute: (index: number) => void;
}

const MAX_VISIBLE_ITMES = 8;

const COMMAND_COL_WIDTH =
  Math.max(...COMMANDS.map((cmd) => cmd.name.length)) + 4;

export function CommandMenu({
  query,
  selectedIndex,
  scrollRef,
  onSelect,
  onExecute,
}: CommandMenuProps) {
  const filtered = getFilterCommands(query);
  const visibleHeight = Math.min(filtered.length, MAX_VISIBLE_ITMES);
  const { colors } = useTheme();

  if (filtered.length === 0) {
    return (
      <box
        padding={1}
        width="100%"
        height={visibleHeight}
        alignItems="center"
        justifyContent="center"
      >
        <text attributes={TextAttributes.DIM}>No matching commands found</text>
      </box>
    );
  }

  return (
    <scrollbox ref={scrollRef} height={visibleHeight}>
      {filtered.map((cmd, i) => {
        const isSelected = i === selectedIndex;
        return (
          <box
            key={cmd.value}
            flexDirection="row"
            padding={1}
            height={1}
            overflow="hidden"
            backgroundColor={isSelected ? colors.selection : undefined}
            // backgroundColor={isSelected ? colors.selection : "transparent"}
            onMouseMove={() => onSelect(i)}
            onMouseDown={() => onExecute(i)}
          >
            <box width={COMMAND_COL_WIDTH} flexShrink={0}>
              <text selectable={false} fg={isSelected ? "black" : "white"}>
                /{cmd.name}
              </text>
            </box>
            <box flexGrow={1} flexShrink={1} overflow="hidden">
              <text selectable={false} fg={isSelected ? "black" : "gray"}>
                {cmd.description}
              </text>
            </box>
          </box>
        );
      })}
    </scrollbox>
  );
}
