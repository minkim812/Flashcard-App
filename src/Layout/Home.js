import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api";

export default function Home() {
  const history = useHistory();
  const [decks, setDecks] = useState([]);
  useEffect(() => {
      const abortController = new AbortController();
      listDecks()
      .then(setDecks)
      .catch(console.log("error"))
      return () => abortController.abort();

  }, [])
  console.log(decks);
  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      await deleteDeck(id);
      history.push("/");
    } else {
      history.push("/");
    }
  };
  return (
    <div>
      <button className="btn btn-secondary" onClick={() => history.push(`/decks/new`)}>Create Deck</button>
      <ul>
        {decks.map((deck, index) => (
        <div className="container" key={index}>
          <li key={deck.id}>
            <h3 className="card-title">{deck.name}</h3>
            <p>{deck.cards.length} cards</p>
            <p className="card-body">{deck.description}</p>
            <button className="btn btn-primary" onClick={() => history.push(`/decks/${deck.id}`)}>
              View
            </button>
            <button className="btn btn-secondary" onClick={() => history.push(`/decks/${deck.id}/study`)}>
              Study
            </button>
            <button className="btn btn-danger float-right" onClick={() => deleteHandler(deck.id)}>Delete</button>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}