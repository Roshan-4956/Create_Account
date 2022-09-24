import classes from "./radio.module.css"
import { useState } from "react";

export default function Radio(props) {
    const [isChecked, setIsChecked] = useState(false);
    function handleChange() {
        setIsChecked(prevstate => !prevstate);
    }
    let check;
    let radio_check;
    if(isChecked){
    check=classes.colour;
    radio_check=classes.radio_checked;
    }
    else{
    check=classes.uncolour;
    radio_check=classes.radio_unchecked;
    }

    const word= props.text;
    return (
        <div className={classes.radio}>
            <div className={classes.box1}>
                <div className={check} onClick={handleChange}>
                    <span className={radio_check}></span>
                </div>
                <p className={classes.title}>{word}</p><br />
            </div>
        </div>
    )
}
