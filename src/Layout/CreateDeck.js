import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api/index";

export default function CreateDeck() {
  const history = useHistory();
  const [newDeck, setNewDeck] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createDeck(newDeck);
    history.push(`/decks/${response.id}`);
  }
  function handleChange({target}){
    setNewDeck({
      ...newDeck,
      [target.name]:target.value
    })
  }
  function handleCancel(event) {
    event.preventDefault();
    history.push("/");
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>

      <form>
        <h1>Create Deck</h1>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Deck Name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Brief description of the deck"
            rows="5"
            required
            name="description"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}