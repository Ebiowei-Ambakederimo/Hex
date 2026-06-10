import { TextAttributes } from "@opentui/core";

type Props = {
  message: string;
};

export function ErrorMessage({ message }: Props) {
  // const { colors } = useTheme();

  return (
    <box width="100%" alignItems="center">
      <box border={["left"]} borderColor="" width="100%">
        <box
          justifyContent="center"
          paddingX={2}
          paddingY={1}
          backgroundColor="#0D0D12"
          width="100%"
        >
          <text attributes={TextAttributes.DIM}>{message}</text>
        </box>
      </box>
    </box>
  );
}