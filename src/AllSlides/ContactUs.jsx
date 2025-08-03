export default function ContactUs() {
    return(
        <>
            <section>
        <div style={{width: "100%", display: "flex", textAlign: "center", height: "250px", background: "#ffdccc", justifyContent: "center", alignItems: "center"}}>
            <h2 style={{fontSize: "50px"}}>تواصل معنا</h2>
        </div>
        <h4 className="text-center mt-3" style={{fontSize: "35px"}}>بيانات التواصل</h4>
        <div className="d-flex justify-content-around mt-5 mb-3 contact">
            <div className="contact-number" style={{width: "40%", height: "100px", borderRadius: "30px", border: "5px solid #ffdccc"}}>
                <i className="fa-solid fa-phone-flip fs-2 m-4"></i>
                <b className="" style={{fontSize: "40px"}}>01100324673</b>
            </div>
            <div className="contact-location" style={{width: "40%", height: "100px", borderRadius: "30px", border: "5px solid #ffdccc"}}>
                <i className="fa-solid fa-location-dot fs-2 m-4"></i>
                <b style={{fontSize: "50px"}}>طنطا-الغربيه</b>
            </div>
        </div>
    </section>
        </>
    );
}