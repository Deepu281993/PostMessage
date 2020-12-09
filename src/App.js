import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '@dashboard/dashboard';
import AddPost from '@addPost/addPost';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AddPost" component={AddPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
