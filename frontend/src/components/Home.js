import {React, useEffect, useState} from 'react'
import AxiosInstance from './Axios'
import { useMemo } from 'react';
import {
  MaterialReactTable,
} from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

import {Link} from 'react-router-dom';




const Home = () => {
  
  const [myData, setMyData] = useState()
  const [loading, setLoading] = useState(true)

  const GetData = () => {

    AxiosInstance.get(`user/`).then((res) => {
        setMyData(res.data)
        console.log(res.data)
        setLoading(false)
    })
  }

  useEffect(() => {
    GetData();
  }, [])



  //nested data is ok, see accessorKeys in ColumnDef below
  
  
    //should be memoized or stable
    const columns = useMemo(
      () => [
        {
          accessorKey: 'username', //access nested data with dot notation
          header: 'Username',
          size: 150,
        },
        {
          accessorKey: 'email',
          header: 'Email',
          size: 150,
        },
        {
          accessorKey: 'role', //normal accessorKey
          header: 'Role',
          size: 200,
        },
        {
          accessorKey: 'phone',
          header: 'Phone',
          size: 150,
        },
      ],
      [],
    );
  
    
  
  return (
    <div>
        {   loading ? <p>Loading data....</p> :
             <MaterialReactTable
             columns={columns}
             data={myData}
             enableRowActions
             renderRowActions={({row}) => (
               <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                    <IconButton color="secondary" component={Link} to={`edit/${row.original.id}`}>
                        <EditIcon />
                    </IconButton>

                    <IconButton color="error" component={Link} to={`delete/${row.original.id}`}>
                        <DeleteIcon />
                    </IconButton>
               </Box>
             )}
           />
        }
        
    </div>
  )
}

export default Home;