import React from 'react'
import { Box } from '@mui/material'
import { Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {Contactus} from './link.js'
const Videocard = ({}) => {
    const { id}=useParams();
  return (
    <>
    
    <Box marginTop='10px' alignItems='center'>
    <Box width='auto' height='900px' ml='10px' color='white'>
    <video autoPlay width='100%' height='750' controls >
        <source src={`/videos/${id}.mp4`}/>
    </video>
    <div className='desc'><h1>Movie name : <b>{id}</b> </h1> <h2> <img height='40px' width='200px' src='https://lh3.googleusercontent.com/pw/ADCreHcxbg2Z1adD8cs2OuyLhBRYBp9ossFd-InPIWXg-bZh9lotT8cnIe2EoUx6FCArx2gRCTVaRkwX5XEumqh7YgYjEQWwu35wvJOx6gL6v6P75iuUmQ=w2400'/></h2> </div>

    <div className='line'></div>
    <h1 className='rel'> Cate<span>gories</span></h1>
    </Box>
    <Stack flexDirection='row' flexWrap='wrap' display='flex' justifyContent='space-evenly' mt='15px' >
        <Link to='/videocard/fast and furious'><Box className='newrel1' sx={{height:'200px',width:'300px',ml:'30px' ,borderRadius:'20px',mt:'23px'}}><img  height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHeIHhGH9rv1d0bR2nV_ymwxNH5fsVI895nOdzCMFIpC04c6qYbg_8RSryIv_mx-2Kmamq4ABU1UQ5QNUcOtJ5OnOeS0DEJvHfOCBaRwJq9zFbdwdaU=w2400'/></Box></Link>
        <Link to='/videocard/squid game'><Box className='newrel1' sx={{height:'200px',width:'300px',ml:'30px' ,borderRadius:'20px',mt:'23px'}}><img  height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHeHIGX2WPftNZw7725qKawM0BLiATLabL8EAOGux0hrkhz7gxVgnXBJ9aoRzQF6sv69Rz-I8iA_gqEyF5sF8QQ-1-5_-RHOehnJgVL-0A0H_5tSs4o=w2400'/></Box></Link>
        <Link to='/videocard/incredibles'><Box className='newrel1' sx={{height:'200px',width:'300px',ml:'30px' ,borderRadius:'20px',mt:'23px'}}><img  height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHe-Q1xQpLuumkcOkcckuUHkOmXuSvVfK71yNjDF6g8qGsVA_QpHCvW1sT7HGrXZ_ufWJ1LVs7Joj2V4gfsuWQbWsFQvJ8gRl0DiNKUHaoqQJBtsfQI=w2400'/></Box></Link>
        <Link to='/videocard/super 30'><Box className='newrel1' sx={{height:'200px',width:'300px',ml:'30px' ,borderRadius:'20px',mt:'23px'}}><img  height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHdpm5PK5fkG58TQtd5Zbcz_fPD1_YD2AILvEPUFqbykurTUazp9McdPANaaJcXJLnLMFEnZw_HCk2Zj-DDpWUGSoSmnBL02sOPDY5yawaVD6XYyulk=w2400'/></Box></Link>
        <Link to='/videocard/how to train dragon'><Box className='newrel1' sx={{height:'200px',width:'300px',ml:'30px' ,borderRadius:'20px',mt:'23px'}}><img  height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHdQ1ukm3WYDKOX19F3MZGwOqWzqv7lMcPi_dGgLsn1MKaSxIVoDBpiwzOJcQKE_FCLBAQ-k63iBHaVKlJdEz1pM5gHpj4xtpYnuekBV8trMWIx25AE=w2400'/></Box></Link>
        <Link to='/videocard/transformer'><Box className='newrel1' sx={{height:'200px',width:'300px',ml:'30px' ,borderRadius:'20px',mt:'23px'}}><img  height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHcECSXGVeeIThjhdzw2Qti0MingysyFb6xiCNS-HSPF8--K7oaQOH0X2h-0pMu8c940pMhtY-9sY6a8BSz15EDlEO-sPP4_LNQTuWI3RrZpI4eh7w=w2400'/></Box></Link>
        <Link to='/videocard/black adam'><Box className='newrel1' sx={{height:'200px',width:'300px',ml:'30px' ,borderRadius:'20px',mt:'23px'}}><img  height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHdmmNjgVW-OHs-nz8cF1VlyHvjsfT7YeS3vOOSzHU_TylnFACv6Ie4xJyAoLugQx6irUz0yhlLe_uUtmsHDb3U5FfM9ggd4I3ey5KlGRSGCTwQw9Q=w2400'/></Box></Link>
        <Link to='/videocard/top gun'><Box className='newrel1' sx={{height:'200px',width:'300px',ml:'30px' ,borderRadius:'20px',mt:'23px'}}><img  height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHc4u55WZB4Ic7bYNoAHFdmnuMmRoLcO0vik1lHiMJVJmcycWg6Lgtj_JW23b7PjaTZZVeXGNWqB6yhF6MprQS8VYoYWLjA17IfIxWHDXp5O5OHV7A=w2400'/></Box></Link>
        <Link to='/videocard/swades'><Box className='newrel1' sx={{height:'200px',width:'300px',ml:'30px' ,borderRadius:'20px',mt:'23px'}}><img  height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHcZuQ3neY4gq4glNbcsE2RNnepe7iGKu4UeOnLZlI5UMpNI2N5YyuLN0CuRZbsnqSsM3yUQoMaIGJOPTeEfrkJEZRd5PpY2Utwun-ZYqTlKhOVb9A=w2400'/></Box></Link>
        <Link to='/videocard/wonder women'><Box className='newrel1' sx={{height:'200px',width:'300px',ml:'30px' ,borderRadius:'20px',mt:'23px'}}><img  height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHcZHbErceSdGP8VT0-lWqZTcKKjlIAv-i5fu7cT8XmfWy5bucb2vTHkcRJZZPuNfSUh0xbId1Wxt3_Zzy-EPchfpce_lYvw2iv_BYNN22afPv3pCA=w2400'/></Box></Link>
        <Link to='/videocard/madmax'><Box className='newrel1' sx={{height:'200px',width:'300px',ml:'30px' ,borderRadius:'20px',mt:'23px'}}><img  height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHe_Ih6A2uqaVL2wuIJNa72HjdqUekN4zhTICofdUR4e9R_iwCDD6VlyeneJXuh06J6qXfcMBeu29_YjXGCBIg8vy0x-d-WixAk6ginY8AHq59JyHtc=w2400'/></Box></Link>
        <Link to='/videocard/jumanji'><Box className='newrel1' sx={{height:'200px',width:'300px',ml:'30px' ,borderRadius:'20px',mt:'23px'}}><img  height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHfvC3LSH6EH-vEHI--oCvwPY_kmKLzlTWnORrHUl8s8lU5QPm111qrrP0WJii1YhyosVjsfurImzjf449ZlAm6ggCYWz9MB4tH9RbYFwNw7NfAXfHA=w2400'/></Box></Link>
   </Stack>
   </Box>
   <Contactus/>
    </>
  )
}
export default Videocard


