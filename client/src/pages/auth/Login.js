import React from 'react'
import Form1 from '../../components/shared/Form/Form'
// import InputType from '../../components/shared/Form/InputType'

const login = () => {
  return (
    <>
    <div className='row g-0'>
        <div className='col-md-8 form-banner'> 
            <img src='./assets/images/banner1.jpg' alt="LoginImage"/> 
        </div>
        <div className='col-md-4 form-container'> 
            <Form1 formTitle={'Login'} submitBtn={"Login"} formType={"login"}/>
        </div>
    </div>
    </>
  )
}

export default login