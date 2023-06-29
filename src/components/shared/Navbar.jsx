import { Link } from "react-router-dom";
import './styles/Navbar.css'
import { useState } from "react";

const Navbar = () => {

	const [isShown, setIsShown] = useState(false);

	const handleShow = () => {
		setIsShown(!isShown)
	}

	return (
		<div id="navbar__container">
			<nav className="nabvar__nav">
				<div>
					<Link title="home" to='/'>
						<i className="fa-solid fa-house"></i>
					</Link>
				</div>
				<div className="nav__paths">
					<button onClick={handleShow}>
						<i className="fa-solid fa-bars"></i>
					</button>
					<ul className={`nav__ul ${isShown ? 'show' : ''}`}>
						<li className="nav_li">
							<Link title='register' to='/register' className="link" onClick={handleShow}>
								<span className="nav__span">Register</span>
								<i className="nav__i fa-regular fa-address-card"></i>
							</Link>
						</li>
						<li className="nav_li">
							<Link title='login' to='/login' className="link" onClick={handleShow}>
								<span className="nav__span">Login</span>
								<i className="nav__i login fa-solid fa-right-to-bracket"></i>
							</Link>
						</li>
						<li className="nav_li">
							<Link title='cart' to='/cart' className="link" onClick={handleShow}>
								<span className="nav__span">Cart</span>
								<i className="nav__i cart fa-solid fa-cart-shopping"></i>
							</Link>
						</li>
						<li className="nav_li">
							<Link title='purchases' to='/purchases' className="link" onClick={handleShow}>
								<span className="nav__span">Purchases</span>
								<i className="nav__i purchases fa-solid fa-bag-shopping"></i>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
};

export default Navbar;
