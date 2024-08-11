"use client";
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <h1>Hello World, Welcome to my profolio website</h1>
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>
    </div>
  );
};

export default Home;
