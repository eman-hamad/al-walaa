import React, { Component, Suspense } from 'react';
import './convertion/App.css'
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./container/Home/Home'));
const AuthVendor = React.lazy(()=> import('./container/Auth/auth-vendor'));
const AuthClient = React.lazy(()=> import('./container/Auth/auth-client'));
const Dropdown = React.lazy(()=> import('./components/Input/Dropdown'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/drop" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Dropdown {...props}/> </Suspense>)}/>
          <Route path="/auth-client" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <AuthClient {...props}/> </Suspense>)}/>
          <Route path="/auth-vendor" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <AuthVendor {...props}/> </Suspense>)}/>
          <Route path="/" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Home {...props}/> </Suspense>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
