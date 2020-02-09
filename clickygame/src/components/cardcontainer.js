import React from 'react';
import Card from "./card";

class Banner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* Empty column */}
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row">
                            {
                                this.props.imageSet.map((element, index) => {
                                    return (
                                        <Card image={element} key={index} action={this.props.handleImageClicked}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* Empty column at the end. This can be ommited but Its easy if I can add up tp total of 12 every time. */}
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}

export default Banner