// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgCol = isDarkTheme ? 'home-bg-col' : ''
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homePara = isDarkTheme ? 'home-dark' : 'home-light'

      return (
        <div>
          <Navbar />
          <div className={`home-bg ${homeBgCol}`}>
            <img className="home-image" src={homeImage} alt="home" />
            <h1 className={homePara}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
