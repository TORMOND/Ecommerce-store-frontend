import {forwardRef} from 'react'

const CreateProduct = forwardRef(function MyInput(props,  fileInput) {
    const { onFileSelected} = props;
    return (
        <>
          <div>
                <input type="file" name="" id="" className='fileInput' onChange={onFileSelected} ref={fileInput} />
                 <p className='bg-purple-500 text-white flex flex-col gap-2.5 py-5 cursor-pointer rounded-sm'>
              Create Product
              {/* <FontAwesomeIcon icon={ faCirclePlus} /> */}
            </p>     
                </div>
       
 
      </>
    );
  });

export default CreateProduct
