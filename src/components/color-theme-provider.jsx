"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ColorThemeProvider({ children, ...props }) {
   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
