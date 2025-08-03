import ImageProduct from '../image/5773679641175902951.jpg';
import { Link } from 'react-router-dom';
export default function Home() {
    return(
        <>
        <section className="products mt-5">
        <div className="container-fluid">
            <ul className="nav nav-tabs">

            <li className="nav-item">
                <a className="nav-link active" aria-current="page" data-bs-toggle="tab" href="#all">الكل</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#makeup">الميكب</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#skin-and-hair">منتجات العنايه بالبشره والشعر</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#person">منتجات العنايه الشخصيه</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#acc">اكسسوارات</a>
            </li>


        </ul>
        <div className="row row-cols-2 row-cols-lg-4  row-cols-md-4 all-products mt-5" id="all-products">
            <Link to="/details">
                <div className="col product mb-3 d-flex justify-content-center text-center" >
                    <div className="card overflow-hidden">
                        <img src={ImageProduct} alt="product" loading="lazy" />
                        <div className="product-info">
                            <h3>اسوره بلغاري استانلس كود a224</h3>
                            <p>أحدث أنواع السماعات وأجددها</p>
                            
                            <div className="price mb-2">
                                <span className="d-flex justify-content-center"> 200ج.م</span>
                            </div>

                            
                                <button  className="btn btn-danger w-100" > تفاصيل المنتج</button>
                            
                        </div>
                    </div>
                </div>
            </Link>
            
                
            
            

        </div>
        </div>
    </section>
        </>
    );
}