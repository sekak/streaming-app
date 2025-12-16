"use client"

import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React, { useState } from 'react'

export default function ClientClerkProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "system")

  window.addEventListener("storage", () => {
    setTheme(localStorage.getItem("theme") || "system")
  })

  return <ClerkProvider appearance={{baseTheme: theme === "light" ? "simple" : dark}}>{children}</ClerkProvider>
}   