import Logo from "./Logo";
import NextLink from "next/link";
import { Box, Container, Link, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface listitems_Props{
    href:string,
    path:string
}

interface navbar_props{
    path: string
}




const LinkItem = (props:listitems_Props,{children}: Readonly<{ children: React.ReactNode }>) => {
    const { href, path} = props;
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
            Nav bar
        </Box>
    )
}

export default NavBar;



