import image1 from '../image/5773679641175902948.jpg';
import image2 from '../image/5773679641175902951.jpg';
import image3 from '../image/92652-600x600.webp';
export default function DetailsProduct() {
    return(
        <>
                <div className="container mt-3">

        <div className="row " id="details-signal-product">
            <div className="col-md-4">
                

                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators carousel-images">
                        <img data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active img-slider" src={image1} alt="" />
                        <img data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="img-slider" aria-label="Slide 2" src={image2} alt="" />
                        <img data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="img-slider" aria-label="Slide 3" src={image3} alt="" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="..." />
                    </div>
                        <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." />
                    </div>
                        <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..." />
                    </div>
                    </div>
                </div>

            </div>
            <div className="col-md-6">
                
                <h1 className="modal-title my-5">اسوره بلغاري استانلس كود a224</h1>
                <p className="product-description">
                    جهاز إرسال أواستقبال موصل بأسلاك مع مقسم رئيسي يربط بين عدد من المشتركين باستخدم دوائر إلكترونية مركبة في مقسمات رئيسة تتغذى بتيار ثابت مقداره -48 فولت تولد
                </p>
                
                <div className="price mb-3">
                    <span>السعر:</span>
                    <span className="fw-bold" id="price">150</span>
                    <span className="fw-bold">ج.م</span>
                </div>
                <div className="btns d-flex gap-3">
                    <div className="btn-group btns-quantity">
                        <button type="button" className="btn" id="increaseBtn">+</button>
                        <button type="button" className="btn" id="counterValue">1</button>
                        <button type="button" className="btn" id="decreaseBtn">-</button>
                    </div>


                    <div className="d-flex gap-1 add-btn">
                        <button className="btn btn-danger">إضافة الى السله</button>
                    </div>
                </div>
                <div className="mt-4 text-secondary">ID: <span>65488754848487</span></div>
                <hr />
                

                
            </div>
        </div>
    </div>
        </>
    );
}