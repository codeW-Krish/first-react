import PropTypes from 'prop-types'
import './Background.css'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import video from '../../assets/video1.mp4'

// props validation
Background.propTypes = {
    playStatus: PropTypes.bool.isRequired,
    heroCount: PropTypes.number.isRequired
}

function Background({playStatus,heroCount}) {
    if(playStatus){
        return(
            <video className='background fade-in' autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
        )
    }else if(heroCount==0){
        return(
            <img className='background fade-in' src={img1} alt="Background" />
        )
    }else if(heroCount==1){
        return(
            <img className='background fade-in' src={img2} alt="Background" />
        )
    }else if(heroCount==2){
        return(
            <img className='background fade-in' src={img3} alt="Background"></img>
        )
    }
    else {
        // Handle default case where neither playStatus nor heroCount condition is met
        return (
            <div className='background'>
                Error
            </div>
        );
    }
}

export default Background