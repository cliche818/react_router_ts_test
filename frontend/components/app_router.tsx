import * as React from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';
import About from './about';
import Home from './home';

interface Props {
}

interface State {
}


export default class AppRouter extends React.Component<Props, State> {
    public return(): JSX.Element {
        return (
            <HashRouter>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}
