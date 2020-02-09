import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="header" className="row">
                <div className="col-md-1"/>
                <div id="left" className="col-md-3">
                <h3>Clicky Game</h3>
                </div>
                <div className="col-md-4">
                <h3>{this.props.message}</h3>
                </div>
                <div id="right" className="col-md-3">
                <h3>|Score: {this.props.score}| <br/>
                |Top Score:{this.props.topScore}|</h3>
                </div>
                <div className="col-md-1"/>
            </div>
        );
    }
}

export default Header