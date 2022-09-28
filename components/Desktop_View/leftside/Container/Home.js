import { useState } from "react";
import Company from "../Company_details/Company";
import Create from "../Header/Create";
import Form from "../Personal_details/Form";
import classes from "./home.module.css"
import Radio from "../Radio_Button/Radio";
import Sign from "../Sign_Up/Sign";
import SignIn from "../Sign_In/SignIn";
export default function Home() {

  return (
    <div className={classes.mobile}>
        <Create/>
        <Form/>
        <Radio text="Business" />
        <Radio text="Individual" />
        <Company/>
        <Sign/>
        <SignIn/>
    </div>
  )
}
