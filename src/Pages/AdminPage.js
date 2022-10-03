import './Admin.css'
import { useReducer, useState } from 'react';
const AdminPage = () => {
    const {searchCustomerDetails, setSearchCustomerDetails} = useReducer('')
    
    const [purchases, setPurchases] = useState([
        {id:1, name:"Victor Monderu", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:2, name:"Victor Monderu", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:3, name:"Jane Njeri", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:4, name:"Victor Monderu", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:5, name:"Victor Monderu", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:6, name:"Victor Monderu", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:7, name:"Victor Monderu", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:8, name:"Victor Monderu", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:9, name:"Victor Monderu", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false}
    ])
const handleSearch =(searchValue)=>{
   setSearchCustomerDetails(searchValue)
   purchases.filter((purchase)=>{
   return Object.values(purchase).join('').toLowerCase().includes(searchCustomerDetails.toLowerCase())
   })
   }

    return ( 
        <div className="AdminPage">
            <div id="wrapper">
            <div className="side-menu">
                <ul className='menu-list'>
                    <li>Dashboard</li>
                    <li>Messages</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </div>
        <div id="container">
            <div className="nav-bar">
                <h3>Welcome Back, Victor</h3>

                <div className="nav-bar-section-2">
                    <div className="search-bar">
                        <input 
                        type="text"
                        value={searchCustomerDetails}
                        placeholder='search'
                        onChange={(e)=>setSearchCustomerDetails(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>

                    <div className="user-profile">
                        <img src="" alt="" />
                    </div>

                </div>
            

                
            </div>

            <div className="customer-purchases" >
                    <div className="headers">
                        <h3>Customer's Name</h3>
                        <div className='more-headers'>
                            <h3>Product</h3>
                            <h3>Paid</h3>
                            <h3>Dispatched</h3>
                            <h3>Delivered</h3>
                            <h3>Returned</h3>
                        </div>
                    </div>
                    {purchases && purchases.map((purchase, key)=>(
                    <div className="customer-purchase-information" key={purchase.id}>
                        <p>{purchase.id}.</p>
                        <div className="customer-name">{purchase.name}</div>
                        <div className="other-purchase-details">
                        <div className="product-bought">{purchase.item}</div>
                        <div className="paid">{purchase.paid}</div>
                        <div className="dispatched">{purchase.dispatched}</div>
                        <div className="delivered">{purchase.delivered}</div>
                        <div className="returned">{purchase.returned}</div>
                        </div>
                       
                    </div>
                             ))}
                </div>
        </div>
            </div>
           
        </div>
     );
}
 
export default AdminPage;