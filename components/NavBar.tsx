import Logo from "./Logo";
import NextLink from "next/link";
import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : activeColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const NavBar = (props:navbar_props) => {
    const { path } = props;

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
                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/contact-me" path={path}>
                        Contact Me 
                    </LinkItem>
                </Stack>
                <Box flex={1} textAlign="right">
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/contact-me" passHref>
                                    <MenuItem as={Link}>Contact Me</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar;



