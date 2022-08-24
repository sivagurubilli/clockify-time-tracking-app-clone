import React from 'react'
import dropdown from "../../timetracker/timetrackasset/Dropdown.png"
import help from "../../timetracker/timetrackasset/help.svg"
import notification from "../../timetracker/timetrackasset/notification.svg"
import menuoption from "../../timetracker/timetrackasset/menuoption.svg"
import logo from "../../timetracker/timetrackasset/clockifyLogo.svg"
import { Link } from 'react-router-dom'
import styles from "./Nav.module.css"
import {Box,Menu,MenuItem,MenuList,MenuButton,Text} from "@chakra-ui/react"

const Navbar = (props) => {

    const handletoggle =()=>{
     props.props.toggle ? props.props.togglenav(false) :props.props.togglenav(true)
    }

  return (
    <>
    <div className={styles.navmain}>
        <div className={styles.navmain1}>

            <img src ={menuoption}   onClick={()=>handletoggle()}  height="27px" width="27px" />
            <Link to ="/" ><img src ={logo} alt ="error" width="90px" height="24px"/></Link>
        </div>
      
        <div className={styles.navbar2}>
 <Menu isLazy>

    <MenuButton>
        <Box display ="flex">
        <Text>gurubilli siva work space </Text><img src ={dropdown} width="30px"/>
        </Box>
        </MenuButton>
<MenuList>
    <MenuItem>work spaces</MenuItem>
    <MenuItem>gurubilli sivas workspace
    </MenuItem>
</MenuList>

 </Menu>
 <div>
    <button className={styles.buttonnav}>upgrade</button>
 </div>
 <Box m ="auto" opacity ="50%" >
<img src ={help} alt ="error" width="20px" height="20px" />
 </Box>
 <Box m ="auto" opacity="50%">
    <img src ={notification} alt ="error" width ="16px" height="20px" />
 </Box>

 <Menu isLazy w ="10%" >
   <MenuButton p="8px" borderRadius="50%" backgroundColor="#03a9f4" color="white">gs</MenuButton>
 
 <MenuList >
    <MenuItem >Gurubilli siva </MenuItem>
    <MenuItem >Profile settings </MenuItem>
    <MenuItem >Dark mode </MenuItem>
    <MenuItem >download apps </MenuItem>
    <MenuItem >Try chat app </MenuItem>
 </MenuList>
 
 
 
 </Menu>

        </div>
        </div>

    </>
  )
}

export default Navbar