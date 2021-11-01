import './index.css'

const EmojiCard = props => {
  const {emoji, clickToGetPoint} = props
  const {emojiName, emojiUrl, id} = emoji

  const getPoint = () => {
    clickToGetPoint(id)
  }

  return (
    <li className="emoji-con">
      <button onClick={getPoint} type="button" className="emoji-button">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
