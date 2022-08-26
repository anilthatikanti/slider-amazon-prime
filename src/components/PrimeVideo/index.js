// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const comedyList = moviesList.filter(each => each.categoryId === 'COMEDY')
  const actionList = moviesList.filter(each => each.categoryId === 'ACTION')

  return (
    <div className="container">
      <img
        className="banner"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="prime-slide-container">
        <h1>Action Movies</h1>
        <MoviesSlider moviesList={actionList} />
        <h1>Comedy Movies</h1>
        <MoviesSlider moviesList={comedyList} />
      </div>
    </div>
  )
}
export default PrimeVideo
