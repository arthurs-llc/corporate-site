import { HStack, Image, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 bg-white opacity-90 w-full flex">
      <Link href="#"><Image src="logo_transparent.png" w="200px" h="60px" objectFit="cover" objectPosition="50% 45%;"
                                    marginLeft="-10px" alt="logo"/></Link>
      <Spacer/>
      <HStack spacing={5} paddingEnd={3} alignItems="center" display={{ base: 'none', md: 'flex' }}>
        <Link href="#business">事業内容</Link>
        <Link href="#company">会社概要</Link>
        <Link href="#contact">問い合わせ</Link>
      </HStack>
      <HStack spacing={5} paddingEnd={3} display={{ md: 'none' }}>
        <Menu>
          <MenuButton>
            <GiHamburgerMenu/>
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} href="#business">事業内容</MenuItem>
            <MenuItem as={Link} href="#company">会社概要</MenuItem>
            <MenuItem as={Link} href="#contact">問い合わせ</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </header>
  )
}
