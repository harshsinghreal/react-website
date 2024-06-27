import React from 'react'
import { FaRegWindowClose} from "react-icons/fa";
const Modal = ({onClose,isOpen,children}) => {
  return (
   <>{isOpen && (
      <>
        
    <div className='m-auto relative z-40 min-h-[200px] max-w-[80%] bg-white p-2'>
      <div className='flex justify-end'>
      <FaRegWindowClose onClick={onClose} className=' text-2xl '/>
      </div>
      {children}
    </div>
      <div  onClick={onClose} className='absolute top-0 z-30 backdrop-blur h-screen w-screen'/>
      </>
  
  )}</>
  )
}

export default Modal