import { ChakraUiProvider } from "./providers/ChakraUiProvider";
import Fonts from "./fonts/fonts";
import Scroll from "@/components/Scroll";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Nikhil's Website</title>
        <link rel="icon" href="/cloud.ico" type="image/x-icon" />
      </head>
      <body suppressHydrationWarning>
        <Fonts />
        <Scroll />
        <ChakraUiProvider>{children}</ChakraUiProvider>
      </body>
    </html>
  );
}