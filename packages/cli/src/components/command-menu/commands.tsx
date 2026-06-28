import { AgentsDialogContent, ModelsDialogContent, SessionsDialogContent, ThemeDialogContent } from "../dialogs";
import type { Command } from "./types";
import { SUPPORTED_CHAT_MODELS } from "@hex/shared";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: " Start a new conversation ",
    value: "/new",
    action: (ctx) => {
      ctx.navigate("/");
    },
  },
  {
    name: "agents",
    description: " Switch agents ",
    value: "/agents",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Agent",
        children: <AgentsDialogContent currentMode={ctx.mode} onSelectMode={ctx.setMode} />,
      })
    },
  },
  {
    name: "models",
    description: " select AI models ",
    value: "/models",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Model",
        children: (
          <ModelsDialogContent
            models={SUPPORTED_CHAT_MODELS.map((model) => model.id)}
            onSelectModel={ctx.setModel}
          />
        ),
      })
    },
  },
  {
    name: "sessions",
    description: " Browse past sessions ",
    value: "/sessions",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Sessions",
        children: <SessionsDialogContent />,
      })
    },
  },
  {
    name: "theme",
    description: " Change color theme ",
    value: "/theme",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Theme",
        children: <ThemeDialogContent />,
      })
    },
  },
  {
    name: "login",
    description: " Sign in with your browser ",
    value: "/login",
    action: (ctx) => {
      ctx.toast.show({ message: "Signing in..." });
    },
  },
  {
    name: "logout",
    description: " Sign out of your account ",
    value: "/logout",
    action: (ctx) => {
      ctx.toast.show({ message: "Signing out..." });
    },
  },
  {
    name: "upgrade",
    description: " Buy more credits ",
    value: "/upgrade",
  },
  {
    name: "usage",
    description: " Open billing portal in the browser ",
    value: "/usage",
  },
  {
    name: "exit",
    description: " Quit the application",
    value: "/exit",
    action: (ctx) => {
      ctx.exit();
    },
  },
];
