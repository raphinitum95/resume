import React, {Component} from 'react';
import appStyles from './App.module.scss';
import Content from "../Content/Content";
import Navigation from "../../Components/Navigation/Navigation";

class App extends Component {
    constructor(props) {
        super(props);
        this.parentApp = {};
        this.state = {
            active: "top",
            show: false,
            mobile: true,
        }
    }

    componentDidMount() {
        this.mobileSize();
        this.parentApp = document.getElementById('myApp').getBoundingClientRect();
        window.addEventListener('resize', this.mobileSize.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.mobileSize.bind(this))
    }

    mobileSize = () => {
        this.parentApp = document.getElementById('myApp').getBoundingClientRect();
        if(window.innerWidth > 790) {
            this.setState({ mobile: false });
        } else{
            this.setState({mobile: true});
        }
    }

    hamburgerClick = () => {
        this.setState({show: !this.state.show})
    }

    render() {
        const aside = window.innerWidth >= 1250 ? {left: this.parentApp.left} : {}
        return (
            <div className={appStyles.App} id={"myApp"}>
                <div
                    className={appStyles.hamburgerIcon + " " + (this.state.mobile ? "" : appStyles.hidden)}
                    onClick={this.hamburgerClick}
                >
                    <div className={appStyles.hamburger + " " + (this.state.show ? appStyles.open : "")}/>
                </div>
                <div
                    className={appStyles.navigation + " " + (!this.state.mobile || this.state.show ? appStyles.open : "")}
                    style={aside}
                >
                    <Navigation show={this.state.show}/>
                </div>
                <div className={appStyles.content}>
                    <Content />
                </div>
            </div>
        );
    }
}

export default App;
