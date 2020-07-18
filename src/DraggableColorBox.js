import React from 'react'


import {withStyles} from '@material-ui/styles'

import DeleteIcon from '@material-ui/icons/Delete'

const styles = {
    root:{
       width:"20%",
       height:"25%",
       margin:"0 auto",
       display:"inline-block",
       position:"relative",
       cursor:"pointer",
       marginBottom:"-3.5px",
       "&:hover svg":{
        color:'white'
    }
    },
    boxContent:{
        position: 'absolute',
        width:'100px',
        left:'0px',
        bottom: '0px',
        padding: '10px',
        // color:   props=>
        // chroma(props.background).luminance() >= 0.7?"rgba(0,0,0,0.8)":"white",
        letterSpacing: '1px',
        color:'rgba(0,0,0,0.5)',
        textTransform: 'uppercase',
        fontSize: '12px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    deleteIcon:{
        marginLeft:'220px',
        // transition:'all 0.3 ease-in-out',
        transform:'scale(1.2)',
        color:'rgba(0,0,0,0.5)',
        // marginBottom:
        
    },
    

}

 function DraggableColorBox(props) {
     const {classes} = props;
    return (
        <div style = {{background:props.color}} className = {classes.root}>
            <div className={classes.boxContent}>
                <span>   {props.name} </span>
                <DeleteIcon className = {classes.deleteIcon} onClick = {props.handleClick}_/>
            </div>
         
        </div>
    )
}
export default withStyles(styles)(DraggableColorBox)