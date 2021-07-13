import { Link } from "react-router-dom";


const SignInNotice = () => {
    return ( 
        <div className='notice'>
        <p className='upper-tag'>Already a member? <Link className='link' to="/signin">Sign in</Link></p>

    </div>
     );
}
 
export default SignInNotice;