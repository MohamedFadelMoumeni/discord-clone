import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { firestore, auth, createUserProfileDocument } from './firebase/firebase';

import setCurrentUser from './redux/user/user.action';
import setLoading from './redux/loading/loading.action';
import HomePage from './pages/homepage/homepage.omponent';
import SignInPage from './pages/signin/signin.component';
import WithSpinner from './components/withSpinner/withSpinner.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectisLoading } from './redux/loading/loading.selectors';
import './App.css';

const HomePageWithSpinner = WithSpinner(HomePage);

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser, setLoading } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userReference = await createUserProfileDocument(userAuth);
        userReference.onSnapshot(async snapShot => {
          await setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()

          })
          await setLoading()



        })



      } else {
        setCurrentUser(userAuth);
      }


    })



  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser, isLoading } = this.props;
    return (
      <div className="app">
        <Switch>

          <Route exact path="/homepage" render={() => currentUser ? <HomePageWithSpinner isLoading={isLoading} /> : <Redirect to="/" />} />
          <Route exact path="/" render={() => currentUser ? <Redirect to="/homepage" /> : <SignInPage />} />
        </Switch>

      </div>
    )

  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  isLoading: selectisLoading(state)
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setLoading: () => dispatch(setLoading())

})
export default connect(mapStateToProps, mapDispatchToProps)(App);
