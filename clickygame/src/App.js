import React from 'react';
import './App.css';
import Card from "./components/card";

class App extends React.Component {
  constructor(props) {
    super(props) 
    //Define application state
    this.state = {
      score: 0,
      topScore: 0,
      clicked: [],
      message: "",
      imageSet: ["beth.png", "birdperson.png", "evilmorty.png",
                "gianthead.png", "goldenford.png", "jerry.png",
                "jessica.png", "meeseeks.png", "morty.png",
                "mr.png", "rick.png", "summer.png"]
    }
  }

  handleImageClicked = (event) => {
    console.log(event.target.id)
    if(!this.state.clicked.includes(event.target.id)) {
      let clickedImages = this.state.clicked
      let score = this.state.score
      let topScore = this.state.topScore
      if (score === topScore) {
        topScore = score + 1
      }
      clickedImages.push(event.target.id)
      this.setState({
        message: "",
        score: score + 1,
        topScore: topScore,
        clicked: clickedImages
      })
    } else {
      this.setState({
        message: "You clicked incorrectly",
        score: 0
      })
    }
    this.randomizeImages()
  }

  randomizeImages = () => {
    //Local copy of images
    let array = this.state.imageSet
    
    //shuffle local copy
    //This allows to minimize state updates.
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    //set local copy to state.
    this.setState({
      imageSet: array
    })
  }

  render() {
    return (
      <div>
        <div id="header" className="row">
          <div className="col-md-1"/>
          <div id="left" className="col-md-3">
            <h3>Clicky Game</h3>
          </div>
          <div className="col-md-4">
            <h3>{this.state.message}</h3>
          </div>
          <div id="right" className="col-md-3">
            <h3>|Score: {this.state.score}| <br/>
            |Top Score:{this.state.topScore}|</h3>
          </div>
          <div className="col-md-1"/>
        </div>
        <div id="info" className="row">
          <div id="info" className="com-md-12">
            <h3>Click on an image to earn points, but don't click on any more than once!</h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="row">
              {
                this.state.imageSet.map((element, index) => {
                  return (
                    //Return Custom Component Card
                    <Card image={element} key={index} action={this.handleImageClicked}/>
                  )
                })
              }
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
{/* <div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>
</div> */}