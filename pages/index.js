import Mobile from "../components/Mobile";
import Desktop from "../components/Desktop";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {useState,useEffect} from "react"
function Homepage(){
    const [winWidth,setWinWidth]=useState(true);
    useEffect(()=>{
        if(window.innerWidth <=768){
            setWinWidth(false);
        }
        else{
            setWinWidth(true);
        }
        window.addEventListener("resize",()=>{
            if(window.innerWidth <=768){
                setWinWidth(false);
            }
            else{
                setWinWidth(true);
            }   
        });
    },[]);

    return winWidth ? <Desktop/> : <Mobile/>;
    // return <Mobile/>
}

export default Homepage