import { userLogin, userRegister } from '../redux/features/auth/authActions';
import store from '../redux/store'

export const handleLogin=(e,email,password,role)=>{
    e.preventDefault();
    try{
        if(!role || !email || !password)  return alert("All fields are required");

        store.dispatch(userLogin({email,password,role}));
    }catch(error){
        console.log(error);
    }
}
export const handleRegister=(e,name,role,email,password,organisationName,hospitalName,website,address,phone)=>{
    e.preventDefault();
    try{
       if(!role || !email || !password || !website || !address || !phone) return alert("All fields are required");
       if(((role==='donar' || role==='admin') && !name))return alert("All fields are required");
       if(role==='organisation' && !organisationName)return alert("All fields are required");
       if(role==='hospital' && !hospitalName)return alert("All fields are required");
       // console.log("Login",e,name,role,email,password,organisationName,hospitalName,website,address,phone);
       store.dispatch(userRegister({name,role,email,password,organisationName,hospitalName,website,address,phone}));
    }catch(error){
        console.log(error);
    }
}