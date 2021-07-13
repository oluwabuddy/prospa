import { Link } from "react-router-dom";



const SignUpOptions = () => {


    return ( 
        <div className='signUpDetails'>
        <form>
           <div className='show-only'>
               <div className='show1'>
            <h1 className='header'>Open a new business account</h1>
            <p className='head'>A short description comes here</p>
            <div className='detail'>
                <div className='inner-detail'>    
                    <input type='checkbox' id='list-menu' className='list-output' checked/>
                    <label htmlFor="list-menu" className='label-head'>I have a registered business/ <br /> charity with CAC</label>
                    <div className='inner-menu'>
                    <p className='innermost-body'>As a registered business you'll get:</p>
                    <span className='list'>Account in your business name</span>
                    <span className='list'>Send to and receive transfer from all <br />Nigerian bank</span>
                    <span className='list'>Tools for business management</span>
                    </div>
                </div>
            </div>
            </div>
            <div className='detail'>
                <div className='inner-detail'>    
                    <input type='checkbox' id='list-menu' className='list-output'/>
                    <label htmlFor="list-menu" className='label-head'>My business is not yet registered <br /> i would like to register</label>
                    <div className='inner-menu'>
                    <p className='innermost-body'>Everything you need to start your business</p>
                    <span className='list'>Registered business name with the CAC</span>
                    <span className='list'>Tax identification number</span>
                    <span className='list'>Your account will be automatically <br />
                    opened on completion</span>
                    </div>
                </div>
            </div>       
            <div className='detail'>
                <div className='inner-detail'>    
                    <input type='checkbox' id='list-menu' className='list-output'/>
                    <label htmlFor="list-menu" className='label-head'>I'm a freelancer i do business in <br /> my personal name </label>
            </div>
            </div>
            </div>
            <Link to={`/dashboard`}>
            <button  className='click'>Next</button>
            </Link>                          

        </form>
    </div>
     );
}
 
export default SignUpOptions;