const Contacts = ({togglePopup}) => {
    return ( 
        <div id="contacts">
            <div className="close-section">
            <button onClick={togglePopup}  className='close-popup'> X</button>
            </div>
            <h3>victormonderu@gmail.com</h3>
        </div>
     );
}
 
export default Contacts;