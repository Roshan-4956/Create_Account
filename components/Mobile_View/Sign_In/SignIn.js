import classes from "./signin.module.css"
export default function SignIn() {
  return (
    <div className={classes.signin}>
        <span className={classes.register}>Already have an account?</span>
        <button className={classes.create}>Sign In</button>
    </div>
  )
}
