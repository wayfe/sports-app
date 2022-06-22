import React from 'react'
import TxDetail from './TxDetail'

const UserTxList = ({tx}) => {
    return tx.map((tx) => (
        <TxDetail 
            tx={tx}
            key={tx.txid}
        />
    ))
}

export {UserTxList as default}