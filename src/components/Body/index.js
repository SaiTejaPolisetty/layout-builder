// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div>
          {showLeftNavbar && (
            <div>
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div>
              <h1>Content</h1>
              <p>Lorem ipsum dolor sit</p>
            </div>
          )}
          {showRightNavbar && (
            <div>
              <h1>Right Navbar</h1>
              <div>
                <h1>Ad 1</h1>
              </div>
              <div>
                <h1>Ad 2</h1>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
