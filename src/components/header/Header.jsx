import './header.css'

const Header = () => {
    return (
        <div id="header">
            <div id="header-left">
                <div id="header-img">
                    <img src="./alarado-icon-homepage.svg" alt="" />
                </div>
            </div>
            
            <div id="header-right">
                <div className="right header-links">
                    <a href="#" className='link-active'>About us</a>
                    <a href="#">Product</a>
                    <a href="#">Resource</a>
                    <a href="#">Contact</a>
                </div>

                <div className="right">
                    a
                </div>
            </div>
        </div>
    )
}

export default Header
