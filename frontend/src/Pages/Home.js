import React from "react";

import Navbar from "../Components/Navbar";
import Stack from 'react-bootstrap/Stack';
import HomeViewText from "../Components/HomeViewText";
import HomeViewVideo from "../Components/HomeViewVideo";
import VideoPlayer from "../Components/VideoPlayer";

import "../CSS/FadeIn.css"

function Home(){
    return(
        <div style={{backgroundColor:"black"}}>
            <Navbar/>
             <Stack direction="horizontal" gap={2}>
                <HomeViewText/>
                <HomeViewVideo/>
             </Stack>
             <Stack>
                <VideoPlayer/>
             </Stack>
        </div>
    )
}

export default Home;