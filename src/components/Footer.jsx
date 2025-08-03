import { Link } from "react-router-dom";
export default function Footer() {
    return(
        <>
            <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="text-center">جميع الحقوق محفوظة &copy; 2025| <a style={{color: 'black'}} href="index.html">Lolita Store</a></p>
                </div>

                    <div className="all-sochial-media">
                        <div className="social d-flex justify-content-between">
                                <a href="index"><i className="fa-brands fa-facebook"></i></a>
                                <a href="index"><i className="fa-brands fa-instagram"></i></a>
                                <a href="index"><i className="fa-brands fa-telegram"></i></a>
                                <a href="index"><i className="fa-brands fa-tiktok"></i></a>
                                <a href="index"><i className="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>
                
                    
            </div>
        </div>
    </footer>
    {/* Footwr */}


    
   {/* Link Whats App */}
    <a href="https://wa.me/201100324673" className="btn-whatsapp" target='blank'>
        <i className="fa-brands fa-whatsapp"></i>
    </a>
    
    


    {/* Modal Show Navbar */}

    <div className="offcanvas offcanvas-start " tabindex="-1" id="show-navbar" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body modal-nav">
            <ul>
                <li>
                    <Link to="/" >المتجر</Link>
                </li>
                <li>
                    <Link to="/who-are-we" >من نحن</Link>
                </li>
                <li>
                    <Link to="/contact-us" >تواصل معنا</Link>
                </li>
                <li>
                    <Link to="/signin" >حسابى</Link>
                </li>
            </ul>
        </div>
    </div>

   {/* Modal Card */}
    <div className="offcanvas offcanvas-start " tabindex="-1" id="card" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="card">سلة المشتريات</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <div className="row row-cols-1 d-block row-mini-card m-1">
                <div className="col mini-card d-flex justify-content-between align-items-center">
                    <img className="img-fluid w-25 rounded" src="../image/92652-600x600.webp" alt="products" />
                    <p>اسوره بلغاري استانلس كود a224</p>

                    <div className="btn-group btns-quantity-mini">
                        <button type="button" className="btn">+</button>
                        <button type="button" className="btn" id="number-btn">1</button>
                        <button type="button" className="btn">-</button>
                    </div>
                </div>
            
            </div>
            <div className="d-flex flex-column gap-2">
                
                <Link to="/" ><button className="btn btn-primary w-100">تكملة التسوق </button></Link>
                <Link to="/components" ><button className="btn btn-danger w-100">إتمام الطلب</button></Link>
            </div>
        </div>
    </div>
        </>
    );
}