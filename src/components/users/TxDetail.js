import React from 'react'

const TxDetail = ({tx}) => {
    return (
        <>
            <p>amount: {tx.amount}</p>
            <p>note: {tx.note}</p>
            <p>date {tx.date}</p>
        </>
    )
}

export {TxDetail as default}