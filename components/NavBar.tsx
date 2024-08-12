'use client'

import Logo from "./Logo";
import NextLink from "next/link";
import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from 'react';
import ThemeToggleButton from "./ToggleButton";

interface listitems_Props{
    href:string,
    path:string,
    children: React.ReactNode
}

interface navbar_props{
    path: string
}

const LinkItem = (props:listitems_Props) => {
    const { href, path, children} = props;
    const active:boolean = path == href;
    const activeColor = useColorModeValue('gray200', 'whiteAlpha.900');

    
    return (
        <NextLink href={href}>
            <Box
                as="span"
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : activeColor}
            >
                {children}
            </Box>
        </NextLink>
    )
}

const NavBar = (props:navbar_props) => {
    const { path } = props;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Set a flag indicating the component is mounted on the client
        setIsMounted(true);
    }, []);

    // Conditionally render components that may cause SSR and CSR mismatches
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px'}}
            zIndex={1}
            {...props}
        >
            <Container 
                display="flex" 
                p={2} 
                maxW="container.md"
                justifyContent={"space-between"}
                textAlign="center"
                flexWrap={"wrap"}
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Logo />
                    </Heading>
                </Flex>
                {isMounted && (
                    <Stack
                        direction={{ base: "column", md: "row" }}
                        display={{ base: "none", md: "flex" }}
                        width={{ base: "full", md: "auto" }}
                        alignItems="center"
                        flexGrow={1}
                        mt={{ base: 4, md: 0 }}
                    >
                        <LinkItem href="/works" path={path}>
                            Works
                        </LinkItem>
                        <LinkItem href="/contact-me" path={path}>
                            Contact Me 
                        </LinkItem>
                    </Stack>
                )}
                <Box flex={1} textAlign="right">
                    <ThemeToggleButton />
                    {isMounted && (
                        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                            <Menu>
                                <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                                <MenuList>
                                    <NextLink href="/" passHref>
                                        <MenuItem>About</MenuItem>
                                    </NextLink>
                                    <NextLink href="/works" passHref>
                                        <MenuItem>Works</MenuItem>
                                    </NextLink>
                                    <NextLink href="/contact-me" passHref>
                                        <MenuItem>Contact Me</MenuItem>
                                    </NextLink>
                                </MenuList>
                            </Menu>
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar;



