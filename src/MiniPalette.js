import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/miniPaletteStyle'
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