import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../all.css'
import { Link } from 'react-router-dom';
import Logo from '../image/Lolita Logo-copy.png'
export default function Nav() {
    return(
        <>
                <nav className="navbar navbar-expand-lg">
            <div className="container">
                {/* LOGO */}
                <Link className="navbar-brand" to="/">
                    <img width='100px' src={Logo} alt="logo" loading="lazy"/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" href="#show-navbar">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
                

                <div className="collapse navbar-collapse nav" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">المتجر</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/who-are-we" >من نحن</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us" >تواصل معنا</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" >حسابى</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <b>150 ج.م</b>
                    <button className="btn-card menu-icon" data-bs-toggle="offcanvas" href="#card"  type="button">
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>
                
                </div>
            </div>
        </nav>

    </>
    );
}