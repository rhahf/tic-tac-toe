import React, {Component} from 'react'

class Square extends Component {
  render() {
    return (
      <button className="square" value={this.props.value} onClick={this.props.update()}> 
        
      </button>
    )
  }
}

class App extends Component {

  state = {}

  renderSquare = (value) => {
    return <Square value={value} />
  }

  render() {

    return (

      <div className="app-container">
        <tr>
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </tr>
        <tr>
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </tr>
        <tr>
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </tr>
      </div>

    )
  }
}

export default App