import RightSide from './rightside/RightSide';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from "./homepage.module.css";
import {useState,useEffect} from "react"
import Home from './mobile/Home';
export default function Homepage() {
        const [winWidth,setWinWidth]=useState(true);
    useEffect(()=>{
        if(window.innerWidth <=1400){
            setWinWidth(false);
        }
        else{
            setWinWidth(true);
        }
        window.addEventListener("resize",()=>{
            if(window.innerWidth <=1400){
                setWinWidth(false);
            }
            else{
                setWinWidth(true);
            }   
        });
    },[]);
    return winWidth ? (
        <Container>
            <Row>
                <Col >
                    <div className={classes.navbar}>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={4} className={classes.col1}>
                    <Home />
                </Col>
                <Col xs={8} className={classes.col1}>
                    <RightSide />
                </Col>
            </Row>
        </Container>
    ):(
        <Container>
            <Row>
                <Col >
                    <div className={classes.navbar}>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={6} className={classes.col1}>
                    <Home />
                </Col>
                <Col xs={6} className={classes.col1}>
                    <RightSide />
                </Col>
            </Row>
        </Container>
    )
}
