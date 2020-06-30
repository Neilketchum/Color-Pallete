import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
const styles = {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        border:'5px solid black',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        "&:hover": {
            cursor: 'pointer',
            // transform: 'scale(1.1)',
        }
    },
    colors: {
        // backgroundColor:'grey',
        // padding:'10px'
        height:'150px',
        width:'100%',
        borderRadius:'5px',
        overflow:'hidden'
    },
    title: {
        display:'flex',
        justifyContent :'space-between',
        alignItems:'Center',
        fontSize:'1rem',
        position:'relative',
    },
    emoji: {
        marginLeft:'1.5rem'
    },
    miniColor:{
        width:'25%',
        height:'20%',
        display:'inline-block',
        margin:"0 auto",
        position:'relative',
        marginBottom:'-3.5px'
    }


};
function MiniPalette(props) {
    
    // console.log(props);
    const { classes, paletteName, emoji,colors} = props;
    const miniColorBoxes = colors.map(color=>(
        <div className = {classes.miniColor} style = {{backgroundColor:color.color}} key = {color.name}>

        </div>
    ))
    return (
        <div className={classes.root} onClick = {props.handleClick}>
            <div className={classes.colors}>
                {/* {Mini Boxes} */}
                {miniColorBoxes}
            </div>
                <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
            
        </div>

    )
}
export default withStyles(styles)(MiniPalette);