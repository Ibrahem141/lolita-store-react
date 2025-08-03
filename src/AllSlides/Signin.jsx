import { Link } from "react-router-dom";
export default function Signin() {
    return(
        <>
            <div className="section-login">
        <div className="login">
                        <h1 className="text-center">إنشاء حساب جديد</h1>
                        
                            
                            <input className="form-control mt-3" type="text" placeholder="الاسم بالكامل" id="register-name-input" />
                            
                            <input className="form-control mt-3" type="email" placeholder="البريد الالكترونى" id="register-email-input" />

                            <input className="form-control mt-3" type="password" placeholder="كلمة المرور" id="register-password-input" />
                        
                            <button className="btn btn-primary w-100 mt-3" onclick="registerBtnCleaked()">إنشاء حساب</button>
                        
                        <div className="d-flex justify-content-between my-2">
                            <Link to="/login" className="text-primary" > لديك حساب؟</Link>
                        </div>
        </div>
    </div>
        </>
    );
}