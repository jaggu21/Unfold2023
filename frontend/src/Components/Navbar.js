import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container,Row,Col} from 'react-bootstrap'
import logo from "../Assets/Dream11-Dark.jpg"
import { useNavigate } from "react-router-dom";


import "../CSS/Navbar.css"

const Navigation = () => {

    return (
        <Navbar className="logo" expand="lg" style={{"backgroundColor":"#000000"}} variant="dark">
            <Container>
                
                <Navbar.Brand href="/">
                    <img src={logo} style={{"height":"4vw"}} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                    <Button variant="outline-danger" style={{"color":"white","marginLeft":"55vw"}}>Verify KYC</Button>{' '}
                        <Button variant="outline-danger" style={{"color":"white","marginLeft":"10w"}}>Login</Button>{' '}
                    </Nav>
                    {/* <Nav variant = "tabs" className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/">Add Review</Nav.Link>
                        <Nav.Link as={Link} to="/create">Add Movie/Series</Nav.Link>
                    </Nav> */}
                    {/* <Nav>
                        {account ? (
                           <div>
                                <img style={{height:"2vw",width:"2vw",marginTop:"0.3vw",marginRight:"0.5vw"}} src={makeBlockie(JSON.stringify(account))}/>
                                <Button onClick={ageVerifier} variant="outline-light" style={{background:"#FCE44D",color:"black",marginTop:"0.3vw"}}>Verify Age</Button>
                                <Button variant="outline-light" style={{background:"#FCE44D",color:"black",marginTop:"0.3vw",marginLeft:"0.5vw"}}>{account.slice(0, 5) + '...' + account.slice(38, 42)} </Button>
                            </div>
                        ) : (
                            <div>
                                <img style={{height:"2vw",width:"2vw",marginRight:"1vw"}} src={makeBlockie("8f39B2De2a23D70a74AB3325025eB0b2167C9F27")}/>
                                <Button onClick={ageVerifier} variant="outline-light" style={{background:"#FCE44D",color:"black",marginRight:"1vw"}}>Verify Age</Button>
                                <Button onClick={web3Handler} variant="outline-light" style={{background:"#FCE44D",color:"black"}}>Sign Out</Button>
                            </div>
                        )}
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;