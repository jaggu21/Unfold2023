import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container,Row,Col} from 'react-bootstrap'
import image from "../Assets/HomeImage.png"
import { useNavigate } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';

import Typewriter from 'typewriter-effect';



const HomeViewText= () => {
    return (
        <div style={{"backgroundColor":"black"}}>
            <img src={image} style={{"height":"35vw","paddingLeft":"8vw","paddingTop":"5vw"}} alt="" />
            {/* <Stack>
                <div>
                    <img src={image} style={{"height":"10vw","paddingLeft":"8vw","paddingTop":"5vw"}} alt="" />
                </div>
                <div style={{"color":"white","font":"5vw"}}>    
                <Typewriter
                    options={{
                        strings: ["PLAY WITH BRAIN"],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
            </Stack> */}
            
        </div>
    )

}

export default HomeViewText;