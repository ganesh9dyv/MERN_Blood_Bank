import React from 'react'
import {BiDonateBlood,BiUserCircle} from 'react-icons/bi'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
const Header = () => {
    const {user}=useSelector(state=>state.auth);
    const navigate=useNavigate();
    // logout handler
    const handleLogout=()=>{
        localStorage.clear();
        toast("Logout SuccessFully");
        navigate('/login');
}  
    return (
    <>
        <nav className='navbar'>
            <div className='container-fluid'>
                <div className='navbar-brand'>
                    <BiDonateBlood color='red'/>Blood Bank App
                </div>
                <ul className='navbar-nav flex-row'>
                    <li className='nav-item mx-3'>
                        <p className='nav-link'><BiUserCircle/>WelCome {user?.name} !</p>
                    </li>
                    <li className='nav-item mx-3'>
                        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header