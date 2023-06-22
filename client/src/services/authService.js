export const handleLogin=(e,email,password,role)=>{
    e.preventDefault();
    try{
        console.log("Login",e,email,password,role);
    }catch(error){
        console.log(error);
    }
}
export const handleRegister=(e,name,role,email,password,organisationName,hospitalName,website,address,phone)=>{
    e.preventDefault();
    try{
        if(!role || !email || !password || !(organisationName || hospitalName || name ) || !website || !address || !phone) return alert("All fields are required");
        console.log("Login",e,name,role,email,password,organisationName,hospitalName,website,address,phone);
    }catch(error){
        console.log(error);
    }
}