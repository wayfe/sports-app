import React, {useContext, useState} from 'react';
import AppContext from "../../context/app-context"
import { v4 as uuid }from 'uuid'

const AddPaymentForm = ({id}) => {
    const {usersDispatch} = useContext(AppContext)

    const [amount, setAmount] = useState("")
    const [note, setNote] = useState("")

    const addPayment = (e) => {
        e.preventDefault()
        const tx = {
            amount,
            note,
            date: Date(),
            txid: uuid()
        }
        usersDispatch({
            type: 'ADD_TX',
            userId: id, 
            tx
        })
        console.log(tx, id)
        setAmount("")
        setNote("")
    }

    return (
        <div>
            <form onSubmit={addPayment} >
                <p>add payment:</p>
                <input placeholder="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <input placeholder="note" value={note} onChange={(e) => setNote(e.target.value)} />
                <button>add payment</button>
            </form>
        </div>
    )
}

export {AddPaymentForm as default}