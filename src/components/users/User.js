import React, {useContext} from 'react'
import AppContext from "../../context/app-context";
import AddPaymentForm from "./AddPaymentForm"
import UserTxList from "./UserTxList"

const User = ({ user }) => {
    const {usersDispatch} = useContext(AppContext)

    const bal = user.tx.map((transaction) => Number(transaction.amount))
        .reduce((accumulator, currentVal) => accumulator + currentVal, 0)

    return (
        <>
            <h3>{user.name}</h3>
            <p>{user.phoneNum}</p>
            <p>Balance:{bal}</p>
            <AddPaymentForm id={user.id}/>
            <UserTxList
                tx={user.tx}
            />
            <button onClick={() => usersDispatch({type: 'RMV_USER', id: user.id})}>remove user</button>
        </>
    )
}

export { User as default }