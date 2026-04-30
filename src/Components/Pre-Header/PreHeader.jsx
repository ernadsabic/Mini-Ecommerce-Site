import './preheader.css'
import { Link } from 'react-router-dom'



export const PreHeader = () => {
    return(
        <>
            <div className="preheader">
                <div className="container preheader-container">
                    <div className="flexWrapper">
                        <div className="text">
                            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                            <Link to="/products">ShopNow</Link>
                        </div>
                        <div className="language">
                            <select name="language">
                                <option value="English">English</option>
                                <option value="Croatian">Croatian</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}