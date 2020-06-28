import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Pallete.css'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
class Pallete extends Component{
    constructor(props){
        super(props)
        this.state = {level:300};
        this.changeLevel = this.changeLevel.bind(this)
    }
    changeLevel(newlevel){
        console.log(newlevel)
        this.setState({level:newlevel})
    }
    render(){
        const {colors} = this.props.palette
        const {level} = this.state
        const colorBoxes = colors[level].map(color =>(
            <ColorBox background = {color.hex} name = {color.name}/>
        ))
        return(
            <div className = 'Pallete'>
                <Slider defaultValue = {level} min={100} max = {900} onAfterChange = {this.changeLevel} step={100}/>
                    {/* Navbar */}
                <div className="Pallete-colors">
                    {colorBoxes}
                    {/* Bunch of Colors */}
                </div>
                {/* Footer */}
            </div>
        )
    }
}
export default Pallete;