import classes from "./company.module.css"

export default function Company() {
  return (
     <div className={classes.form}>
        <p className={classes.name}>Company Name</p>
        <input type="text" className={classes.inputName} placeholder="Enter Company Name"/>
        <p className={classes.address}>Company Address</p>
        <input type="text" className={classes.inputAddress} placeholder="Enter Address"/>
        <p className={classes.phone}>Company Phone Number</p>
        <input type="text" className={classes.inputPhone} placeholder="Enter Phone Number"/>
        <p className={classes.tax}>Company Tax ID</p>
        <input type="text" className={classes.inputTax} placeholder="Enter Tax ID"/>
     </div>
  )
}
