import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraUiProvider } from "./providers/ChakraUiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikhil's Website",
  // icons: {
  //   icon: "/icons/fire.svg",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraUiProvider>{children}</ChakraUiProvider>
      </body>
    </html>
  );
}
