import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { LoginConnector } from './connectors/LoginConnector';
import { Main } from "./modules/Main";
import { NewsDetails } from "./modules/NewsDetails";
import { RootStoreContext } from "./stores/RootStore";


export const Router = observer(() => {
    const rootStore = useContext(RootStoreContext)
    switch (rootStore.routerStore.screen) {
        case 'Main':
            return <Main />
        case 'NewsDetails':
            return <NewsDetails />
        case 'Login':
            return <LoginConnector />
        default:
            return <LoginConnector />
    }
})