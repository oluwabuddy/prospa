const DashboardSideBar = () => {
    return ( 
        <div className='dashboard-sideBar'>
            <div className='dashboard-sidebar-head'>
           <div className='icon-bn'></div>
           <div className='inner-sidebar-head'>
               <h2>Clayvant inc</h2>
               <p>Manage account</p>
           </div>
           <div className='dropdown-list'>
           <label htmlFor='menu-input' className='dropDown-icon'>a</label>
           <input type="checkbox" id='menu-input' />
           <div className='menu-content'>
           <ul className='menu-list'>
               <li className='menu'>Clayvant inc</li><hr />
               <li> <a className='menu listing' href="/..">Business name 2</a></li><hr />
               <li> <a className='menu listing' href="/..">Business name 3</a></li>
               <a className='add-link' href="/...">Add a business </a>
           </ul>
           </div>
           </div>
           </div>
           <div className='sidebar-options'>
               <ul>
                   <li><a className='top' href="/..">Account</a></li>
                   <li><a className='rest' href="/..">Transfer</a></li>
                   <li><a className='rest' href="/..">Invoice</a></li>
                   <li><a className='rest' href="/..">Management</a></li>
                   <li><a className='rest' href="/..">Security</a></li>
                   <li><a className='rest' href="/..">Support</a></li>
               </ul>
           </div>
           <div className='dashboard-footer'>
               <h1>prospa</h1>
           </div>
             
           </div>
     );
}
 
export default DashboardSideBar;