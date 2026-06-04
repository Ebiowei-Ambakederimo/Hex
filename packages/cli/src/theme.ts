export type ThemeColors = {
    primary: string;
    planMode: string;
    selection: string;
    thinking: string;
    success: string;
    error: string;
    info: string;
    background: string;
    surface: string;
    dialogSurface: string;
    thinkingBorder: string;
    dimSeparator: string;
};

export type Theme ={
    name: string;
    color: ThemeColors;
};

export const THEMES: Theme[] = [
    {
        name: "Nightfox",
        color: {
            primary: "#56D6C2",
            planMode: "#CFBEF4",
            selection: "#B9B4FA",
            thinking: "#B2E0AA",
            success: "#",
            error: "#E74C5E",
            info: "#56D6C2",
            background: "#",
            surface: "#",
            dialogSurface: "#",
            thinkingBorder: "#",
            dimSeparator: "#",
        },
    },
];

export const DEFAULT_THEME = THEMES.find((t) => t.name === "Nightfox")!;