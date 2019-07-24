import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FrontPage from './app.js';
import icon from './icon.png'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import "babel-polyfill";

/**
 * Test Data
 */
const data = {
    "fr": {
        "static_double_top": [
            {
                "image": "Image1",
                "link": "Link1",
                "target_blank": false
            }, {
                "image": "Image2",
                "link": "Link2",
                "target_blank": false
            }, {
                "image": "Image3",
                "link": "Link3",
                "target_blank": false
            }
        ],
        "single": ['course_ID', 'course_ID', 'course_ID', 'course_ID', 'course_ID', 'course_ID', 'course_ID', 'course_ID'],
        "double": 'course_ID',
        "static_double": {
            "image": 'Image',
            "link": 'Link',
            "target_blank": false
        }
    },
    "en": {
        "static_double_top": [
            {
                "image": "Image",
                "link": "Link",
                "target_blank": false
            }, {
                "image": "Image",
                "link": "Link",
                "target_blank": false
            }, {
                "image": "Image",
                "link": "Link",
                "target_blank": false
            }
        ],
        "single": ['course_ID', 'course_ID', 'course_ID', 'course_ID', 'course_ID', 'course_ID', 'course_ID', 'course_ID'],
        "double": "course_ID",
        "static_double": {
            "image": "Image",
            "link": "Link",
            "target_blank": false
        }
    }
}

export default data
/**
 * Définition theme Material UI
 */

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5cb7d8',
        },
        secondary: orange,
    },
    background: "#5cb7d8"
});

/**
 * Composant Header pour démonstration 
 */

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleHamMenu = this.handleHamMenu.bind(this)
        this.handleCloseMenu = this.handleCloseMenu.bind(this)
    }
    handleHamMenu(e) {
        let element = e.target;
        element.previousSibling.style.right = "0%"
    }
    handleCloseMenu(e) {
        let element = e.target;
        element.parentElement.style.right = "-45%"
    }
    render() {
        return (
            <div className="header">
                <div className="headWrapper">
                    <a className="logo" href="/">
                        <h1>
                            <img src={icon} alt="Phileas" />
                        </h1>
                    </a>
                    <div className="rightSection">
                        <a className="explore" href="/">
                            Explorer
                        </a>
                        <div className="closeMenu" onClick={e => { this.handleCloseMenu(e) }}></div>
                    </div>
                    <div className="hamButton" onClick={e => { this.handleHamMenu(e) }}></div>
                </div>
            </div>
        );
    }
}


/**
 * Rendu 
 */

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
            <h1 className="title">Administration</h1>
         <FrontPage data={data} />}
    </ThemeProvider>

    ,
    document.getElementById('root')
);