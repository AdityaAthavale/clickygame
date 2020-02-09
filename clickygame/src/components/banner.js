import React from 'react';


//This can be stateless functional component.
//I just like to make consistency by maintaining Stateful class components.
//This way my solution becomes scalable more easily.
class Banner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="info" className="row">
                <div id="info" className="com-md-12">
                    <h3>Click on an image to earn points, but don't click on any more than once!</h3>
                </div>
            </div>
        );
    }
}

export default Banner


