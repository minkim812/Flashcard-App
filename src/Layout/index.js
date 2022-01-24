import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "./CreateDeck";
import EditDeck from "./EditDeck";
import EditCard from "./EditCard";
import AddCard from "./AddCard";
import Home from "./Home";
import Study from "./Study";
import ViewDeck from "./ViewDeck";

import { Switch, Route } from "react-router-dom";

function Layout() {
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState([]);
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study deck={deck} setDeck={setDeck} />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck deck={deck} setDeck={setDeck} />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard
              deck={deck}
              setDeck={setDeck}
              card={card}
              setCard={setCard}
            />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard
              deck={deck}
              setDeck={setDeck}
              card={card}
              setCard={setCard}
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;