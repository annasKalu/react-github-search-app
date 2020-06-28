import React from 'react';
import '../Styles/App.css';
import Navbar1 from './Layout/navbar';
import User from './Users/user';
import { BrowserRouter as MyRouter, Switch, Route } from 'react-router-dom';
import Alert from './Layout/alert';
import About from './Pages/about';
import GithubState from '../context/github/GithubState';
import AlertState from '../context/Alert/AlertState';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';





const App = () => {


  // async componentDidMount() {

  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   console.log(res.data);

  //   this.setState({ users: res.data, loading: false })
  // }






  //const { users, user, loading, repos } = this.state

  return (
    <GithubState>

      <AlertState>

        <MyRouter>

          <div className="App">
            <div>
              <Navbar1 />
            </div>

            <div className="container">
              <Alert />

              <Switch>

                <Route exact path='/' component={Home} />

                {/* second router page*/}
                <Route exact path='/about' component={About} /> {/*exact: is used to make sure that only the exact path is returned */}

                {/* third router page*/}
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
              {/* <About /> */}

            </div>
          </div>

        </MyRouter>
      </AlertState>
    </GithubState>

  );

}

export default App;
