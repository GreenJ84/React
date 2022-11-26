import React from "react";
import { Route, Routes } from "react-router-dom";

import AllQuotes from './views/pages/AllQuotes'
import NewQuote from './views/pages/NewQuote'
import QuoteDetail from './views/pages/QuoteDetail'
import NotFound from './views/pages/NotFound'
import NoQuotesFound from "./views/components/quotes/NoQuotesFound";

function App() {
  return (

    <Routes >
      <Route path='/' element={<NoQuotesFound />}/>
      <Route path='/quotes' element={<AllQuotes />}/>
      <Route path='/quotes/:quoteId' element={<QuoteDetail />}/>
      <Route path='/newQuote' element={<NewQuote />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>

  );
}

export default App;
