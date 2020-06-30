import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from './MiniPalette';
const styles = {
    root:{
        backgroundColor:'Teal',
        height:'100%',
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    container:{
        width:"50%",
        display:'flex',
        flexWrap:'wrap',
        flexDirection:"column"
    },
    nav:{
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        color:'white',
        fontSize:'3rem'
    },
    palettes:{
        boxSizing:'border-box',
        width:'100%',
        display:'grid',
        gridTemplateColumns:'repeat(3,30%)',
        gridGap:`5%`,
    }
}
class PaletteList extends Component {
    render() {
        const { palettes,classes} = this.props
        return (
            <div className = {classes.root}>
                <div className = {classes.container}>
                    <nav className = {classes.nav}>
                        <h1>Colors</h1>
                    </nav>
                    <div className = {classes.palettes}>
                        {palettes.map(p => (
                            <MiniPalette {...p}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);