"use client"

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, Image, Badge } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface childrenProp{
    children: React.ReactNode
}

export const Title = ({children}:childrenProp) => {
    return (<Box>
        <NextLink href="/works" className="cursor-pointer text-teal-500">
            Works
        </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
    )
}

interface workImageProps{
    src: string,
    alt: string
}

export const WorkImage = ({ src, alt }:workImageProps) => {
    return (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)}

export const Meta = ({children}:childrenProp) => {
    return (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge> 
    )
}


