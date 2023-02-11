import React from "react";
import Card from "./components/Card";
// eslint-disable-next-line no-unused-vars
//const Data = require('./data.json');
import Data from "./data.json";
import Card2 from "./components/Card2";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap from "./components/React_Bootstrap/ReactBootstrap";
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>


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
    </div>
}