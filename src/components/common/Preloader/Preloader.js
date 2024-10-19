import classes from "./Preloader.module.css";
import preloaderImg from "../../../assets/images/preloader.svg";
import React from "react";

export const Preloader = () => {
  return (
    <img className={classes.preloader} src={preloaderImg} alt='loading'/>
  )
}