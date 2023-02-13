import React from "react";
import Card from "./components/Card";
import Data from "./data.json";
import Card2 from "./components/Card2";
import ReactBootstrap from "./components/React_Bootstrap/ReactBootstrap";

import { FaFacebookF, FaYoutube } from "react-icons/fa";
import Signup from "./components/Signup";

//<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>


export default function App(){
    return <div>
        <h1 className="headingStyle">Todo App</h1>
        {Data.map((item, index) => <Card key = {index} titleText1={[item.title]} descText1={[item.desc]}/>)}

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