import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { EventsList } from './EventList';
import { UpcomingEventCard } from './UpcomingEventCard';

interface Props {
    pushDetails: (id:string, title:string) => void
    per?: string | null
    headerHeight?: number | null
    appState?: any
}

const eventsQuery = gql` query AllEventsQuery ($per:String)
    { eventsMobile (per: $per)
        { id title subtitle body imageURL date venue { name address placeID} } 
    }
`

const styles = StyleSheet.create({
    contentScroll: { flexDirection: 'column', height: '100%', flex: 1 },
    activity: {flexDirection: 'column', flex: 1, height: '100%', justifyContent: 'center'}
})

class EventsComponent extends React.Component<Props> {
    render() {
        const { pushDetails, per = null, headerHeight = 0 } = this.props
        return (
            <Query query={eventsQuery} variables={{ per }} errorPolicy="all">
                {({ loading, data, error, refetch }) => {
                    if (loading) { return (
                        <View style={styles.activity}>
                            <ActivityIndicator size="small" color="#C77139" />
                        </View>
                    )}
                    if (error) { 
                        console.log('ERROR WHILE FETCHING EVENTS: ', JSON.stringify(error))
                        return <View style={{marginTop: 50}}><Text>Lo sentimos, ha ocurrido un error al obtener la información...</Text></View>
                    }
                    if (!data.eventsMobile || !data.eventsMobile.length) return <Text>No hay eventos que mostrar...</Text>
                    if (this.props.appState) {
                        this.props.appState.addEventListener('change', (nextState:any) => {
                            if (nextState === 'active') { refetch() }
                        })
                    }
                    const upcoming = data.eventsMobile[0]
                    const events = data.eventsMobile.length > 1 ? data.eventsMobile.slice(1) : null
                    if (events) return (
                        <View style={{width: '100%', height: '100%', borderTopWidth: 1, borderTopColor: 'red'}}>
                            <ScrollView style={{...styles.contentScroll, paddingTop: headerHeight || 0}}>
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