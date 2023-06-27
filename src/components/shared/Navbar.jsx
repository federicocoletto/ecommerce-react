import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar__container">
			<nav className="nabvar__nav">
				<div className="nav__icon">
					<Link to='/'>
						<h1>Home</h1>
					</Link>
				</div>
				{/* <div className="nav__paths">
					<ul className="nav__ul">
						<li className="nav_li">
							<Link className="nav__link" to='/register'>Register</Link>
						</li>
						<li className="nav_li">
							<Link to='/login'>Login</Link>
						</li>
						<li className="nav_li">
							<Link className="nav__link" to='/cart'>Cart</Link>
						</li>
						<li className="nav_li">
							<Link className="nav__link" to='/purchases'>Purchases</Link>
						</li>
					</ul>
				</div> */}
			</nav>
		</div>
	)
};

export default Navbar;
