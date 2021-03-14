
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../assets/bb-logo.svg'

import
{
  Box,
  Flex,
  Spacer
} from '@chakra-ui/react';

function Header(props)
{
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      bgColor="brand.800"
    >

      {/* <Logo style={{ transform: "scale(0.5)" }} /> */}


      <Link href="/" passHref>
        <a>
          <Image
            src="/bb-logo.svg"
            alt="Breaking Bad Logo"
            width={200}
            height={80}
          />
        </a>
      </Link>
      <Spacer />


    </Flex>
  );
}

export default Header;