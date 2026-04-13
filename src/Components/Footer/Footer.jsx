import './footer.css'
import QRCode from './qrcode.svg';
import GooglePlayBtn from './googleplay.png';
import AppleStoreBtn from './appstore.png';
import FacebookIco from './facebook.svg';
import InstagramIco from './instagram.svg';
import TwitterIco from './twitter.svg';
import LinkedinIco from './linkedin.svg';
import { Link } from 'react-router-dom';



export const Footer = () => {
    return(
        <footer>
            <div className="container footer-container">
                <div className="footerWrapper">
                    <div className="footer-col">
                        <h2>Exclusive</h2>
                        <h3>Subscribe</h3>
                        <a>Get 10% off your first order</a>
                        <input type="text" className='footerInput' placeholder='Enter your email'/>
                    </div>
                    <div className="footer-col">
                        <h3>Support</h3>
                        <a>111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</a>
                        <a>exclusive@gmail.com</a>
                        <a>+88015-88888-9999</a>
                    </div>
                    <div className="footer-col">
                        <h3>Account</h3>
                        <Link to="/profile">My account</Link>
                        <a>Login/Register</a>
                        <Link to="/cart">Cart</Link>
                        <Link to="/wishlist">Wishlist</Link>
                        <Link to="/products">Shop</Link>
                    </div>
                    <div className="footer-col">
                        <h3>Quick Link</h3>
                        <a>Privacy policy</a>
                        <a>Terms Of Use</a>
                        <a>FAQ</a>
                        <a>Contact</a>
                    </div>
                    <div className="footer-col">
                        <h3>Download App</h3>
                        <p>Save $2 with App New User Only</p>
                        <div className='footerBtns'>

                            <div className='qrCode'>
                                <img src={QRCode} alt="QR CODE OF APP" />
                            </div>

                            <div className='downloadBtns'>
                                <button><img src={GooglePlayBtn} alt="Google Play Download" /></button>
                                <button><img src={AppleStoreBtn} alt="Apple Store Download" /></button>
                            </div>
                        </div>

                        <div className='footer-icons'>
                            <a href="/" className='icons'><img src={FacebookIco} alt="Facebook page" /></a>
                            <a href="/" className='icons'><img src={InstagramIco} alt="Instagram page" /></a>
                            <a href="/" className='icons'><img src={TwitterIco} alt="Twitter profile" /></a>
                            <a href="/" className='icons'><img src={LinkedinIco} alt="Linkedin profile" /></a>
                        </div>

                    </div>
                    
                </div>
                <div className='copyright'>
                    <p>&copy; Copyright Rimel {new Date().getFullYear()}. All right reserved</p>
                </div>
            </div>
        </footer>
    )
}