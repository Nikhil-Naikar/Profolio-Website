import { ChakraUiProvider } from "./providers/ChakraUiProvider";
import Fonts from "./fonts/fonts";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Nikhil's Website</title>
      </head>
      <body suppressHydrationWarning>
        <Fonts />
        <ChakraUiProvider>{children}</ChakraUiProvider>
      </body>
    </html>
  );
}