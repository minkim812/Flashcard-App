import React from "react";
import {useHistory} from "react-router-dom";


export default function NotEnough({deck}){
    const history = useHistory();
    
    function addCardHandler() {
        history.push(`/decks/${deck.id}/cards/new`);
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/">{deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>
            <h1>Study: {deck.name}</h1>
            <h3>Not enough cards.</h3>
            <p>You need at least 3 cards in a deck to study</p>
            <button type="button" className="btn btn-primary" onClick={addCardHandler}>Add Card</button>
        </div>
    )

}