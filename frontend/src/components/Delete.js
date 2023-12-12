import {React, useEffect, useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import AxiosInstance from './Axios';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
  const MyParam = useParams()
  const MyId = MyParam.id 
  
  const [myData, setMyData] = useState()
  const [loading, setLoading] = useState(true)

  const GetData = () => {

    AxiosInstance.get(`user/${MyId}`).then((res) => {
        setMyData(res.data)
        console.log(res.data)
        setLoading(false)
    })
  }



  useEffect(() => {
    // console.log(MyId)
    GetData();
  }, [])

  const navigate = useNavigate()
  const submission = (data) =>{
    AxiosInstance.delete(`user/${MyId}/`)
    .then(() => {
        navigate(`/`)
    })
  }
  return (
    <div>
        { loading? <p>Lading Data...</p> :
        <div>
        <Box sx={{display:'flex', width:'100%', backgroundColor:'#00003f', marginBottom:'10px'}}>
            <Typography sx={{marginLeft:'20px', color:'#fff'}}>
                Delete User: {myData.username}
            </Typography>

        </Box>

        <Box sx={{display:'flex', width:'100%', height: '100%', boxShadow:3, padding:4, flexDirection:'column', marginBottom:'40px'}}>
            
            <Box sx={{display:'flex', justifyContent:'flex-start', width:'100%', marginBottom:'40px'}}>
                <p>Are you sure you want to delete the user: {myData.username}</p>
            </Box>

            <Box sx={{display:'flex', justifyContent:'flex-start', width:'10%', marginBottom:'40px'}}>
                <Button variant="contained" onClick={submission} sx={{width:'100%'}}>
                    Delete User
                </Button>
            </Box>

        </Box>
        </div>
    }
    </div>
  )
}


export default Delete