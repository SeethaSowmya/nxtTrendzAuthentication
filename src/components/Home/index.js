import {Component} from 'react'

import Header from '../Header/index'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="homeContainer">
          <div className="leftContainer">
            <h1>Clothes That Get YOU Noticed</h1>
            <p>
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution . Your fashion makes you been seen
              and herd that way you are . sS,celebrate the seasons new and
              exciting fashion in your own way
            </p>
            <button className="buttonShop" type="button">
              Submit
            </button>
          </div>
          <div className="ImgSize">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              className="photoSize"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
