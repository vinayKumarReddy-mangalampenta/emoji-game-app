import './index.css'

const NavBar = props => {
  const {score, topScore, isScoreNeed} = props
  if (!isScoreNeed) {
    return (
      <nav className="nav-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1>Emoji Game</h1>
      </nav>
    )
  }
  return (
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="logo"
        className="emoji logo"
      />
      <h1>Emoji Game</h1>
      <div className="score-con">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
