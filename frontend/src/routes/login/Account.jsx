import DoctorFormComponent from '../../components/DoctorFormComponent'
import PatientFormComponent from '../../components/PatientFormComponent'
import {useState, useEffect} from 'react'
import useCustomAxios from '../../auth/useCustomAxios'
import { useAuthContext } from '../../auth/AuthContext'


export default function Account(props){
    const {user} = useAuthContext()

    useEffect(()=> console.log(`ACCOUNT user ${JSON.stringify(user)}`), [])

    return(
    <>
    {user.isStaff
        ? <DoctorFormComponent user={user}/>
        : <PatientFormComponent user={user}/>
    }
    </>
    )
}