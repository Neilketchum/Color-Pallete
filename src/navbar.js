import React, { Component } from 'react'
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import './Navbar.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {format:'hex',open : false}
        this.changeFormat = this.changeFormat.bind(this)
        this.CloseIcon = this.CloseIcon.bind(this)
    }
    changeFormat(e){
        this.setState({
            format : e.target.value,
            open:true
        },()=>{
            this.props.handleChange(e.target.value)
        })
        
        // this.props.handleChange(e.target.value)
    }
    CloseIcon(){
        this.setState({
            open:false
        })
    }
    render() {
        const { changeLevel, level } = this.props
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="/"><i class="fas fa-palette fa-3x"></i></a>
                    <a href=""><h3>Color Palette</h3></a>
                </div>
                <div className="slider-container">
                    <span>Level : {level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value = {this.state.format} onChange = {this.changeFormat}>
                        <MenuItem value = "hex" >Hex - #fffff</MenuItem>
                        <MenuItem value = 'rgb'>RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value = 'rgba'>RGBA - rgba(255,255,255,0.5)</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin = {{vertical:'bottom',horizontal:'left'}} open = {this.state.open}
                    message = {<span id = 'message-id'> Format Changed</span>}
                    ContentProps={{
                        "aria-describedby":"message-id"
                    }}
                    onClose = {this.CloseIcon}
                    action = {
                        [
                            <IconButton onClick = {this.CloseIcon} color='inherit' key = 'close' aria-label = 'close'>
                                <CloseIcon></CloseIcon>
                            </IconButton>
                        ]
                    }
               >

                </Snackbar>
            </header>
        )
    }
}
export default Navbar;