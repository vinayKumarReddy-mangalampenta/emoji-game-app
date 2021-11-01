import './index.css'

const WinOrLoseCard = props => {
  const {emojiCardIds, replayGame} = props
  const playAgain = () => {
    replayGame()
  }

  if (emojiCardIds.length === 12) {
    return (
      <div className="won-card">
        <div>
          <h1 className="heading">You Won</h1>
          <p className="best-score">Best Score</p>
          <p className="score"> 12/12</p>
          <button className="play-again-btn" type="button" onClick={playAgain}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="img"
        />
      </div>
    )
  }
  return (
    <div className="won-card">
      <div>
        <h1 className="heading">You Lose</h1>
        <p className="best-score">Best Score</p>
        <p className="score"> {emojiCardIds.length}/12</p>
        <button className="play-again-btn" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="img"
      />
    </div>
  )
}

export default WinOrLoseCard
