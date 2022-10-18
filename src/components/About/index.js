// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgCol = isDarkTheme ? 'home-bg-col' : ''
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const homePara = isDarkTheme ? 'home-dark' : 'home-light'

      return (
        <div>
          <Navbar />
          <div className={`home-bg ${homeBgCol}`}>
            <img className="home-image" src={aboutImage} alt="about" />
            <h1 className={homePara}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
