import * as React from 'react';
import { Text, View ,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  const [value, onChangeText] = React.useState('Write your stories');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
      <Text>ReadScreen!</Text>
    </View>
  );
}

function SettingsScreen() {
  const [value, onChangeText] = React.useState('Write your stories');
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <TextInput
      style={{ height: 100,width :200, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
      <Text>WriteScreen!</Text>
      <Button title = "submit your story"/>
    </View>
  );
}
const Tab = createBottomTabNavigator();
function StackScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="WriteScreen" component={HomeScreen} />
      <Tab.Screen name="ReadScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
