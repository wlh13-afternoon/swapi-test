import React from "react";
import "./App.css";
import axios from 'axios'

class App extends React.Component {
  state = {
    people: []
  }
  componentDidMount() {
    axios.get('https://swapi.co/api/people').then(res => (
      this.setState({
        people: res.data.results
      })
    ))
  }
  render() {
    console.log(this.state.people)
    
    return <div className="App">
      {this.state.people.length ? this.state.people.map((el,i) => (
        <div key={i}>
          <h1>{el.name}</h1>
          <img src={el.starships[0]} alt=""/>
        </div>
      )): <div>Nothing to see Here</div>}
    </div>;
  }
}

export default App;
