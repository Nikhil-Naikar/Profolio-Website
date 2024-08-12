"use client";

import { ChakraProvider } from "@chakra-ui/react";
import custom_theme from "@/theme";

export const ChakraUiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ChakraProvider theme={custom_theme}>{children}</ChakraProvider>;
};
