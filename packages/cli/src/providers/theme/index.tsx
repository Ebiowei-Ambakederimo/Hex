import {mkdirSync, readFileSync, writeFileSync} from "node:fs";
import {homedir} from "node:os";
import {join} from "node:path";
import {createContext, useContext, useState, useCallback} from "react";
import type {ReactNode} from "react";
import type {ThemeColors, Theme} from "../../theme";
import {DEFAULT_THEME, THEMES} from "../../theme"

const CONFIG_DIR = join(homedir(), ".hex");
const THEME_PREFERINCES_PATH = join(CONFIG_DIR, "preferenxes.json");

type ThemePreferences = {
    themeName: string;
};

function getInitialTheme(): Theme {
    try {
        const preferences = JSON.parse(
            readFileSync(THEME_PREFERINCES_PATH, "utf8"),
        ) as Partial<ThemePreferences>;
        const savedTheme = THEMES.find((theme) => theme.name === preferences.themeName);
        return savedTheme ?? DEFAULT_THEME;
    } catch {
        return DEFAULT_THEME
    }
};