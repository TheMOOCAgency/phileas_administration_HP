import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import "babel-polyfill";
import FrontPage from './app.js';

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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.fetchHomepageData = this.fetchHomepageData.bind(this);
        this.state = {
            data: null,
            isLoaded: false
        }
    }

    fetchHomepageData() {
        let fetchedData = {};
        fetch('/tma_cms_apps/api/v1/microsite_manager/'+ window.props.siteID +'/homepage/',
            {
                credentials: "same-origin",
                method: "GET",
            }
        )
        .then(response => response.json())
        .then((json) => {
            fetchedData = json;
            this.setState({data: fetchedData, isLoaded: true})
        });
    }

    componentDidMount() {
        this.fetchHomepageData();
    }

    render() {
        return (
            <div>
                <h1 className="title">Administration<a id="manageImage" href="https://studio-new.phileasamundi.com/assets/course-v1:global+000+2019/">Manage images</a></h1>
                {this.state.isLoaded && <FrontPage data={this.state.data}/>}
            </div>
        )
    }
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>

    ,
    document.getElementById('root')
);
