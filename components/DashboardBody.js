const DashboardBody = () => {
    return ( 
        <div className='dashboard-content'>
        <div className='dashboard-body'>
        <div className='inner-dashboard-body'>
            <h2>Welcome back, Kathy</h2>
            <p>Here's what has been happening in the last <a href="/detail">7 days</a></p>
        </div>
        <button>Add a sub account</button>
        </div>
        <div className='account-details'>
        <div className='account-info'>
        <div className='inner-account-info'>
        <div className='account-balance'>
            <h5>CURRENT ACCOUNT </h5>
            <p>PROVIDUS BANK - 0707334555</p>
        </div>
        <div className='blue-img'></div>
        </div>
        <span>N823,400.88</span>
        </div>
        
        <div className='account-info'>
        <div className='inner-account-info'>
        <div className='account-balance'>
            <h5>SAVINGS ACCOUNT </h5>
            <p>SUB ACCOUNT - 1234567</p>
        </div>
        <div className='lightblue-img'></div>
        </div>
        <span>N39,400.88</span>
        </div>
        </div>

        
        <div className='account-summary'>
        <div className='account-info-summary'>
        <div className='account-summary-head'>
            <h3>June Summary </h3>
        </div>
        <div className='inner-info-summary'>
        <div className='money-matter'>
            <h5>Money in</h5>
            <p>N 5,654,000</p>
        </div>
        <div className='money-matter'>
            <h5>Money out</h5>
            <p>N 5,654,000</p>
        </div>
        <div className='money-matter'>
            <h5>difference</h5>
            <p>N 5,654,000</p>
        </div>
        </div>
        <div className='money-projection'></div>
        </div>
        <div className='cashflow'>
        <div className='inner-cashflow'>
        <div className='inner-cashflow-head'>
            <h3> Cash outflow </h3>
        </div>
        <div className='cashflow-body'>
        <div className='money-icon'>
            <div className='inner-money-icon-head'>
            <div className='bank-icon'></div>
            <h5>Bank Fees</h5>
            </div>
            <div className='inner-money-icon'>
            <span>#250,000</span>
            <div className='money-meter'>
                <div className='inner-money-meter'></div>
            </div>
            </div>
        </div>
        <div className='money-icon'>
            <div className='inner-money-icon-head'>
            <div className='internet'></div>
            <h5>Internet</h5>
            </div>
            <div className='inner-money-icon'>
            <span>#250,000</span>
            <div className='money-meter'>
                <div className='inner-money-meter'></div>
            </div>
            </div>
        </div>
        <div className='money-icon'>
            <div className='inner-money-icon-head'>
            <div className='marketing'></div>
            <h5>Marketing</h5>
            </div>
            <div className='inner-money-icon'>
            <span>#250,000</span>
            <div className='money-meter'>
                <div className='inner-money-meter'></div>
            </div>
            </div>
        </div>
        <div className='money-icon'>
            <div className='inner-money-icon-head'>
            <div className='transfer'></div>
            <h5>Transfer</h5>
            </div>
            <div className='inner-money-icon'>
            <span>#250,000</span>
            <div className='money-meter'>
                <div className='inner-money-meter'></div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        
        </div>
        <div className='recent-transaction'>
            <div className='recent-transaction-head'>
                <h3>Recent transaction</h3>
                <button>See all</button>
            </div>
            <div className='transaction-details'>
                <div className='inner-transaction-details'>
                <div className='bank-icon'></div>
                <div>
                    <h3>Transfer fee</h3>
                    <span>12:49 AM</span>
                </div>
                </div>
                <p>-N 145.90</p>

            </div>
            <div className='transaction-details'>
                <div className='inner-transaction-details'>
                <div className='transfer'></div>
                <div>
                    <h3>Adam Chapman</h3>
                    <span>12:00 AM</span>
                </div>
                </div>
                <p>-N 2000.90</p>

            </div>
            <div className='transaction-details'>
                <div className='inner-transaction-details'>
                <div className='transfer'></div>
                <div>
                    <h3>Shirley Barnes</h3>
                    <span>18:00 PM</span>
                </div>
                </div>
                <p>-N 40500.90</p>

            </div> <div className='transaction-details'>
                <div className='inner-transaction-details'>
                <div className='transfer'></div>
                <div>
                    <h3>Adam Chapman</h3>
                    <span>12:00 AM</span>
                </div>
                </div>
                <p>-N 8005.90</p>

            </div>

        </div>
        
        </div>
     );
}
 
export default DashboardBody;