import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
  import { ReactNode } from 'react';
import style from "./Footer.module.css"
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function FooterIcons() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text className={style.footerText}>
          COING Inc, 2100 Geng Road, Suite 210, Palo Alto, CA 94303, USA, +1-855-738-8741
          </Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton className={style.icons} label={'Twitter'} href={'https://twitter.com/Clockify'}>
              <FaTwitter />
            </SocialButton>
              <SocialButton className={style.icons} label={'Facebook'} href={'https://www.instagram.com/clockify.me/'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton className={style.icons} label={'YouTube'} href={'https://www.youtube.com/clockify'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton className={style.icons} label={'Instagram'} href={'https://www.instagram.com/clockify.me/'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }