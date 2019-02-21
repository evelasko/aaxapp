import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { RouterStoreContext } from '../store/RouterStore';

interface Props {}

export const Main: React.FC<Props> = observer(() => {
    const routerStore = React.useContext(RouterStoreContext)
    return (
        <View>
            <Text>Main aaXapp Page</Text>
            <Button title="view details" onPress={() => {
                routerStore.screen = 'NewsDetails'
            }} />
        </View>
    )
})