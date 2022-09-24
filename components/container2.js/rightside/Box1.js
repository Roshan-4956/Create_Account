import classes from "./box1.module.css"; 
export default function Box() {
  return (
    <div className={classes.box1}>
      <div className={classes.box1Wrap_1}>
        <div className={classes.box1_sub}>
          <img src="../images/img1.png" alt="" className={classes.img1} />
          <img src="../images/img2.png" alt="" className={classes.img2} />
        </div>
        <div className={classes.box2_sub}>
          <img src="../images/img3.png" alt="" className={classes.img3} />
        </div>
      </div>
        <div className={classes.tagline}>
          <p>Join <u className={classes.shortsqueeze}>Shortsqueeze</u> and make awesome projects with us</p>
        </div>
      </div>
  )
}
