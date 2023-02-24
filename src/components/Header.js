import headerIcon from '../assets/icon.png'
import cameraIcon from '../assets/camera.png'
import './header.css'

function Header() {
    return <div>
        <div className="header">
            <div className="logo">
                <a href='/postview'><img src={headerIcon} /></a>
                <span className="header-name">InstaClone</span>
            </div>
            <div className="upload-icon">
                <a href='/upload'><img src={cameraIcon} /></a>

            </div>
        </div>
    </div>
}

export default Header