import React from 'react';
import { RouteComponentProps } from 'react-router';
import NewsComponent from './News';
interface Props extends RouteComponentProps {
}

class News extends React.Component<Props> {
    pushDetails = (id:string, title:string) => {
        this.props.history.push(`/news/${id}`)
    }
    render () {
        return ( <NewsComponent pushDetails={this.pushDetails} />)
    }
}

export default News
