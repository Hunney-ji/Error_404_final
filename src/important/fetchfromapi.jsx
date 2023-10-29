import axios from 'axios'
const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key':'deabe7c6b4msh36caa60313712c6p1c5e3bjsn084440484c16',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchfromapi=async (url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`, options );
    return data;
} 