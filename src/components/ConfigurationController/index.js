// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div>
          <h1>Layout</h1>
          <ul>
            <li>
              <input
                checked={showContent}
                type="checkbox"
                onChange={onToggleShowContent}
                id="showContent"
              />
              <label htmlFor="showContent">Content</label>
            </li>
            <li>
              <input
                checked={showLeftNavbar}
                type="checkbox"
                onChange={onToggleShowLeftNavbar}
                id="showLeftNavbar"
              />

              <label htmlFor="showLeftNavbar">Left Navbar</label>
            </li>
            <li>
              <input
                checked={showRightNavbar}
                type="checkbox"
                onChange={onToggleShowRightNavbar}
                id="showRightNavbar"
              />
              <label htmlFor="showRightNavbar">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
