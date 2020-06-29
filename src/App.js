import React, { Component } from 'react'
import Palette from './Palette'
import seedColors from "./seedColors"
import {generatePalette } from './colorHelpers'
import 'rc-slider/assets/index.css';
import {Route,Switch} from 'react-router-dom';
class App extends Component{
    // findPalette(id){
    //     seedColors.find(function(palette){
    //         palette.id === id;
    //     });
    // }
    findPalette(id){
      return  seedColors.find((palette)=>{
            return palette.id === id
        })
    }
    render(){
        // console.log(generatePalette(seedColors[4]))

        return(
            <Switch>
                      <Route exact path = '/' render = {()=><h1>Pallete</h1>}/>
                      <Route exact path = '/palette/:id' render = {(routeProps)=>
                      <Palette palette = {generatePalette(
                          this.findPalette(routeProps.match.params.id
                          ))}/> } />
            </Switch>
        )
    }
}
export default App;