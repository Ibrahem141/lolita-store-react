import { Link } from "react-router-dom";
export default function ComponenteTheOrder() {
    return(
        <>
            <section className="complete-order">
            <div className="complete">
                <h1>إتمام الطلب</h1>
                <div>
                    <h3 className="mt-5">الفواتير والشحن</h3>
                    <hr />
                    <form>
                        <label for="">المحافظه</label>
                        <input type="text" />
                        <label for="">العنوان بالتفصيل</label>
                        <input type="text" />
                        <label for="">الاسم بالكامل</label>
                        <input type="text" />
                        <label for="">رقم الهاتف</label>
                        <input type="text" />
                        <label for="">الدولة</label>
                        <input type="text" value="مصر" disabled />
                    </form>
                    
                    <div className="mt-5">
                        
                        <h3>معلومات إضافية</h3>
                        <hr />
                        <div className="mt-5">
                            <h6>ملاحظات الطلب (اختياري)</h6>
                            <textarea style={{width: "100%", height: "100px"}} placeholder="ملاحظات حول الطلب. مثال:ملحوظه خاصه بتسليم الطلب" name="" id=""></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="datails"> 
                <h3 className="mt-3" style={{marginRight: "30px"}}>طلبك</h3>
                <div className="d-flex justify-content-around">
                    <ul>
                        <li>المنتجات</li>
                        <li>اسوره بلغاري استانلس كود a224</li>
                        <li>المجموع</li>
                        <li>الشحن</li>
                        <li>الإجمالي</li>
                    </ul>
                    <ul>
                        <li>المجموع</li>
                        <li>136,00 ج.م</li>
                        <li>136,00 ج.م</li>
                        <li>سعر ثابت: 136,00 ج.م</li>
                        <li>136,00 ج.م</li>
                    </ul>
            </div>
            <hr />
            <div style={{width: "80%", background: "antiquewhite", textAlign: "center",justifyContent: "center", margin: "auto", marginTop: "50px"}}>
                دفع 50 جنيه فودافون كاش لجدية الحجز علي هذا الرقم 01018517935
والباقي عند الاستلام برجاء التواصل معنا عبر الواتساب علي نفس الرقم لتأكيد الأوردر واذا لم يتم دفع فلوس جدية الحجز في خلال 24 ساعه من طلب الاوردر سوف يتم ألغاء الاوردر
            </div>
            <div className="mt-5 w-75 m-auto"><Link><button className="btn btn-danger w-100">إتمام الطلب</button></Link></div>
            </div>
        </section>
        </>
    );
}