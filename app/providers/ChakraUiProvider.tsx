// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";

export const ChakraUiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
