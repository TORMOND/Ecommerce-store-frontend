import './Admin.css'
import {  useRef, useState } from 'react';
import SideBar from '../Components/sidebar';
// import PopUps from '../Components/popups';
import AddProduct from '../Components/AddProduct';
const AdminPage = () => {
    const [searchCustomerDetails, setSearchCustomerDetails] = useState('')
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
  
   const createProject =()=>{
     fileInput.current.click()
   }


   const onFileSelected =(event)=>{
    const files = event.target.files;
    let filename = files[0].name;
    const fileReader = new FileReader();
    
    console.log(files);
    fileReader.addEventListener('load', () =>{     
      const imageUrl = fileReader.result;
    //   setInputImage(imageUrl)
     console.log(imageUrl);
      console.log(filename); 
      localStorage.setItem('selectedImage', imageUrl)
      setShow(true)
    })
    
    fileReader.readAsDataURL(files[0]);
    const image = files[0];
    console.log(image);
          }

    
    const handleSearch = purchases.filter(purchase=>   
        Object.values(purchase).join('').toLowerCase().trim().includes(searchCustomerDetails)
        )
        
    const purchasesToDisplay = searchCustomerDetails ? handleSearch : purchases;  

    const closePopup = ()=>{
        setShow(false)
        localStorage.removeItem('selectedImage')
    }
    return ( 
        <div className="AdminPage">
            {show &&<div id="popups" ref={popup}>
                <AddProduct closePopoup={closePopup} 
                />
            </div>
            }
            <div id="wrapper">
            <div className="side-menu">
                <SideBar onFileSelected={onFileSelected} createProject={createProject} fileInput={fileInput} />
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
                        onChange={e=>setSearchCustomerDetails(e.target.value.toLocaleLowerCase())}
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
            </div>
           
        </div>
     );
}
 
export default AdminPage;