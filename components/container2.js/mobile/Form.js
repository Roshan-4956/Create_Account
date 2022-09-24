import EyeButton from "./EyeButton"
import classes from "./form.module.css"

export default function Form() {
    return (
        <div className={classes.form}>
            <p className={classes.first}>First Name</p>
            <input type="text" className={classes.inputFirst} placeholder="Enter First Name" />
            <p className={classes.last}>Last Name</p>
            <input type="text" className={classes.inputLast} placeholder="Enter Last Name" />
            <p className={classes.email}>Email</p>
            <input type="text" className={classes.inputEmail} placeholder="Enter Email address" />
            <p className={classes.password}>Password</p>
            <div className={classes.eye}>
                <input type="text" className={classes.inputPassword} placeholder="Enter Password" />
                <EyeButton />
            </div>
            <p className={classes.question}>Are you a business or an individual?</p>
        </div>
    )
}
