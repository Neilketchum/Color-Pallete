import React, { Component } from "react";
import ColorBox from "./ColorBox";

import "./Palette.css";
import Navbar from "./navbar";
import PaletteFooter from "./PaletteFooter";


class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this)

  }
  changeLevel(level) {
    console.log(level)
    this.setState({ level });
  }
  changeFormat(value) {
    this.setState({
      format: value
    })
  }
  render() {
    const { colors, paletteName, emoji ,id} = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox showingFullPalette = {true} background={color[format]} name={color.name} key={color.id} id = {color.id} paletteId = {id} seemore = {true}/>
    ));

    return (
      <div className='Palette'>
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
        <div className='Palette-colors'>{colorBoxes}</div>
        <PaletteFooter paletteName = {paletteName} emoji = {emoji}/>
      </div>
    );
  }
}
export default Palette;