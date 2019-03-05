import React from 'react';
import { StyleSheet } from 'react-native';
import { RouteComponentProps } from 'react-router';
import EventsComponent from './Events';

interface Props extends RouteComponentProps {
}

const styles = StyleSheet.create({
    contentScroll: { flexDirection: 'column', height: '100%', flex: 1 },
    activity: {flexDirection: 'column', flex: 1, height: '100%', justifyContent: 'center'}
})

class Events extends React.Component<Props> {
    pushDetails = (id:string, title:string) => {
        this.props.history.push(`/event/${id}`)
    }
    render() {
        return ( <EventsComponent pushDetails={this.pushDetails} />)
    }
}

export default Events