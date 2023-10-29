import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box} from '@mui/material';
import { Navbar , Search ,Video ,Main ,Channel ,Videocard, Searchbar ,Contact,Genrue,Error404} from './components/link.js';
// import { useEffect, useState } from 'react';
// const Api="AIzaSyAnXQySnuv1P10q6yxCndyYRjKGOydAKmo";
// const ChannelId='UCsNkuVj19wfclwicQ4DgAUw'
// const fetchurl=`https://www.googleapis.com/youtube/v3/search?key=${Api}&ChannelId=${ChannelId}&part=snippet,id&order=date&maxResult=20`
const App = () => {
  // const [view ,setview]=useState([]);
  // useEffect(()=>{
  //   fetch(fetchurl).then((res)=>res.json()).then((response)=>{
  //     const result=response.items.map(doc=>({...doc, videoLink:"https://www.youtube.com/embed/"+doc.id.videoId }))
  //     setview(result); 
  //   }) 
  //  },[])
  //  console.log(view);

  return (
    <>
    <BrowserRouter> 
       {/* <div>
        {view.map((item)=>{
          return(
            <>
               <iframe width="100" height="61"  src={item.videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </> 
          );
          })}
        </div>  */}
        <Box >
        <Navbar/>
            <Routes>
                <Route path='/genrue/:id' element={<Genrue/>}/>
                <Route path='/searchbar/:id' element={<Search/>}/>
                <Route path='/' exact element={<Main/>}/>
                <Route path='/search/:id'element={<Searchbar/>}/>
                {/* <Route path='/navbar/:id' element={<Navbar/>}/> */}
                <Route path='/videocard/:id' exact element={<Videocard/>}/>
                <Route path='/channel/:id' element={<Channel/>}/>
                <Route path='/contactus' element={<Contact/>}/>
                <Route element={<Error404/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
    </>
    
    
  )
}

export default App
