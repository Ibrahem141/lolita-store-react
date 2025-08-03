import image1 from '../image/5773679641175902951.jpg';
import image2 from '../image/5773679641175902948.jpg'
export default function WhoAreWe() {
    return(
        <>
        <section>
            <div style={{width: "100%", display: "flex", textAlign: "center", height: "250px", background: "#ffdccc", justifyContent: "center", alignItems: "center"}}>
                <h2 style={{fontSize:"50px"}}>من نحن؟</h2>
            </div>

        <div className="container d-flex justify-content-around mt-5 mb-5 info-one">
            <div className="w-40" style={{background: "aquamarine", border:" 3px solid #ffdccc", borderRadius: "30px"}}>
                <img src={image1} loading='lazy' alt='' />
            </div>
            <div className="w-50">
                <h4>ليه تشتري مستحضرات التجميل من متجرنا؟</h4>
                <p className="mt-2">لأننا بنقدم لك تجربة تسوق فريدة ومميزة، وبنضمن لك الحصول على مستحضرات تجميل أصلية 100% وعالية الجودة.<br /> إحنا في متجر لوليتا مش مجرد بائعين، إحنا فريق شغوف بالجمال والعناية بالبشرة، وبنسعى دايماً إننا نكون وجهتك الأولى لكل احتياجاتك الجمالية.</p>
            </div>
        </div>
        <hr className="m-auto w-75" />
        <div className="container d-flex justify-content-around mt-5 mb-5 info-one">
            <div className="w-50">
                <h4>احنا مين ؟</h4>
                <p className="mt-2">إحنا متجر لوليتا، متجر إلكتروني متخصص في بيع مستحضرات التجميل.
                    <br />
                    هدفنا هو نوفرلك تشكيلة واسعة من أفضل المنتجات العالمية والمحلية اللي بتلبي كل الأذواق والاحتياجات، من العناية بالبشرة والشعر لحد المكياج والعطور.
                    <br />
                    إحنا بنركز على الجودة، الأصالة، وتوفير خدمة عملاء ممتازة عشان نضمن رضاك التام.
                    <br />
                </p>
                <h5 className="mt-3">متجرنا باختصار واضح:</h5>
                <p className="mt-3">
                    متجر لوليتا هو متجرك المتكامل للجمال.
                    <br />
                    بنقدم لك مستحضرات تجميل أصلية، متنوعة، وبجودة عالية، مع تجربة تسوق سهلة ومريحة.
                    <br />
                    بنفهم إن اختيار مستحضرات التجميل مهم، عشان كده بنحرص على إننا نقدم لك كل اللي تحتاجيه عشان تظهري بأبهى صورة، بثقة تامة في جودة المنتجات اللي بتشتريها من عندنا.
                </p>
            </div>
            <div className="w-40" style={{background: "aquamarine", border:" 3px solid #ffdccc", borderRadius: "30px", height: "300px"}}>
                <img className="w-100 h-100" src={image2} alt='' />
            </div>
        </div>
    </section>
        </>
    );
}