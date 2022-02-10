import React from 'react'
import Header from './Header'
import {HashRouter} from "react-router-dom";
import Pathway from "./Pathway";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Pathway/>

            </HashRouter>
        </div>
    )
}

export default HW5
