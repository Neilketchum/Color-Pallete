import React, { Component } from 'react'
import Palette from './Palette'
import seedColors from "./seedColors"
import {generatePalette } from './colorHelpers'
import 'rc-slider/assets/index.css';
import {Route,Switch} from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component{
    constructor(props){
        super(props);
        this.savePalette = this.savePalette.bind(this)
    
    }
    findPalette(id){
      return  seedColors.find((palette)=>{
            return palette.id === id
        })
    }
    savePalette(newPalette){
       
        console.log(newPalette)
    }
    render(){
        // console.log(generatePalette(seedColors[4]))

        return(
            <Switch>
                      <Route exact path = '/palette/new' render = {() => <NewPaletteForm savePalette = {this.savePalette}/>}/> 
                      <Route exact path = '/' render = {(routeProps)=><PaletteList palettes = {seedColors} {...routeProps}/>}/>
                      <Route exact path = '/palette/:id' render = {(routeProps)=>
                      <Palette palette = {generatePalette(
                          this.findPalette(routeProps.match.params.id
                          ))}/> } />
                    <Route exact path = '/palette/:paletteId/:colorid' render = {(routeProps)=><SingleColorPalette
                     palette = {generatePalette(this.findPalette(routeProps.match.params.paletteId))} colorId  = {routeProps.match.params.colorid} />}></Route>
                    
            </Switch>
        )
    }
}
export default App;