import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { RouteComponentProps } from 'react-router';
import { TabBar } from '../../ui/shared/TabBar';
import { TopBar } from '../../ui/shared/TopBar';

const styles = StyleSheet.create({ main: { flexDirection: 'column', flex: 1 } })

interface Props extends RouteComponentProps {}

const Content: React.FC<Props> = ({history, match: { path }}) => {
    return (
        <View style={styles.main}>
            <TopBar />
                <View>
                    <Text>Content View</Text>    
                </View>
            <TabBar
                onEventsPress={() => history.push('/events')}
                onNewsPress={() => history.push('/news')}
            />
        </View>
    )
}

export default Content