import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './home'
import About from './about'

interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
    public render (): JSX.Element {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </div>
        )
    }
}
