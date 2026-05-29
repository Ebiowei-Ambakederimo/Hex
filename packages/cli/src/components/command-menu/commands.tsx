import type { Command } from "./types";

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: " Start a anew conversation ",
        value: "/new",
    },
    {
        name: "agents",
        description: " Switch agents ",
        value: "/agents",
    },
    {
        name: "models",
        description: " select AI models ",
        value: "/models",
    },
    {
        name: "sessinos",
        description: " Browse past sessinos ",
        value: "/sessinos",
    },
    {
        name: "theme",
        description: " Change color theme ",
        value: "/theme",
    },
    {
        name: "login",
        description: " Sign in with your browser ",
        value: "/login",
    },
    {
        name: "logout",
        description: " Sign out of your account ",
        value: "/logout",
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