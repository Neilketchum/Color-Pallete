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
    }


};
function MiniPalette(props) {

    // console.log(props);
    const { classes, paletteName, emoji } = props;
    return (
        <div className={classes.root}>
            <div className={classes.colors}>
                <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
            </div>
        </div>

    )
}
export default withStyles(styles)(MiniPalette);