import { observer } from 'mobx-react-lite';
import React, { useContext } from "react";
import { Query } from 'react-apollo';
import { Text, View } from 'react-native';
import { LoginConnector } from '../connectors/LoginConnector';
import { meQuery } from '../controllers/AuthController';
import { RootStoreContext } from '../stores/RootStore';
import Base from './Base';

export const Main: React.FC = observer(() => {
    const rootStore = useContext(RootStoreContext)
    return (
        <Query query={meQuery}>
            {
                ({ loading, data }) => {
                    if (!loading) {
                        if (data.me.user) {
                            rootStore.userStore.CurrentUser = data.me.user
                            return <Base />
                        } else { 
                            rootStore.userStore.CurrentUser = null
                            return <LoginConnector /> 
                        }
                    } else return (
                        <View><Text>Loading</Text></View>
                    )
                }
            }
        </Query>
    )
})