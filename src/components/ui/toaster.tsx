"use client"

import { ToastProvider, ToastViewport } from "@radix-ui/react-toast"
import { cn } from "@/lib/utils"

export function Toaster() {
  return (
    <ToastProvider>
      <ToastViewport
        className={cn(
          "fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:left-auto sm:top-auto sm:flex-col md:max-w-[420px]"
        )}
      />
    </ToastProvider>
  )
}
