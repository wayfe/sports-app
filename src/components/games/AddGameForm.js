import React, {useState, useContext} from 'react';
import AppContext from "../../context/app-context";
import { v4 as uuid } from 'uuid';

const AddGameForm = () => {
    const [game, setGame] = useState("")
    const [date, setDate] = useState("")
    const [address, setAddress] = useState("")
    const [price, setPrice] = useState("")
    const {gamesDispatch} = useContext(AppContext)

    const addGame = (e) => {
        e.preventDefault()
        gamesDispatch({
            type: 'ADD_GAME',
            game, date, id: uuid(), address, price
        })
        setGame("")
        setDate("")
        setAddress("")
        setPrice("")
    }

    return (
        <>
            <p>add game:</p>
                <form onSubmit={addGame}>
                    <input placeholder="game" value={game} onChange={(e) => setGame(e.target.value)}/>
                    <input placeholder="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    <input placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    <input placeholder="$0.00" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <button>add Game</button>
                </form>
        </>
    )
}

export {AddGameForm as default}