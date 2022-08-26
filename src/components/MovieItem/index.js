// Write your code here

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        className="popup-content"
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
      >
        {close => (
          <div className="buttonContainer">
            <button
              className="closeBtn"
              type="button"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} />
            </button>

            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
