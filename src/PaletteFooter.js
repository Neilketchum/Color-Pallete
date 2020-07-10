
import React, { Component } from 'react';

import {withStyles} from '@material-ui/styles';
import styles from './Styles/PaletteFooterStyles';


class PaletteFooter extends Component {
    render() {
        const {classes,paletteName,emoji} = this.props;

        return (
            <div>
                <footer className={classes.PaletteFooter}>
                    {paletteName} 
                    <span className={classes.Emoji}>{emoji}</span>
                </footer>
            </div>
        );
    }
}

export default withStyles (styles)(PaletteFooter);