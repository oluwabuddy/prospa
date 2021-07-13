import Navigation from "./Navigation";
import DashboardSideBar from "./DashboardSideBar";



const Dashboard = () => {
    return ( 
        <div className='medium'>
            <div className='nav'>
            <h2 className='dashboard-head'>Dashboard</h2>
            <div className='icons'>
            <div className='bell-icon'></div>
            <div className='photo-icon'></div>
            </div> 
            </div>
            <div className='thin'>
            <DashboardSideBar />
            <Navigation />
            </div>
            

            




        </div>
     );
}
 
export default Dashboard;