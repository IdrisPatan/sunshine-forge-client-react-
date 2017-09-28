import React, {Component} from "react"
import axios from 'axios'
import "./App.css"
import SpaceList from './SpaceList'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        spaceName: '',
        memory: '',
        disk: '',
        spaces: []

      }
  }
// comment

  handleInputs = (e, stateName) => {
    let updatedState = {}
    updatedState[stateName] = e.target.value
    this.setState(updatedState)
  }

  createSpace = () => {
      axios.post('http://localhost:8080/api/v1/spaces', {
          name: this.state.spaceName,
          disk_quotamb: this.state.disk,
          memory_quotamb: this.state.memory
      })
          .then(() => {
            this.getSpaces()
      })
          .catch((error) => {
              console.log(error);
          });
  }

  getSpaces = () => {
      axios.get('http://localhost:8080/api/v1/spaces')
          .then((response) => {
              this.setState({spaces: response.data})
          })
          .catch((error) => {
              console.log(error);
          });
  }

  render() {
    return (
      <div className="App">
        <h2>Create a new Space:</h2>
          <label htmlFor="name">Name</label>
          <input name="name" onChange={(e) => this.handleInputs(e, 'spaceName')}/>
          <label htmlFor="memory">Memory</label>
          <input name="memory"  onChange={(e) => this.handleInputs(e, 'memory')}/>
          <label htmlFor="disk">Disk</label>
          <input name="disk"  onChange={(e) => this.handleInputs(e, 'disk')}/>
          <button id='create' type="button" onClick={() => this.createSpace()}>Create</button>
          <SpaceList spaceListRecieved={this.state.spaces}/>
      </div>
    );
  }
}

export default App;
