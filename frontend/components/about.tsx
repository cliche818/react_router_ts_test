import * as React from 'react'

interface Props {}

interface State {}

export default class About extends React.Component<Props, State> {
    public render (): JSX.Element {
        return (
            <div>
                <p> This is the ABOUT page! </p>
                <a href="/" >Home link</a>
            </div>
        )
    }
}
