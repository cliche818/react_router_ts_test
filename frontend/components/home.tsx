import * as React from 'react'

interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
    public render (): JSX.Element {
        return (
            <div>
                <p>This is the Home page.</p>
                <a href="/about">About link</a>
            </div>
        )
    }
}
