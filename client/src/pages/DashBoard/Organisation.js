import React,{useEffect,useState} from 'react'
import Layout from '../../components/shared/Layout/Layout'
import API from '../../services/API'
import moment from 'moment'
import { useSelector } from 'react-redux'

const Organisation = () => {
  const {user}=useSelector(state=>state.auth)
  const [data,setData]=useState([])
  //find donar records
  const getOrganisation=async ()=>{
    try{
        if(user?.role==='donar'){
            const {data}=await API.get('/inventory/get-organisations')
            console.log(data);
            if(data?.success){
                setData(data?.organisations)
             }
        }else if(user?.role==='hospital'){
            const {data}=await API.get('/inventory/get-organisations-for-hospital')
            console.log(data);
            if(data?.success){
                setData(data?.organisations)
            }
        }
      
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getOrganisation();
  },[user])
  return (
    <>
    <Layout>
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>

          {data?.map((record)=>(
            <tr key={record._id}>
              <td>{record.organisationName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A') }</td>
            </tr>
          ))}
           
        </tbody>
      </table>
      </div>
    </Layout>
    </>
  )
}


export default Organisation