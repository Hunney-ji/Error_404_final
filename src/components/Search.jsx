import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Stack } from '@mui/material'
import { Contactus} from './link.js'
const Search = ({}) => {
  const {id}=useParams();
  return (
  <>
  <Box display='flex' >
  
    <Box width='1100px' height='700px' ml='10px' color='white'>
    <video width='100%' height='100%' controls >
        <source src={`/videos/${id}.mp4`}/>
    </video>
    <div className='desc'><h1>Movie name : <b>{id}</b> </h1> <h2> <img height='40px' width='200px' src='https://lh3.googleusercontent.com/pw/ADCreHcxbg2Z1adD8cs2OuyLhBRYBp9ossFd-InPIWXg-bZh9lotT8cnIe2EoUx6FCArx2gRCTVaRkwX5XEumqh7YgYjEQWwu35wvJOx6gL6v6P75iuUmQ=w2400'/></h2> </div>
    </Box>
    <Stack className='scroll1' flexDirection='row' display='flex' flexWrap='wrap' justifyContent='space-evenly'>
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

export default Search
