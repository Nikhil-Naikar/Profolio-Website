'use client'

import { ChakraUiProvider } from "./providers/ChakraUiProvider";
import { usePathname } from "next/navigation";
import Fonts from "./fonts/fonts";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <head>
        <title>Nikhil's Website</title>
      </head>
      <body>
        <Fonts />
        <ChakraUiProvider>{children}</ChakraUiProvider>
      </body>
    </html>
  );
}
