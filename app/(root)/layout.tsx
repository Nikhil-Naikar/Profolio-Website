'use client'

import Image from "next/image";
import { usePathname } from 'next/navigation'
import NavBar from "@/components/NavBar";
import { Box, Container } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()

  return (
    <Box pb={8}>
      <NavBar path={pathname}></NavBar>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box> 
  );
}
