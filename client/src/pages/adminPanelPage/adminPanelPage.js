import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getAllBandUsers, getAllUsers} from '../../redux/slices/adminSlice'

const AdminPanelPage = () => {

  const {allUsers,bannedUsers,isLoading,error} = useSelector((state)=>state.admins)

  const dispatch = useDispatch()

  useEffect(()=>{
       dispatch(getAllUsers())
  },[])

    return (
        <div>
            
        </div>
    );
}

export default AdminPanelPage;
