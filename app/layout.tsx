import { ChakraUiProvider } from "./providers/ChakraUiProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Nikhil's Website</title>
      </head>
      <body suppressHydrationWarning={true}>
        <ChakraUiProvider>{children}</ChakraUiProvider>
      </body>
    </html>
  );
}
