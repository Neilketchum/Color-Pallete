import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './navbar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherAllShades(this.props.palette,this.props.colorId)
        // console.log(this.props.palette,this.props.colorId)
        // console.log(this._shades)
        this.state = {format:'hex'}
        this.changeFormat = this.changeFormat.bind(this)
    }
    gatherAllShades(palette,colorToFilterBy){
        let shades = [];
        let allcolors = palette.colors;
        // console.log(allcolors)
        for(let key in allcolors){
            shades  = shades.concat(
                allcolors[key].filter(color=>(
                    color.id === colorToFilterBy 
                )
                )
            )
        }
        return shades.slice(1);
    }
    changeFormat(val){
        this.setState({format:val})
    }
    render() {
        const {paletteName,emoji} = this.props.palette;
        const colorBoxes = this._shades.map(color=>(
            <ColorBox key = {color.id} name = {color.name} background = {color[this.state.format]} seemore = {false}/>
        ))
        return (
            <div className = 'Palette'>
                <Navbar handleChange = {this.changeFormat}/>
                {/* <h1> Single Color Palete  =</h1>  */}
                <div className='Palette-colors'>{colorBoxes}</div>      
                <PaletteFooter paletteName = {paletteName} emoji = {emoji}/>
            </div>
        );
    }
}

export default SingleColorPalette;