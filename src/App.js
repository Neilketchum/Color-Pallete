import React, { Component } from 'react'
import Pallete from './Pallete'
import seedColors from "./seedColors"
class App extends Component{
    render(){
        return(
            <div>
              <Pallete {...seedColors[5]}/>
            </div>
        )
    }
}
export default App;