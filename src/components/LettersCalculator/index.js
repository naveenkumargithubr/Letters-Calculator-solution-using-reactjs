// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  //  intialize the state object
  state = {inputphrase: ''}

  // get the letter value
  onChangeSearchinput = event => {
    const {value} = event.target
    this.setState({inputphrase: value})
  }

  render() {
    // object destructuring the inputphrase
    const {inputphrase} = this.state
    return (
      <div className="bg-container">
        <div className="body-container">
          <div className="calculator-bg-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-label-container">
              <label className="enter-phrase" htmlFor="phraseText">
                Enter the Phrase
              </label>
              <input
                className="inputElement"
                type="text"
                id="phraseText"
                placeholder="Enter the phrase"
                onChange={this.onChangeSearchinput}
                value={inputphrase}
              />
            </div>
            <p className="letters-Count">No.of letters: {inputphrase.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
