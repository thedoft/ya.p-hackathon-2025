import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import InitiativesPage from './InitiativesPage';
import InDevPage from './InDevPage';
import NotFoundPage from './NotFoundPage';

export default function Main() {

  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/social">
          <InDevPage title="Соцсети" />
        </Route>
        <Route path="/faq">
          <InDevPage title="Частые вопросы" />
        </Route>
        <Route path="/support">
          <InDevPage title="Поддержка" />
        </Route>
        <Route path="/news">
          <InDevPage title="Новости" />
        </Route>
        <Route path="/initiatives">
          <InitiativesPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </main>
  )
}
