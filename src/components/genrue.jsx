import React from 'react'
import { Box } from '@mui/material'
import { Link, useParams} from 'react-router-dom'
import { Stack } from '@mui/material'
import {Contactus} from './link.js'
const Genrue = ({}) => {
    const {id}=useParams();
    let Link1;
    let title;
    switch(id){
        case 'once upon a time in bollywood': Link1='https://lh3.googleusercontent.com/pw/ADCreHfFTvo-tYZAsM-lFcvmfxgDhpCcw2h600m79JELj8tGDXKBm-ipuk8bKQjayuRqNa-jFxk_XL6O8LE2x5mfUuWQ8aVPtOwHSG3I36Tdej5ITQFNGQ=w2400';
                                                title='Drama';
                                                break;
        case 'master':Link1='https://lh3.googleusercontent.com/pw/ADCreHfxDCW566ncE8ILr6uaskjMgPN3OHgGol5d7YhIFxRsGz1yKvPDaD8pcfULWeiXQ1BiwfAzQajO4V_QyHkaID8V7OCsdIMIZo6e0J36Xt5YD2MOzGs=w2400';
                        title='action';
                        break;
        case '3 idiots':Link1='https://lh3.googleusercontent.com/pw/ADCreHcl_ylIjudjGkrpUeKorrVXK61uoRBewmllyduLCaS293T8pk9PmiMACkCPd4vflkjfFS3t59dQOq-S9pdjv7l-w0jV7NpRO2I5533RMbmqvGJoy1Y=w2400';
                        title='Comedy';
                        break;
        case 'cars':Link1='https://lh3.googleusercontent.com/pw/ADCreHc-ZnoqMUjSpBthb7ImUlofalhR-yV_F5VUBgUGL3kYYn-2hYdJsbwsFV7M029e17ptBdB0Gl7RChK7eqUKFv24qjVu0RPv4ot_iZWOw6hf0DToqic=w2400';
                        title='Animated';
                        break;
        case 'stranger things':Link1='https://lh3.googleusercontent.com/pw/ADCreHcXIP-WrGOiga8I5yw-OazVDoixp2Og_TlDERZjALe0FH-4ukVs7-ZA2PY3xa02FcflZMGePTUW0-q9qWSiwcqm3OeWGNLZURp9fOCW9aLJz_UmY9s=w2400'
                        title='Thriller';
                        break;
    }
  return (
    <>
    <div className='line'></div>
    <h1 className='contact'>Category : {title}</h1>
    <Box display='flex' >
  
    <Box width='1100px' height='700px' ml='10px' color='white'>
    <Link to={`/videocard/${id}`}><Box className='newrel1' sx={{height:'600px',width:'1000px',ml:'30px' ,borderRadius:'20px',mt:'43px'}}><img height='100%' width='100%' src={Link1}/></Box></Link>
    <div className='desc'><h1><b>{id}</b> </h1> <h2> <img height='40px' width='200px' src='https://lh3.googleusercontent.com/pw/ADCreHcxbg2Z1adD8cs2OuyLhBRYBp9ossFd-InPIWXg-bZh9lotT8cnIe2EoUx6FCArx2gRCTVaRkwX5XEumqh7YgYjEQWwu35wvJOx6gL6v6P75iuUmQ=w2400'/></h2> </div>
    </Box>
    <Stack className='scroll2' flexDirection='row' display='flex' flexWrap='wrap' justifyContent='space-evenly'>
      <Link to='/videocard/magnificend'><Box className='newrel1' sx={{height:'200px',width:'330px',ml:'30px' ,borderRadius:'20px',mt:'43px'}}><img height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHfRZlwI0ZUYVEAJjlDX7jiqc4qNvMjgU7N4EME-8IRfUxS0_KrxOCEsKN1JzN7ohzwuq47-vQUya8Wq3kMsFPSnuKFxr47cssuw2NqoTdxGz5DEhw=w2400'/></Box></Link>
      <Link to='/videocard/once upon a time in bollywood'><Box className='newrel1' sx={{height:'200px',width:'330px',ml:'30px' ,borderRadius:'20px',mt:'43px'}}><img height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHfFTvo-tYZAsM-lFcvmfxgDhpCcw2h600m79JELj8tGDXKBm-ipuk8bKQjayuRqNa-jFxk_XL6O8LE2x5mfUuWQ8aVPtOwHSG3I36Tdej5ITQFNGQ=w2400'/></Box></Link>
      <Link to='/videocard/joker'><Box className='newrel1' sx={{height:'200px',width:'330px',ml:'30px' ,borderRadius:'20px',mt:'43px'}}><img height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHc1mzMdTwV2XXN-cglaPjV6xyD7-dwOJtR-OtHxL5ekLif6nGPJxC7O368i5-meTlkqR2Jkut_pgA_7g0wzfrYRSNTH7ECCsFD59wbgwp9eT2E7VQ=w2400'/></Box></Link>
      <Link to='/videocard/ghost rider'><Box className='newrel1' sx={{height:'200px',width:'330px',ml:'30px' ,borderRadius:'20px',mt:'43px'}}><img height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHc9AWTOZX8ajUp6Csnt3z9qLdQ3HQsbPKDhCRpMcKb7iudA8Ba63ZZfgPuU7mEi6TLoZYF_yRbBC5gzX-Bpupku-SPyKyHzFSnS2rGyD7xo3-pvNA=w2400'/></Box></Link>
      <Link to='/videocard/interstellar'><Box className='newrel1' sx={{height:'200px',width:'330px',ml:'30px' ,borderRadius:'20px',mt:'43px'}}><img height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHcOCDcdaV3HD9JnMb5BdM61OZhdPCUlT1S5IuFqHfWDDrURSKLpHKqRTNBxZz2wXHtKpNfAdIyOOB46RYLSQvOjL_pHeum3jlvTYn8GhfznBy4Njg=w2400'/></Box></Link>
      <Link to='/videocard/the lion king'><Box className='newrel1' sx={{height:'200px',width:'330px',ml:'30px' ,borderRadius:'20px',mt:'43px'}}><img height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHfk_bcqhkJLfH9FkrL25j4af7TEuiCqYX6Ma3jr2x9MPI2l9UkG1ETk7QGM9A4XT0Utvq8bQmcmsaYf9z5XnJ2Bn8th6eb6AUzaEHnptDdLffLV9g=w2400'/></Box></Link>
      <Link to='/videocard/wonder women'><Box className='newrel1' sx={{height:'200px',width:'330px',ml:'30px' ,borderRadius:'20px',mt:'43px'}}><img height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHcZHbErceSdGP8VT0-lWqZTcKKjlIAv-i5fu7cT8XmfWy5bucb2vTHkcRJZZPuNfSUh0xbId1Wxt3_Zzy-EPchfpce_lYvw2iv_BYNN22afPv3pCA=w2400'/></Box></Link>
      <Link to='/videocard/wednesday'><Box className='newrel1' sx={{height:'200px',width:'330px',ml:'30px' ,borderRadius:'20px',mt:'43px'}}><img height='100%' width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHdxheJx7XVjkpcCwIss9w0NpFGQ9uqHUsmBrKL0uVfn4aunyRfjxbw9ykoDF6uEpj4uAeV6EluhWNwFu4PzfUQUV09b2W4B99s74LeFv7fMuWKKnw=w2400'/></Box></Link>
    </Stack>
  </Box>
  <Contactus/>
  </>
  )
}

export default Genrue
