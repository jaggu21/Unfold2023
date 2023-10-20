import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container,Row,Col,Card} from 'react-bootstrap'
import image from "../Assets/HomeImage.png"
import { useNavigate } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';

import Typewriter from 'typewriter-effect';
import {useLivepeerProvider} from "@livepeer/react";
import { Player } from '@livepeer/react';



const VideoPlayer= () => {
    const provider = useLivepeerProvider()

    return (
        <Stack>
            {/* <h1 style={{"display":"flex","marginLeft":"5vw","marginTop":"3vw","alignContent":"flex-start","fontFamily":"sans-serif"}}>What Does it take to be a FAN?</h1> */}
            <Container style={{"width":"40vw","marginTop":"5vw","marginBottom":"5vw","boxShadow":"0 0 50px 15px #FF0000"}}>
                    <Player
                    playbackId="df54yg4phavcvww9"
                    showPipButton
                    objectFit="cover"
                    priority
                />
        </Container>
      </Stack>
    )

}

export default VideoPlayer;