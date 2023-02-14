import React from "react";
import Card from "./components/Card";
import Data from "./data.json";
import Card2 from "./components/Card2";
import ReactBootstrap from "./components/React_Bootstrap/ReactBootstrap";

import { FaFacebookF, FaYoutube } from "react-icons/fa";
import Signup from "./components/Signup";
import Home from "./components/State_Lifting/Home";

export default function App(){
    return <div>
        <h1 className="headingStyle">Todo App</h1>
        {Data.map((item, index) => <Card key = {index} titleText1={[item.title]} descText1={[item.desc]}/>)}
        <br /><br />

        <Home/> <br /><br />

        <Card2 name="Class Component"></Card2><br />

        <span className="icon">
            <FaFacebookF></FaFacebookF>
        </span>

        <span className="icon">
            <FaYoutube></FaYoutube>
        </span>

        <ReactBootstrap></ReactBootstrap>

        <br /><br />

        <Signup/>
    </div>
};