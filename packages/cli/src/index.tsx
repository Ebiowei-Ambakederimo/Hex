import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";
// import { StatusBar } from "./components/status-bar";

function App() {
  return (
    <box 
      alignItems="center" 
      justifyContent="center" 
      flexGrow={1} 
      width="100%" 
      height="100%" 
      gap={2} 
      backgroundColor="#0D0D12"
    >
     <Header />
     <box width="100%" maxWidth={108} paddingX={2}>
      <InputBar onSubmit={() => {}} />
     </box>
     {/* <StatusBar /> */}
    </box>
  );
}

const renderer = await createCliRenderer({
  targetFps:60,
  exitOnCtrlC: false
});
createRoot(renderer).render(<App />);
