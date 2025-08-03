import { Link } from "react-router-dom";

    const Login = () => {
    
    return(
        <>
    <div className="section-login">
        <div className="login">
                        <h1 className="text-center">تسجيل الدخول</h1>
                        
                            <label for=""> البريد الالكترونى</label>
                            <input className="form-control " type="email" id="email" placeholder="ادخل البريد الالكترونى" />
                            <label for="">كلمة المرور</label>
                            <input className="form-control " type="password" id="password" placeholder="ادخل كلمة المرور" />
                            <button className="btn btn-primary w-100 mt-3" onclick="login()">تسجيل الدخول</button>
                        
                        <div className="d-flex justify-content-between my-2">
                            <Link to="/signin" className="text-primary">ليس لديك حساب؟</Link>
                            
                        </div>
        </div>
    </div>
    
        </>
    );
}

export default Login;