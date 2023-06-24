import React from 'react'
import Form1 from '../../components/shared/Form/Form'
import { useSelector } from 'react-redux';
import Spinner from '../../components/shared/Spinner';
import { toast } from 'react-toastify';

const Register = () => {
  const { loading, error } = useSelector(state=>state.auth);
  return (
    <>
    {error && <span>{toast.error(error)}</span>}
    {loading?(<Spinner/>):(<div className='row g-0'>
        <div className='col-md-8 form-banner'> 
            <img src='./assets/images/banner2.jpg' alt="RegisterImage"/> 
        </div>
        <div className='col-md-4 form-container'> 
            <Form1 formTitle={'Register'} submitBtn={"Register"} formType={'register'}/>
        </div>
    </div>)}
    
    </>
  )
}

export default Register