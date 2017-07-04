import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './Container';
import Sidebar from './Partials/Sidebar';
import TodoApp from './Components/TodoApp';
import TicTacToe from './Components/TicTacToe';
import AddUser from './Container/AddUser';
import DisplayUser from './Container/DisplayUser';
import store from './store';

const App = () =>
  <Provider store={store}>
    <Router>
      <Container>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Switch>
            <Route path="/todo" exact component={TodoApp} />
            <Route path="/game" exact component={TicTacToe} />
            <Route path="/addUser" exact component={AddUser} />
            <Route path="/displayUser" exact component={DisplayUser} />
            <Route component={() => <h1>Not found</h1>} />
          </Switch>
        </div>
      </Container>
    </Router>
  </Provider>;

export default App;
