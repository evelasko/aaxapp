import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { EventsList } from './EventList';
import { UpcomingEventCard } from './UpcomingEventCard';

interface Props {
    pushDetails: (id:string, title:string) => void
}

const eventsQuery = gql` query AllEventsQuery { events { id title subtitle body imageURL date venue { name address placeID} } } `

const styles = StyleSheet.create({
    contentScroll: { flexDirection: 'column', height: '100%', flex: 1 },
    activity: {flexDirection: 'column', flex: 1, height: '100%', justifyContent: 'center'}
})

class EventsComponent extends React.Component<Props> {
    render() {
        const { pushDetails } = this.props
        return (
            <Query query={eventsQuery}>
                {({ loading, data, error }) => {
                    if (loading) { return (
                        <View style={styles.activity}>
                            <ActivityIndicator size="small" color="#C77139" />
                        </View>
                    )}
                    if (!data.events.length) return <Text>No hay eventos que mostrar...</Text>
                    if (error) { 
                        console.log('ERROR: ', error)
                        return <Text>Lo sentimos, ha ocurrido un error al obtener la información...</Text>
                    }
                    const upcoming = data.events[0]
                    const events = data.events.length > 1 ? data.events.slice(1) : null
                    if (events) return (
                        <View style={{width: '100%', height: '100%'}}>
                            <ScrollView style={styles.contentScroll}>
                            <UpcomingEventCard upcomingEvent={upcoming} pushDetails={pushDetails} />
                            <EventsList events={events} pushDetails={pushDetails} />
                            </ScrollView>
                        </View>
                    )
                }}
            </Query>        
        )
    }
}

export default EventsComponent