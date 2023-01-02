import './Admin.css'
import {  useRef, useState } from 'react';
import SideBar from '../Components/sidebar';
// import PopUps from '../Components/popups';
import AddProduct from '../Components/AddProduct';
import ViewProducts from '../Components/ViewProducts';
import Purchases from '../Components/Purchases';
const AdminPage = () => {
    const [searchCustomerDetails, setSearchCustomerDetails] = useState('')
    const fileInput = useRef()
    const [show, setShow] = useState(false);
    const popup =useRef()
    const [displayPurchases, setDisplayPurchases] =useState(true)
    const purchaseRef = useRef()

    const [displayProducts, setDisplayProducts] = useState(false)
    const productsRef =useRef()
    // const { inputImage, setInputImage } = useState(null)
    
  
  
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

            {displayProducts &&
            <ViewProducts ref={productsRef} />
            }
            
            {displayPurchases &&
            <Purchases ref={purchaseRef} /> 
            }
     
            </div>
           
        </div>
     );
}
 
export default AdminPage;