import React from 'react'
import {useHistory} from "react-router-dom";

export default function CardForm({ deck, card, setCard, handleSave}) {
  const history = useHistory();

  function handleDone(){
    history.push(`/decks/${deck.id}`)
  }
  function changeFront(event){
    setCard({ ...card, front: event.target.value })
  }
  function changeBack(event){
    setCard({ ...card, back: event.target.value })
  }
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Front</label>
          <textarea
            type="text" className="form-control" 
            id="front"
            placeholder="Card Front"
            value={card.front}
            rows="3"
            onChange={changeFront}/> 
        </div>
      <div className="mb-3">
        <label className="form-label">Back</label>
          <textarea className="form-control" id="back" 
          placeholder="Card Back"
          value={card.back}
          rows="3"
          onChange={changeBack}
          />
      </div>
        <button type="done" className="btn btn-secondary" onClick={handleDone}>Done</button>
        <button type="submit" className="btn btn-primary" onClick={handleSave}>Save</button>
    </form>
  );
}