import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: " Start a new conversation ",
    value: "/new",
    action: (ctx) => {
      ctx.toast.show({ message: "Starting new conversation..." });
    },
  },
  {
    name: "agents",
    description: " Switch agents ",
    value: "/agents",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Mode",
        children: <text>Agent selection coming soon...</text>
      })
    },
  },
  {
    name: "models",
    description: " select AI models ",
    value: "/models",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Models",
        children: <text>Models selection coming soon...</text>
      })
    },
  },
  {
    name: "sessions",
    description: " Browse past sessions ",
    value: "/sessions",
  },
  {
    name: "theme",
    description: " Change color theme ",
    value: "/theme",
    action: (ctx) => {
      ctx.toast.show({ message: "Changing color theme..." });
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
