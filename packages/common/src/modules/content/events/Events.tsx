import gql from 'graphql-tag';
import { History } from 'history';
import React from 'react';
import { Query } from 'react-apollo';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { EventsList } from './EventList';
import { UpcomingEventCard } from './UpcomingEventCard';

interface Props extends NavigationScreenProps {
    history?: History
}

const eventsQuery = gql` query AllEventsQuery { events { id title subtitle body imageURL date venue { name address placeID} } } `

const styles = StyleSheet.create({
    contentScroll: {
        flexDirection: 'column', height: '100%', flex: 1
    }
})

class Events extends React.Component<Props> {
    static navigationOptions = {
        title: 'Eventos',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };
    pushDetails = (id:string, title:string) => {
        if (this.props.navigation) { this.props.navigation.push('EventDetails', {id, title}) }
        else if (this.props.history) { this.props.history.push(`/event/${id}`)}
    }
    render() {
        return (
            <Query query={eventsQuery}>
                {({ loading, data, error }) => {
                    if (loading) { return <Text style={{marginTop:100}}>Loading</Text> }
                    if (!data.events.length) return <Text>No hay eventos que mostrar...</Text>
                    if (error) { console.log('ERROR: ', error)}
                    const upcoming = data.events[0]
                    const events = data.events.length > 1 ? data.events.slice(1) : null
                    if (events) return (
                        <View style={{width: '100%', height: '100%'}}>
                            <ScrollView style={styles.contentScroll}>
                            <UpcomingEventCard upcomingEvent={upcoming} pushDetails={this.pushDetails} />
                            <EventsList events={events} pushDetails={this.pushDetails} />
                            </ScrollView>
                        </View>
                    )
                }}
            </Query>        
        )
    }
}

export default Events