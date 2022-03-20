import preloader from './Spinner-1s-200px.svg'
import React from "react";

type PreloaderPropsType = {}


export const Preloader = (props: PreloaderPropsType) => {
    return <>
        <img src={preloader} alt='preloader'/>
    </>
}