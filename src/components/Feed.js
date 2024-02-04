import React , {useEffect , useState} from 'react'
import {Box , Stack , Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import axios from 'axios'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
    // Should have two parts - sidebar on the left and video feed on the right
    const [videos , setVideos] = useState(null)
    const [selectedCategory , setSelectedCategory ] = useState('New')


    // const options = {
    //   method: 'GET',
    //   url: 'https://youtube-v31.p.rapidapi.com/search',
    //   params: {
    //     relatedToVideoId: '7ghhRHRP6t4',
    //     part: 'id,snippet',
    //     type: 'video',
    //     maxResults: '10'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': 'daa2aebfe2msh25fda690d523c1ep100f35jsn65b29c77854b',
    //     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    //   }
    // };
  

useEffect(()=>{
  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))
  // axios.request(options).then(function (response){
  //   console.log(response.data)}).catch(function (error){
  //     console.log(error);
  //   })
},[selectedCategory])

  return (
   <Stack sx={{ flexDirection : {sx : "column" , md : "row"}}}>
<Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
 < SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
 <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
 Copyright © 2024 Rohan's Media
 </Typography>
</Box>

<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
    {selectedCategory} <span style={{ color: "#FC1503" }}> Video feeds </span>
    </Typography>
     <Videos videos={videos} />
     </Box>
   </Stack>
  )
}

export default Feed