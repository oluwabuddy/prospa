import SideBar from "./SideBar";
import Notice from "./Notice";
import { Link } from "react-router-dom";


const SignIn = () => {
    return ( 
        <div className='container'>
            <SideBar />
                <div className='signIn'>
                    <form >
                        <h2 className='header'>Welcome back to Prospa</h2>
                        <p className='head'>An account with powerful, personalised tools <br/>
                            all in one place</p>
                            <input type="text" className='fillForm' placeholder='Email Address' required/><br />
                            <input type="text" className='fill' placeholder='Enter Password' required/><br />
                            <Link to={`/signupdetail`}>
                            <button className='click'>Next</button>
                            </Link>
                            
                    </form>
             </div>
                    <Notice />
                   
                    
        </div>
     );
}
 
export default SignIn;
