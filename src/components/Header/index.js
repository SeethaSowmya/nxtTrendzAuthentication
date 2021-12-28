import './index.css'

const Header = () => (
  <nav className="headerContainer">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      className="imgSize"
      alt="website logo"
    />
    <div className="headerList">
      <h1>Home</h1>
      <h1>Products</h1>
      <h1>Cart</h1>
      <button type="button" className="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
