import * as React from 'react';

interface IHomeTabProps {
    displayText: string;
    link: string;
}
class HomeTab extends React.Component<IHomeTabProps, {}> {
    constructor(props: IHomeTabProps) {
        super(props);
    }

    public render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href="#">{this.props.displayText}</a>
            </li>
        );
    }
}

export default HomeTab;