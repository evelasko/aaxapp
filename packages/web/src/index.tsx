// import React from 'react';
// import ReactDOM from 'react-dom';

// const title:string = 'My Bad!'

// ReactDOM.render(
//     <div>{title}</div>,
//     document.getElementById('app')
// )

import { AppRegistry } from 'react-native';
import App from './App';
import * as serviceWorker from './serviceWorker';

// register the app
AppRegistry.registerComponent('App', () => App)

AppRegistry.runApplication('App', {
    initalProps: {},
    rootTag: document.getElementById('root')
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
