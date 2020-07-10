import React, { Component } from 'react'
import './Colorbox.css';
import {Link} from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import  chroma from 'chroma-js';
import { withStyles } from  '@material-ui/styles'
const styles = {
    ColorBox:{
        width:'20%',
        height: props =>props.showingFullPalette?'24.3%':'49%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        '&:hover button':{
            opacity:1
        }
    },
    copyText:{
        color: props=>
            chroma(props.background).luminance() >= 0.7?"black":"white"
    },
    colorName:{
        color: props=>
            chroma(props.background).luminance() <= 0.8?"white":"black"
    },
    seeMore:{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border:"none",
        bottom: "0px",
        color:   props=>
            chroma(props.background).luminance() >= 0.5?"rgba(0,0,0,0.6)":"white",
        right: "2px",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase",
    },
    copyButton:{
        opacity: '0',
        width: '100px',
        height:'30px',
        position: 'absolute',
        display: 'inline-block',
        top:'50%',
        left:' 50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textalign: 'center',
        outline: 'none',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        color:   props=>
        chroma(props.background).luminance() >= 0.7?"rgba(0,0,0,0.6)":"white",
        textTransform: 'uppercase',
        cursor: 'pointer'
    },
    boxContent:{
        position: 'absolute',
        width:'100px',
        left:'0px',
        bottom: '0px',
        padding: '10px',
        color:   props=>
        chroma(props.background).luminance() >= 0.7?"rgba(0,0,0,0.8)":"white",
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
    },
    copyOverLay:{
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transform: 'scale(0.1)',
    },
    showOverlay:{
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute',
        color:"orange",
      
    },
    copyMessage:{
        position: 'fixed',
        left:"0",
        right:"0",
        top:"0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: 'white',
        '& h1':{
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255,255,255,0.4)",
            width:" 100%",
            marginBottom: "-12px",
            textAlign: "center",
            padding: "1rem",
        },
        "& p":{
            fontSize: "2rem",
            fontWeight: "100",
        }
    },
    showMessage:{
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition:" all 0.4s ease-in-out",
        transitionDelay:" 0.3s" ,
    }
}
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