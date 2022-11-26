import React from "react";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
    <Route />{/* All Quotes Home - <AllQuotes /> */} 
    <Route />{/* Quote Detail - <QuoteDetail /> */}
    <Route />{/* New Quote - <NewQuote /> */}
    <Route />{/* Not Found - <NotFound /> */}
    <h1>New React-Redux</h1>
    </>
  );
}

export default App;
