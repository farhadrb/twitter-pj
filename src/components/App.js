import React from 'react';
import Layout from './layout/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TweetByHashTag from '../pages/tweetByHashtag/TweetByHashTag'
import TweetByUser from '../pages/tweetByUser/TweetByUser'
import Home from '../pages/home/home';
import AuthPage from '../pages/Auth/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Fragment } from 'react';
const App = () => {
    return (
        <Fragment>

            <BrowserRouter>
                <Switch>
                    <Route path={'/login'} component={AuthPage} />
                    <Route path={'/'} render={() => {
                        return <Layout>
                            <Switch>
                                <Route exact path={'/'} component={Home} />
                                <Route path={'/hashtag/:hashtag'} component={TweetByHashTag} />
                                <Route path={'/users/:users'} component={TweetByUser} />
                            </Switch>
                        </Layout>
                    }} />
                </Switch>
            </BrowserRouter>
            <ToastContainer/>
        </Fragment>
    );
}

export default App;