import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container,Row,Col} from 'react-bootstrap'
import image from "../Assets/virat.jpg"
import { useNavigate } from "react-router-dom";




const HomeViewVideo= () => {
    return (
        <div style={{"backgroundColor":"black"}}>
            <img src={image} style={{"height":"35vw","paddingLeft":"8vw","paddingTop":"5vw"}} alt="" />
        </div>
    )

}

export default HomeViewVideo;