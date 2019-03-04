import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DrawerActions, NavigationActions, NavigationScreenProps } from 'react-navigation';

const styles = StyleSheet.create({
    menuItem: {}
})
export default class DrawerScreen extends Component<NavigationScreenProps> {
  navigateToScreen = (route:string) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
      <View>
        <ScrollView>
          <View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Content')}>
                Home
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('About')}>
               About
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Contact')}>
              Contact
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
