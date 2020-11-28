
import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import
MaterialIcons
from 'react-native-vector-icons/MaterialIcons';
import
Feather
from 'react-native-vector-icons/Feather';

import
AntDesign
from 'react-native-vector-icons/AntDesign';
//AntDesign
import FirstPage from './screens/FirstPage';
//import SecondPage from './pages/SecondPage';
import ThirdPage from './screens/ThirdPage';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}r>
      
      <Stack.Screen name="FirstPage" component={FirstPage}  />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
//       <Stack.Navigator initialRouteName="FirstPage">
//         <Stack.Screen
//           name="FirstPage"
//           component={FirstPage}
//           options={{
            
//             title: 'First Page', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#FF7733', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//             headerRight: ({navigation}) =>
//              <TouchableOpacity onPress={()=>navigation.navigate('ThirdPage')}> 
//              <MaterialCommunityIcons
//             name="map"
//            style={{fontSize:40,marginRight:20,color:'white'}}/>
//            </TouchableOpacity>
//           }
         
//         }
       
//         />
//         {/* <Stack.Screen
//           name="SecondPage"
//           component={SecondPage}
//           options={{
//             title: 'Second Page', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         /> */}
//         <Stack.Screen
//           name="ThirdPage"
//           component={ThirdPage}
//           options={{
//             title: 'Third Page', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//       </Stack.Navigator>
 
  );
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="FirstPage"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={Home}
          options={{
            tabBarLabel: 'Active',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="assignment"
                color={color}
                size={size}
              />
            ),
          }}  />
           <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Completed',
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                name="checkcircleo"
                color={color}
                size={size}
              />
            ),
          }}  />
            <Tab.Screen
          name="Home2"
          component={Home}
          options={{
            tabBarLabel: 'settings',
            tabBarIcon: ({ color, size }) => (
              <Feather
                name="settings"
                color={color}
                size={size}
              />
            ),
          }}  />
          <Tab.Screen
          name="Home3"
          component={Home}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-settings"
                color={color}
                size={size}
              />
            ),
          }}  />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;