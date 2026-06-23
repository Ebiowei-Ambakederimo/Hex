import { TextAttributes } from "@opentui/core";
import { useTheme } from "../providers/theme";

export function StatusBar() {
  const { colors } = useTheme();
  return (
    <box flexDirection="row" gap={1}>
      <text fg="cyan">Build</text>
      <text attributes={TextAttributes.DIM} fg={colors.dimSeparator}>
        
      </text>
      <text>opus 4.7</text>
    </box>
  );
}