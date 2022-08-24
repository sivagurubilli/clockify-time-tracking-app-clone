import React from 'react';
import {
    Box,
    Button
} from '@chakra-ui/react';
import style from "./Navbar.module.css"

 const Navbar = () => {
  return (
    <nav className={style.nav}>
        <div className={style.div1}>
            <Box>
              <img src="https://clockify.me/assets/images/clockify-logo.svg" alt="" />
            </Box>

            <Box>FEATURES</Box>
            <Box>DOWNLOAD</Box>
        </div>



        {/* Account */}
        <div className={style.acc}>
            <Box>
                <button className={style.btn1} colorScheme='teal' variant='ghost'>LOG IN</button>
            </Box>
            <Box>
                <button className={style.btn}>
                SIGN UP FREE
                </button>
            </Box>
        </div>
    </nav>
  )
}

export default Navbar;
