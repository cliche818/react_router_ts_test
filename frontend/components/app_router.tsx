import * as React from 'react';
import {Route, BrowserRouter, HashRouter, Switch} from 'react-router-dom';
import About from './about';
import Home from './home';

interface Props {
}

interface State {
}


export default class AppRouter extends React.Component<Props, State> {
    public render(): JSX.Element {

        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
