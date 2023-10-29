import React from 'react'
import { useState } from 'react'
import { useNavigation } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const Searchbar = () => {
  let [value ,setIntervalue]=useState();
  return (
    <Paper 
    component="form"
    onSubmit={()=>{}}
    sx={{borderRadius:20,
        border:'2px solid black',
        boxShadow:'none',
        pl:2,
        mr:5}}>
        <input className='search-bar' placeholder='Search..'  outline='none'  onChange={(e)=>{setIntervalue((e.target.value))} }
         />
         <Link to={`/searchbar/${value}`} ><i class="bi bi-search"></i></Link>
         
    </Paper>
  )
}

export default Searchbar
