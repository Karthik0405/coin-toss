// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tossResultIs: 0, totalCount: 0, headCount: 0, tailCount: 0}

  gettingTossResult = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        tailCount: prevState.tailCount + 1,
      }))
    }
    this.setState({tossResultIs: tossResult})
  }

  render() {
    const {tossResultIs, headCount, tailCount, totalCount} = this.state
    let resultImage
    if (tossResultIs === 0) {
      resultImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      resultImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="coin-toss-bg-container">
        <div className="coin-toss-container">
          <h1 className="coin-toss-heading">Coin Toss Game</h1>
          <p className="coin-toss-para">Heads (or) Tails</p>
          <img src={resultImage} alt="toss result" className="toss-image" />
          <button
            className="toss-button"
            type="button"
            onClick={this.gettingTossResult}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-para">Total: {headCount + tailCount}</p>
            <p className="count-para">Heads: {headCount}</p>
            <p className="count-para">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
