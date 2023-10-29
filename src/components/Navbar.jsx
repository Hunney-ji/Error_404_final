import React from 'react'
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import {Logo} from '../important/constants'
import Search from './Search'
import Searchbar from './Searchbar'
const Navbar = () => {
  return (
    <Stack className='nav'
    direction="row" 
    alignItems={'center'} 
    sx={{position:'sticky',background:'transparent',left:34, justifyContent:'space-between',
    borderRadius:'20px',width:'95vw'}} 
    px={0}> 
        <Link to='/' style={{display:"flex" ,alignItems:'center', paddingLeft:'20px'}}>
        <img src={Logo} alt='logo' height={50}></img>
        </Link>
        <Stack sx={{flexDirection:'row'}}>
        <Searchbar/>
        <Link to='/' style={{display:"flex" ,alignItems:'center', paddingRight:'20px'}}>
        <img src='https://lh3.googleusercontent.com/pw/ADCreHfLY4Fw6-okSz9aVpzk6QSrYZSQHXYip0m32XiQa6-q4kS_Z-qRe-T80DHNd2SzRyNvz2UN-Z5oL07h88YL_5Zinm_pDmze2ZJnTyntj7IZXn305A=w2400' alt='logo' height={40}></img>
        </Link>
        </Stack>
    </Stack>
  )
}

export default Navbar
