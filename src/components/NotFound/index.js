// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgCol = isDarkTheme ? 'home-bg-col' : ''
      const homePara = isDarkTheme ? 'home-dark' : 'home-light'

      return (
        <div>
          <Navbar />
          <div className={`home-bg ${homeBgCol}`}>
            <img
              className="home-image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={homePara}>Lost Your Way?</h1>
            <p className={homePara}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
