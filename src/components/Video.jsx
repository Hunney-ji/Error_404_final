import React from 'react'
import { Stack } from '@mui/material'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography,Box } from '@mui/material'
import { categories } from '../important/constants'
import { Link } from 'react-router-dom'
import {Contactus} from './link.js'
const Video = ({selectedCategory,setselectedCategory,video}) => {
  return (
    <>
    <div className='line'></div>
    <h1 className='rel'> New <span>Releases</span></h1>
    <Stack className='rel2' sx={{
    height:'253px',
    width:'95vw',
    ml:'29px',overflow:'auto'}}>
        <Link to='/videocard/john wick'><Box className='newrel'  sx={{height:'170px',width:'260px' ,borderRadius:'20px',ml:'27px'}} ><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHc4VoE2IZsuCWc0kSYeSZspWwOKgLcPmNiccNXauum8Ry6MESs1I5MLSS3YbDlY4HizSHJQsrAxIpCfEoiZ7zXgeF6q1Ri_bsZozj3Uk4cSP9pleC0=w2400'/></Box></Link>
        <Link to='/videocard/johnny'><Box className='newrel'  sx={{height:'170px',width:'260px' ,borderRadius:'20px',ml:'27px'}} ><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHc1Gig7TxXt0ZwrCk4nLExlQqIx1iIw9yHMEIIyNVyrDxcp9tQB6JaklEhpvIKY7Qh8zPezQTI0qPV4noxHbmxlS75KHO4kX543uOA1vC6l1DYnsKc=w2400'/></Box></Link>
        <Link to='/videocard/kgf'><Box className='newrel'  sx={{height:'170px',width:'260px' ,borderRadius:'20px',ml:'27px'}} ><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHdLxNp7ormGkdj7OiyezqZw07ag26-lsAHSLPBElqSGAWfpyWGVTC1oDkRjX_rEbyITsXPpo_JSCQ_mNh5xuQMX3An3YNTItp2rFZ0Pt8n6EorTzqg=w2400'/></Box></Link>
        <Link to='/videocard/conjuring 2'><Box className='newrel'  sx={{height:'170px',width:'260px' ,borderRadius:'20px',ml:'27px'}} ><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHfxBrlzCsXRdiNuumfzG5tJQvqagxC9X9nRCLYxNbJzvySCNPqU6U-oC2EY42EgoX7t45dHs3_-yE0gd0afIPClNTe_diEFJX64FPHTHespSkj_RdM=w2400'/></Box></Link>
        <Link to='/videocard/3 idiots'><Box className='newrel'  sx={{height:'170px',width:'260px' ,borderRadius:'20px',ml:'27px'}} ><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHcl_ylIjudjGkrpUeKorrVXK61uoRBewmllyduLCaS293T8pk9PmiMACkCPd4vflkjfFS3t59dQOq-S9pdjv7l-w0jV7NpRO2I5533RMbmqvGJoy1Y=w2400'/></Box></Link>
        <Link to='/videocard/bahubali'><Box className='newrel'  sx={{height:'170px',width:'260px' ,borderRadius:'20px',ml:'27px'}} ><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHfPJunvBf-oTAcObakdUBBPr_bcC45c6D1Cby9zs4W9ujistEJ15-O14o84T7_tt252c9P5Y-RN_dD2TPae5ZCxgRr_2h_iUZiqjyRUZzRWQfixO9c=w2400'/></Box></Link>
        <Link to='/videocard/URI'><Box className='newrel'  sx={{height:'170px',width:'260px' ,borderRadius:'20px',ml:'27px'}} ><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHeqosvdyhUobOZb9OSnBJ9SkckmWNBAg0M9IBg65DFA6sIjSVBE7vGH8bhZaC1yqe68CdCQD-D_AIXsx8yQd7rqJNUgIvUii4cuKdGfu6Bun14vyyE=w2400'/></Box></Link>
        <Link to='/videocard/chhichhore'><Box className='newrel'  sx={{height:'170px',width:'260px' ,borderRadius:'20px',ml:'27px'}} ><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHeHih27YxP4cm5Z7ayL5n20M7gYdlXKnvRqJBopplm5ryTAHWeOKqzvCnpZP6DOBzFd7TwsNpVjBYtIPuYtViZ6rPYRRGU9esZMZEB0jEr98wIroO8=w2400'/></Box></Link>
        <Link to='/videocard/dream girl 2'><Box className='newrel'  sx={{height:'170px',width:'260px' ,borderRadius:'20px',ml:'27px'}} ><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHehgI1bmyYSVizbKGyN4cO6gbKgPZvzFi3WFZgB29_qh4Ih-7RkiA4CLRzAE-g4YOwoZ_y1EW3xngY8fHYHxh--j3w2AzuD5ZULGGJmIdPn4Spc9xg=w2400'/></Box></Link>
    </Stack>
    <div className='line'></div>
    <h1 className='rel'> Tren<span>ding</span></h1>
    <Stack className='rel2' sx={{
    height:'253px',
    width:'95vw',
    ml:'29px',overflow:'auto'}}>
        <Link to='/videocard/master'><Box className='newrel2' sx={{height:'200px',width:'299px' ,borderRadius:'15px',ml:'40px'}}><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHfxDCW566ncE8ILr6uaskjMgPN3OHgGol5d7YhIFxRsGz1yKvPDaD8pcfULWeiXQ1BiwfAzQajO4V_QyHkaID8V7OCsdIMIZo6e0J36Xt5YD2MOzGs=w2400'/></Box></Link>
        <Link to='/videocard/inception'><Box className='newrel2' sx={{height:'200px',width:'299px' ,borderRadius:'15px',ml:'40px'}}><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHdi4QttwCuT3D78RrerMF00aJW5XbkTfCn8KhWNsTr0lYtJ45ltNZV-WpcScOwW6Gaq64qEoARdOPX0CHUBRVWgaZ4gXCtxvOse-HHcbKoO8x3-jE8=w2400'/></Box></Link>
        <Link to='/videocard/cars'><Box className='newrel2' sx={{height:'200px',width:'299px' ,borderRadius:'15px',ml:'40px'}}><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHc-ZnoqMUjSpBthb7ImUlofalhR-yV_F5VUBgUGL3kYYn-2hYdJsbwsFV7M029e17ptBdB0Gl7RChK7eqUKFv24qjVu0RPv4ot_iZWOw6hf0DToqic=w2400'/></Box></Link>
        <Link to='/videocard/stranger things'><Box className='newrel2' sx={{height:'200px',width:'299px' ,borderRadius:'15px',ml:'40px'}}><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHcXIP-WrGOiga8I5yw-OazVDoixp2Og_TlDERZjALe0FH-4ukVs7-ZA2PY3xa02FcflZMGePTUW0-q9qWSiwcqm3OeWGNLZURp9fOCW9aLJz_UmY9s=w2400'/></Box></Link>
        <Link to='/videocard/money heist'><Box className='newrel2' sx={{height:'200px',width:'299px' ,borderRadius:'15px',ml:'40px'}}><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHcNwXJ45twyz1Qb5h8WQAT5S8YFr5NKQ74RiEzb6_UROD51I9YoZITZayEwNQLbiy8FSX6ofrrqf9gz5iTOh80lQ5_swUnGw3_bBqGbXFSi68ownQk=w2400'/></Box></Link>
        <Link to='/videocard/nemo'><Box className='newrel2' sx={{height:'200px',width:'299px' ,borderRadius:'15px',ml:'40px'}}><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHetI-xgurYAnILY8P-Qy7GQZgkfEFdD3lGFjeVGaGsybfo67Z_Iwufxnvu77rGGF5tNkQ88wur5q7ZO8YbRJC-FjEC0rwrS648nHVfduU4XcKYNW94=w2400'/></Box></Link>
        <Link to='/videocard/'><Box className='newrel2' sx={{height:'200px',width:'299px' ,borderRadius:'15px',ml:'40px'}}><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHey0CdRTpMBoBg2og3ZH6B7ixgP1aKznF29ZI0jkUAijOMbr81fNZSeycO0LG-PSqfsBAD_RoegVl52CTl6-F5rv_URDiOou43Vv1PHhsmx_470DOQ=w2400'/></Box></Link>
        <Link to='/videocard/RRR'><Box className='newrel2' sx={{height:'200px',width:'299px' ,borderRadius:'15px',ml:'40px'}}><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHeesjFu_IptV2s8l4d9dqfGJvs5BBnKFC2b1wq2ja7ICCVk9RzhRuR0Cn22QCqy0kqKfOH1uoFbvf7zJ26Wv8MT9X6PZBbczFit8mHkTBCAOLhEwcI=w2400'/></Box></Link>
        <Link to='/videocard/jumanji'><Box className='newrel2' sx={{height:'200px',width:'299px' ,borderRadius:'15px',ml:'40px'}}><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHfvC3LSH6EH-vEHI--oCvwPY_kmKLzlTWnORrHUl8s8lU5QPm111qrrP0WJii1YhyosVjsfurImzjf449ZlAm6ggCYWz9MB4tH9RbYFwNw7NfAXfHA=w2400'/></Box></Link>
        <Link to='/videocard/madmax'><Box className='newrel2' sx={{height:'200px',width:'299px' ,borderRadius:'15px',ml:'40px'}}><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHe_Ih6A2uqaVL2wuIJNa72HjdqUekN4zhTICofdUR4e9R_iwCDD6VlyeneJXuh06J6qXfcMBeu29_YjXGCBIg8vy0x-d-WixAk6ginY8AHq59JyHtc=w2400'/></Box></Link>
    </Stack>
    <div className='line'></div>
    <h1 className='rel'> Cate<span>gories</span></h1>
    <Stack className='rel2' sx={{
    height:'253px',
    width:'95vw',
    ml:'29px',overflow:'auto'}}>
        <Link to='/genrue/once upon a time in bollywood'><Box className='newrel1' sx={{height:'250px',width:'506px' ,borderRadius:'20px',ml:'35px'}}><img  height='100%'  width='100%'src='https://lh3.googleusercontent.com/pw/ADCreHeJoR-oFfkmFOWvButNl85yRfLPamcs0EyA1P5OaZ6IiDvjuUBrvG9XxMuN0lawNX6mKnSlPiBdI60RaU3GoOIEZUKpZhgRw8nhNM1f2FT8-Z1SGMY=w2400'/></Box></Link>
        <Link to='/genrue/master'><Box className='newrel1' sx={{height:'250px',width:'506px' ,borderRadius:'20px',ml:'35px'}}><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHccUGwFe28d-QdUae4twxRTpTcFWDmBu19GajIU6OhP0IcmE1vStpPphe_hdRKuKf4o6c9wYxLDg8RdSdOdue7cvB2qHMK6gG_VqVQH7oskfuRTcMg=w2400'/></Box></Link>
        <Link to='/genrue/cars'><Box className='newrel1' sx={{height:'250px',width:'506px' ,borderRadius:'20px',ml:'35px'}}><img height='100%'  width='100%' src='https://lh3.googleusercontent.com/pw/ADCreHfNEvBbs2C4Kwu3LEHiZTNGccR2ynVF-f-lVtKWQX3bFOO5ynmYi2czYLVqaN3QRF3Mum9Yblf9A0TzvSibhRiuwb7C23wgE7FKlkOrmaMux8CATxE=w2400'/></Box></Link>
        <Link to='/genrue/3 idiots'><Box className='newrel1' sx={{height:'250px',width:'506px' ,borderRadius:'20px',ml:'35px'}}><img height='100%'  width='100%'src='https://lh3.googleusercontent.com/pw/ADCreHcTHeu0ZWOr94BHTZ8n132wNqxRAB1mtkJuxJmcIX4mySpBwGnQe-GGk3qfhGfcYAlus4Y8eQrt5yGp8nWpwgjqzxl_rDQbZMliPwKtzycKULQZKu4=w2400'/></Box></Link>
        <Link to='/genrue/stranger things'><Box className='newrel1' sx={{height:'250px',width:'506px' ,borderRadius:'20px',ml:'35px'}}><img height='100%'  width='100%'src='https://lh3.googleusercontent.com/pw/ADCreHdgHmQlUHqQ4yYiEDB0p39rJETmgGIM6CjIuRsHBtrT5HrS41lxsHQBaAfn8J_xcT1bOyN3YWkFFFLFCFh3r8Gp0Qyn4Roy_A9oh8uEaKtNyk5-fXM=w2400'/></Box></Link>
    </Stack>
    <Contactus/>
    </>
  )
}

export default Video
