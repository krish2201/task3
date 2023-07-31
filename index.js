import React,{Component} from "react";
import ReactDOM  from "react-dom";
import'./App.css';
import d from './components/image/d.jpg';
import u from './components/image/u.jpg';
class Home extends React.Component{
    render(){
        return(
            <div class='d'>
                <center>
                <h1>Welcome to buddy club</h1>
                <h2>This is About my friends</h2>
                <img className="b" src={d}></img>
                <img className="a" src={u}></img>
                <h2 style={{color:"black",textalign:'center',padding:'10px'}}>Things are never quite as scary when you've got a best friend. </h2>
                </center>
                <ul>
                <li>Kavi</li>
                <li>Ilax</li>
                <li>Srimari</li>
                <li>Harsha</li>
                <li>Madhu</li>
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<Home/>,document.getElementById('root'));