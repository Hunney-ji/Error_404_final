import React from 'react'
import { useState,useEffect } from 'react'
import { Box, Stack,Typography } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Logo } from '../important/constants'
import { fetchfromapi } from '../important/fetchfromapi'
import { Video } from './link.js'
import { Link } from 'react-router-dom'
import { keyframes } from '@mui/material'
import styled from '@emotion/styled'
const Main = () => {
    const [selectedCategory ,setselectedCategory]=useState('0');
    const [videos ,setvideos]=useState([]);
    
    useEffect(()=>{
        fetchfromapi(`search?part=snippet&q=${selectedCategory}`)
        .then((data)=>{setvideos(data.items)})
    },[selectedCategory])
  return (
    <>
    <Stack className='div' sx={{display:'flex', flexwrap:'wrap',flexDirection:'row',justifyItems:'center',
    height:'70vh',
    width:'90%',
    mt:'10px',
        ml:'85px',
        overflow:'auto',
        scrollBehavior:'smooth'
        }}>
        <Link to='/videocard/100'>
        <Box className='head' sx={{display:'flex',marginRight:'150px', flexwrap:'wrap',flexDirection:'row',justifyItems:'center',}}>
            <Stack>
            <img height='100%' width='1300px' src='https://lh3.googleusercontent.com/pw/ADCreHdnSiAftiTuVrTv8NwO09m1jUNua-Jk3uIOuV8Kpe2MjiBNv0G9GBdr_TlVOec1F_S502qDY3moFNV7ChRkhGrUjGesRd3j98jS0OH1tlgKvbezEA=w2400'/>
            </Stack>
        
        </Box>
        </Link>
        <Link to='/videocard/101'>
        <Box className='head' sx={{display:'flex',marginRight:'200px', flexwrap:'wrap',flexDirection:'row',justifyItems:'center',}} >
            <img height='100%' width='1075px' src='https://lh3.googleusercontent.com/pw/ADCreHeZKZbgeerbOWwMPSrxPM8PH_xkMKd8INK1fNsfQUSsTjtUhHQPxeJ24Wm0I9ijWMGvWfeIc5cx4hwypn2nVaAoQnVcBaR0htUC7Qzr0-r2d-oj9w=w2400'/>
        </Box>
        </Link>
        <Link to='/videocard/pirates of caribbean'>
        <Box className='head' sx={{display:'flex',marginRight:'200px', flexwrap:'wrap',flexDirection:'row',justifyItems:'center',}}>
        <img height='100%' width='1260px' src='https://lh3.googleusercontent.com/pw/ADCreHeZbXwcOBMxx75A6j9N2KSFi6iDrPPDSuG5EvNysNHOx0n3hs2xFEF3dISBGJaASa-AuDK4n0DpfW7BdMmOOm7hmiUDki5Dp1cKeO214bNrd5xArTU=w2400'/>
        </Box>
        </Link>
        
        <Link to='/videocard/102'>
        <Box className='head' sx={{display:'flex',marginRight:'200px', flexwrap:'wrap',flexDirection:'row',justifyItems:'center',}}>
            <img height='100%' width='1075px' src='https://lh3.googleusercontent.com/pw/ADCreHf3xUMd6NdBAqQDYXRUH2fetRFp1HBTGlC7CxnAGdXsEvYc2i90xbg1zKNATZByf--_X-Rh82tSD6tJ6pWHt_49IBIYkqrTWQ-bgD2niiqZJ8OqGw=w2400'/>
        </Box>
        </Link>
        <Link to="/videocard/103">
            <Box className='head' sx={{display:'flex',marginRight:'200px', flexwrap:'wrap',flexDirection:'row',justifyItems:'center',}}>
            <img height='auto' width='1075px' src='https://lh3.googleusercontent.com/pw/ADCreHewIx9gXCmSg1lZgenzh0Cdjr1orAypvC0O2PBc2IPh0oHeeJkjnPM_5y8wtWnboIYu5P5LZIaIFSAjqW2Pq7UPcURXxwbI2gq7sTed_HCSKNLNaFA=w2400'/>
        </Box></Link>
        
        
        
        
        
    </Stack>
   
    <Video
    videos={videos}
    selectedCategory={selectedCategory}
    setselectedCategory={setselectedCategory}/>
    </>

  )
}

export default Main

const scrollX =keyframes`
from {
    left:translateX(0);
}
to{
    left:translateX(-100%);
}
`