// import React from 'react';
// function PaletteFooter(props) {
//     const { paletteName, emoji } = props;
//     console.log(paletteName,emoji)
//     return (
//         <footer className='Palette-footer'>
//             {paletteName}
//             <span className="emoji">{emoji}</span>
//         </footer>
//     )
// }
// export default PaletteFooter;
import React, { Component } from 'react';

class PaletteFooter extends Component {
   
    render() {
        const {paletteName,emoji} = this.props;
        return (
            <div>
                <footer className='Palette-footer'>
                    {paletteName}
                    <span className="emoji">{emoji}</span>
                </footer>
            </div>
        );
    }
}

export default PaletteFooter;