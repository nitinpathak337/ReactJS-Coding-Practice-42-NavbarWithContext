// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      const navbarBg = isDarkTheme ? 'dark-bg' : ''

      const navImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const linkCol = isDarkTheme ? 'link-dark' : 'link-light'

      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <>
          <nav className={`navbar ${navbarBg}`}>
            <img className="logo" src={navImage} alt="website logo" />
            <ul className="nav-links">
              <li>
                <Link to="/" className={`link ${linkCol}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`link ${linkCol}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="theme-button"
              onClick={onChangeTheme}
              testid="theme"
            >
              <img className="theme-icon" src={themeImage} alt="theme" />
            </button>
          </nav>
          {!isDarkTheme && <hr className="line" />}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
