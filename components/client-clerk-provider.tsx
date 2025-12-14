"use client"

import React from "react"
import { ClerkProvider } from "@clerk/nextjs"
import { dark as clerkDark } from "@clerk/themes"
import { useTheme } from 'next-themes'

export default function ClientClerkProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme, setTheme } = useTheme()
  console.log("====>", theme)

  // next-themes resolves to 'dark' | 'light' | 'system' (resolvedTheme gives the active one)
  // @clerk/themes doesn't always export a 'light' named theme in some versions,
  // so only set baseTheme when in dark mode; otherwise let Clerk use its default.
  const baseTheme = theme === "dark" ? clerkDark : undefined

  return (
    <ClerkProvider appearance={{ baseTheme }}>{children}</ClerkProvider>
  )
}
