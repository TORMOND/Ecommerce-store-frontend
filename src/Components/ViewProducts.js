import '../Pages/Admin.css'
import {  useRef, useState } from 'react';

const ViewProducts = () => {
    const [searchProductDetails, setSearchProductDetails] = useState('')
    const fileInput = useRef()
    const [show, setShow] = useState(false);
    const popup =useRef()
    // const { inputImage, setInputImage } = useState(null)
    
    const [purchases, setPurchases] = useState([
        {id:1, name:"Victor Monderu", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:2, name:"Victor Monderu", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:3, name:"Jane Njeri", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:4, name:"John Doe", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:5, name:"Aisha Hamisi", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:6, name:"Ann", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:7, name:"Maureen", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:8, name:"Victor Monderu", item:"iPhone 13",price: 1099 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false},
        {id:9, name:"Victor Monderu", item:"iPhone 14",price: 1699 , paid:"confirmed", dispatched:"confirmed", delivered:"confirmed", returned:false}
    ])

    const handleSearch = purchases.filter(purchase=>   
        Object.values(purchase).join('').toLowerCase().trim().includes(searchProductDetails)
        )
        
    const purchasesToDisplay = searchProductDetails ? handleSearch : purchases;  

    const closePopup = ()=>{
        setShow(false)
        localStorage.removeItem('selectedImage')
    }
    return ( 

       
    <div id="container">
        <div className="nav-bar">
            <h3>Welcome Back, Victor</h3>

            <div className="nav-bar-section-2">
                <div className="search-bar">
                    <input 
                    type="text"
                    value={searchProductDetails}
                    placeholder='search'
                    onChange={e=>setSearchProductDetails(e.target.value.toLocaleLowerCase())}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>

                <div className="user-profile">
                    <img src="" alt="" />
                </div>

            </div>
        
            
        </div>
       <div className="stage-check-selection">
       <div className='more-headers'>
                        <h3>All</h3>
                        <h3>Dispatched</h3>
                        <h3>Delivered</h3>
                        <h3>Returned</h3>
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
                {purchasesToDisplay && purchasesToDisplay.map((purchase, key)=>(
                <div className="customer-purchase-information" key={purchase.id}>
                
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
     );
}
 
export default ViewProducts;