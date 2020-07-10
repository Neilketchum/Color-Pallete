import React, { Component } from 'react'
// import './Colorbox.css';
import {Link} from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import  chroma from 'chroma-js';
import { withStyles } from  '@material-ui/styles'
import  styles  from './Styles/ColorBoxStyles'
class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {copied : false};
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState(){
        this.setState({copied:true},()=>{
            setTimeout(()=>this.setState({copied:false}),2000);
        });
    }
    render() {
        const { name, background,paletteId,id,seemore,classes,showingFullPalette } = this.props;
        const { copied } = this.state
        const isDarkColor = chroma(background).luminance() < 0.15;
        const isLightColor = chroma(background).luminance() >= 0.15;
        return (
            <CopyToClipboard text = {background} onCopy = {this.changeCopyState}>
                <div style={{ background }} className={classes.ColorBox}>
                    <div style = {{background}} className={`${classes.copyOverLay} ${copied&&classes.showOverlay}`}/>
                    <div className={` ${classes.copyMessage} ${copied?classes.showMessage:''} ${isLightColor && 'dark-text' } ` }>
                        <h1>Copied</h1>
                        <p className  = {classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className = {isDarkColor && "light-text"}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    <Link to = {`/palette/${paletteId}/${id}`} onClick = {e=>e.stopPropagation()}> 
                    {showingFullPalette? <span className={classes.seeMore}>MORE</span>:''}
                    </Link>
                   
                </div>
            </CopyToClipboard>

        )
    }
}
export default withStyles(styles)(ColorBox);