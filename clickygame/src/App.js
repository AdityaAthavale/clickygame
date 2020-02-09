import React from 'react';
import './App.css';
import Header from "./components/header";
import Banner from "./components/banner";
import CardContiner from "./components/cardcontainer";
import Footer from './components/footer';

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
        <Header message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <Banner />
        <CardContiner imageSet = {this.state.imageSet} handleImageClicked={this.handleImageClicked}/>
        <Footer />
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