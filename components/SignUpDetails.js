import SignUpSideBar from "./SignUpSideBar";
import SignInNotice from "./SignInNotice";
import SignUpOptions from "./SignUpOptions";




const SignUpDetails = () => {
    

    return ( 
        <div className='create'>
            <SignUpSideBar />

            <SignUpOptions />
          
            <SignInNotice />


        </div>
     );
}
 
export default SignUpDetails;