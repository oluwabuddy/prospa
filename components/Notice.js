import { Link } from "react-router-dom";

const Notice = () => {
    return ( 
        <div className='notice'>
        <p className='upper-tag'>Don't have an account <Link className='link' to="/">Sign Up</Link></p>
    </div>
     );
}
 
export default Notice;