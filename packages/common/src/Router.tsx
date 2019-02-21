import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Main } from "./modules/Main";
import { NewsDetails } from "./modules/NewsDetails";
import { RouterStoreContext } from "./store/RouterStore";


export const Router = observer(() => {
    const routerStore = useContext(RouterStoreContext)
    return routerStore.screen === 'Main' ? <Main /> : <NewsDetails />
})