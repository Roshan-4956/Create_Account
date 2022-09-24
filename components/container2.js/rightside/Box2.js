import classes from "./box2.module.css"

export default function Box2() {
  return (
    <div className={classes.box2}>
      <div className={classes.box2_sub1}>
        <div className={classes.sub2}>
          <img src="../images/img4.jpg" alt="" className={classes.img4} />
          <img src="../images/img5.jpg" alt="" className={classes.img5} />
        </div>
        <img src="../images/img6.jpg" alt="" className={classes.img6} />
        <div className={classes.overlap}>
           <img src="../images/img7.png" alt="" className={classes.img7} />
           <img src="../images/img11.png" alt="" className={classes.img11} />
        </div>
      </div>
      <div className={classes.box2_sub2}>
        <div className={classes.sub3}>
          <img src="../images/img8.jpg" alt="" className={classes.img8} />
          <img src="../images/img9.jpg" alt="" className={classes.img9} />
          <img src="../images/img10.jpg" alt="" className={classes.img10} />
        </div>
      </div>
    </div>
  )
}
