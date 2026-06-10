import { Outlet } from 'react-router';
import { ToastProvider } from "../providers/toast";
import { KeyboardLayerProvider } from "../providers/keyboard-layer";
import { DialogProvider } from "../providers/dialog";
import { ThemedRoot } from "./themed-root";

export function RootLayout() {
  return (
    <ToastProvider>
      <KeyboardLayerProvider>
        <DialogProvider>
          <ThemedRoot>
          <Outlet />
          </ThemedRoot>
        </DialogProvider>
      </KeyboardLayerProvider>
    </ToastProvider>
  );
};