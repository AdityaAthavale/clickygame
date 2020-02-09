import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-md-3" onClick={this.props.action}>
                <img id={this.props.image} src={process.env.PUBLIC_URL + "images/" + this.props.image} alt={this.props.image}/>
            </div>
        );
    }
}

export default Card