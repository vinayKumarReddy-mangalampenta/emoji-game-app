import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isGameOver: false,
    emojiCardIds: [],
    isScoreNeed: true,
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickToGetPoint = id => {
    const {emojiCardIds, score} = this.state

    const arrLen = emojiCardIds.filter(each => each !== id)

    if (arrLen.length !== emojiCardIds.length) {
      this.setState(prevState => ({
        isGameOver: true,
        topScore: prevState.topScore > score ? prevState.score : score,
        isScoreNeed: !prevState.isScoreNeed,
      }))
    } else {
      this.setState(prevState => ({
        emojiCardIds: [...prevState.emojiCardIds, id],
        score: prevState.score + 1,
      }))
    }
  }

  replayGame = () => {
    const {score, topScore} = this.state

    const newTopScore = topScore > score ? topScore : score

    this.setState(prevState => ({
      isGameOver: false,
      score: 0,
      emojiCardIds: [],
      topScore: newTopScore,
      isScoreNeed: !prevState.isScoreNeed,
    }))
  }

  renderGameOver = () => {
    const {emojiCardIds} = this.state
    return (
      <WinOrLoseCard emojiCardIds={emojiCardIds} replayGame={this.replayGame} />
    )
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(emoji => (
          <EmojiCard
            key={emoji.id}
            emoji={emoji}
            clickToGetPoint={this.clickToGetPoint}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, isGameOver, isScoreNeed} = this.state
    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} isScoreNeed={isScoreNeed} />
        <div className="emoji-game-body">
          {isGameOver ? this.renderGameOver() : this.renderEmojisList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
