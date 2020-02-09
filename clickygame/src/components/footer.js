import React from 'react';
import logo from './../logo.svg';


//This can be stateless functional component.
//I just like to make consistency by maintaining Stateful class components.
//This way my solution becomes scalable more easily.
class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="footer" className="row">
                <div id="footer" className="com-md-12">
                    <img id="footerImage" src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        );
    }
}

export default Footer
