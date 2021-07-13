import SignUpSideBar from "./SignUpSideBar";
import SignInNotice from "./SignInNotice";
import { Link } from "react-router-dom"

const Create = () => {
    return ( 
        <div className='create'>
            <SignUpSideBar />
            <div className='signUp'>
                <form>
                    <h1 className='header'>Create your account</h1>
                    <p className='head'>A short description about account types</p>
                    <input type="text" className='fillForm' placeholder='First name' /><br />
                    <input type="text" className='fillForm' placeholder='Last name' /><br />
                    <select className='fillNumber'>
                        <option  value="+234" placeholder='country'>+234</option>
                    </select>
                    <input type="number" className='fillerForm' placeholder='Mobile Number' /><br />
                    <input type="email" className='fillForm' placeholder='Email Address' /><br />
                    <Link to={`/signin`}>
                            <button className='click'>Next</button>
                            </Link>

                </form>
            </div>
            <SignInNotice />


        </div>
     );
}
 
export default Create;