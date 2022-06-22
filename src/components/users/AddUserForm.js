import React, {useState, useContext} from 'react';
import AppContext from "../../context/app-context";
import { v4 as uuid } from 'uuid';

const AddUserForm = () => {
    const [name, setName] = useState("")
    const [phoneNum, setPhoneNum] = useState("")
    // const [id, setId] = useState(uuid())
    const {usersDispatch} = useContext(AppContext)

    const addUser = (e) => {
        e.preventDefault()
        usersDispatch({
            type: 'ADD_USER',
            name, phoneNum, id: uuid()
        })
        setName("")
        setPhoneNum("")
        // setId(uuid())
    }

    return (
        <>
            <p>add user:</p>
                <form onSubmit={addUser}>
                    <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input placeholder="phone number" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}/>
                    <button>add user</button>
                </form>
        </>
    )
}

export {AddUserForm as default}