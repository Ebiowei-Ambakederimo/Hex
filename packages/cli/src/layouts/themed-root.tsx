import type { ReactNode } from "react";
import { useTheme } from "../providers/theme";

type Props = {
    // Define any props if needed
    children: ReactNode;
};

export function ThemedRoot({ children }: Props) {
    const { colors } = useTheme();
  return (
    <box
        // alignItems="center"
        // justifyContent="center"
        width="100%"
        height="100%"
        flexGrow={1}
        // gap={2}
        backgroundColor={colors.background}
        >
        {children}
    </box>
  );
}