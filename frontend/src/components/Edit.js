import {React, useEffect, useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import MyTextField from './forms/MyTextField';
import {useForm} from 'react-hook-form';
import MyselectField from './forms/MySelectField';
import AxiosInstance from './Axios';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const MyParam = useParams()
  const MyId = MyParam.id 
  const [loading, setLoading] = useState(true)

  const GetData = () => {

    AxiosInstance.get(`user/${MyId}`).then((res) => {
        console.log(res.data)
        setValue('username',res.data.username)
        setValue('email',res.data.email)
        setValue('role',res.data.role)
        setValue('phone',res.data.phone)

        setLoading(false)
    })
  }

  useEffect(() => {
    // console.log(MyId)
    GetData();
  }, [])

  const navigate = useNavigate()
  const defaultValues  = {
    username: '',
    email: '',
    role: '',
    phone: ''
  }


  const {handleSubmit, setValue, control} = useForm()
  const submission = (data) =>{
    AxiosInstance.put(`user/${MyId}/`,{
        username: data.username,
        email: data.email,
        role: data.role,
        phone: data.phone,

    })
    .then(() => {
        navigate(`/`)
    })
  }
  return (
    <div>
        <form onSubmit={handleSubmit(submission)}>
        <Box sx={{display:'flex', width:'100%', backgroundColor:'#00003f', marginBottom:'10px'}}>
            <Typography sx={{marginLeft:'20px', color:'#fff'}}>
                Create Records
            </Typography>

        </Box>

        <Box sx={{display:'flex', width:'100%', height: '100%', boxShadow:3, padding:4, flexDirection:'column', marginBottom:'40px'}}>
            <Box sx={{display:'flex', justifyContent:'flex-start'}}>
                <MyTextField
                label="Username"
                name="username"
                control={control}
                placeholder="Enter a User Name"
                width={'20%'}
                />

            </Box>

            <Box sx={{display:'flex', justifyContent:'flex-start'}}>
                <MyTextField
                label="Email"
                name="email"
                control={control}
                placeholder="Enter a email id"
                width={'20%'}
                />

            </Box>

            <Box sx={{display:'flex', justifyContent:'flex-start'}}>
                <MyselectField
                label="Role"
                name="role"
                control={control}
                placeholder="Select a role"
                width={'20%'}
                />

            </Box>

            <Box sx={{display:'flex', justifyContent:'flex-start', marginBottom:'40px'}}>
                <MyTextField
                label="Phone"
                name="phone"
                control={control}
                placeholder="Enter contact number"
                width={'20%'}
                />

            </Box>

            <Box sx={{display:'flex', justifyContent:'flex-start', width:'10%'}}>
                <Button variant="contained" type="submit" sx={{width:'100%'}}>
                    Submit
                </Button>
            </Box>

        </Box>
        

        </form>

    </div>
  )
}

export default Edit