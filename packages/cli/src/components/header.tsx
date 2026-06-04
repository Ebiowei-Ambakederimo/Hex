export function Header() {
  return (
    <box alignItems="center" justifyContent="center" flexGrow={1}>
      <box
        justifyContent="center"
        alignItems="flex-end"
        gap={0.5}
        flexDirection="row"
      >
        <ascii-font font="tiny" text="Hex" />
      </box>
    </box>
  );
}