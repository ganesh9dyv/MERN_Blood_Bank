import React from 'react'
import InputType from '../../components/shared/Form/InputType'

const login = () => {
  return (
    <>
    <div className='row'>
        <div className='col-md-8 form-banner'> 
            <img src='./assets/images/banner1.jpg' alt="LoginImage"/> 
        </div>
        <div className='col-md-4 form-container'> 
   <form>
    <InputType labelText={'E-Mail'} labelFor={'EMail'} inputType={'email'} name={'email'}/>
    <InputType labelText={'Password'} labelFor={'Password'} inputType={'password'} name={'emailpassword'}/>
  
    
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
    </div>
    </>
  )
}

export default login