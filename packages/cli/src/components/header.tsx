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
        <ascii-font font="tiny" text="code" color="blue" />
      </box>
    </box>
  );
}