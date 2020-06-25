import React, { Component } from 'react'
import './Colorbox.css'
class ColorBox extends Component{
    render(){
        return(
            <div style = {{background:this.props.background}} className="ColorBox">
                <span>{this.props.name}</span>
            </div>
        )
    }
}
export default ColorBox;