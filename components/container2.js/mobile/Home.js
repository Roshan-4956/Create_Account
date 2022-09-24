import { useState } from "react";
import Company from "./Company";
import Create from "./Create";
import Form from "./Form";
import classes from "./home.module.css"
import Radio from "./Radio";
import Sign from "./Sign";
import SignIn from "./SignIn";
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
