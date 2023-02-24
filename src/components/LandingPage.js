import './LandingPage.css'
import mainImage from '../assets/lens-1418954.png';

function LandingPage() {
    return <div className='container'>
        <div className='landing-page-image'>
            <img src={mainImage} />
        </div>
        <div className='landing-page-info'>
            <div className='company-name'>10x team 04</div>
            <div className='enter-link'>
                <a href='/postview'>Enter</a>
            </div>
        </div>
    </div>
}

export default LandingPage