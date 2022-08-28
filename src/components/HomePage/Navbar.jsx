import React from 'react';
import {
    Box,
    Button
} from '@chakra-ui/react';
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAPI } from '../../redux/authreducer/Action';

 const Navbar = () => {
const dispatch=useDispatch()

    const isAuth = useSelector((state) => state.authreducer1.isAuth);
    console.log(isAuth)
  return (
    <nav className={style.nav}>
        <div className={style.div1}>
            <Box>
              <img src="https://clockify.me/assets/images/clockify-logo.svg" alt="" />
            </Box>
            <Link to='/feature-list'>
            <Box>FEATURES</Box>
            </Link>

            <Link to="/download">
            <Box>DOWNLOAD</Box>
            </Link>
        </div>



        {/* Account */}
        {!isAuth?( 
        <div className={style.acc}>




                 
            <Box>
            <Link to="/login">
                <button className={style.btn1} colorScheme='teal' variant='ghost'>LOG IN</button>
                </Link>
            </Box>
            <Box>
            <Link to="/signup">          
               <button className={style.btn}>
                SIGN UP FREE
                </button>
                </Link>
   
            </Box>
        
        </div>
        ):
        ( 
            <div className={style.acc}>
    
    
    
    
                     
                <Box>
                <Link to="/login">
                    <button className={style.btn1} colorScheme='teal' variant='ghost'>Help</button>
                    </Link>
                </Box>
                <Box>
                <Link to="/signup">          
                   <button className={style.btn}>
                 Go To Tracker
                    </button>
                    </Link>
       
                </Box>
            
            </div>
            )
    
    }
    </nav>
  )
}

export default Navbar;