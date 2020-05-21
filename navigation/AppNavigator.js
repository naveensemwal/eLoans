import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import InitiateCaseScreen from '../screens/InitiateCase/InitiateCaseScreen';
import CaptureAadharScreen from '../screens/InitiateCase/CaptureAadharScreen';
import CapturePANScreen from '../screens/InitiateCase/CapturePANScreen';
import PersonalDetailScreen from '../screens/InitiateCase/PersonalDetailScreen';
import EmploymentDetailScreen from '../screens/InitiateCase/EmploymentDetailScreen';
import LoanSubmitScreen from '../screens/InitiateCase/LoanSubmitScreen';
import LoanCalculatorScreen from '../screens/LoanCalculator/LoanCalculatorScreen';
import TasksScreen from '../screens/Tasks/TasksScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/Profile/Profile';
import SearchScreen from '../screens/Search/SearchScreen';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';

// const AuthStack = createStackNavigator();
// const AuthStackScreens = () => (
//   <AuthStack.Navigator>
//     <AuthStack.Screen
//       name="SignIn"
//       component={SignIn}
//       options={{ title: "Sign In" }}
//     />
//     <AuthStack.Screen
//       name="CreateAccount"
//       component={CreateAccount}
//       options={{ title: "Create Account" }}
//     />
//   </AuthStack.Navigator>
// );

const HomeTabStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const TaskStack = createStackNavigator();
const InitiateCaseStack = createStackNavigator();


const InitiateCaseStackScreen = () => (
  <InitiateCaseStack.Navigator mode="card">
    <InitiateCaseStack.Screen name="InitiateCase" component={InitiateCaseScreen} options={{
      title: 'Initiate Case'
    }} />
    <InitiateCaseStack.Screen name="CaptureAadhar" component={CaptureAadharScreen} options={{
      title: 'Capture Aadhar Details'
    }} />
    <InitiateCaseStack.Screen name="CapturePAN" component={CapturePANScreen} options={{
      title: 'Capture PAN Details'
    }} />
    <InitiateCaseStack.Screen name="PersonalDetail" component={PersonalDetailScreen} options={{
      title: 'Personal Details'
    }} />
    <InitiateCaseStack.Screen name="EmploymentDetail" component={EmploymentDetailScreen} options={{
      title: 'Employment Details'
    }} />
    <InitiateCaseStack.Screen name="SubmitLoan" component={LoanSubmitScreen} options={{
      title: 'Submit Loan Application'
    }} />
  </InitiateCaseStack.Navigator>

);


const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="InitiateCase" component={InitiateCaseStackScreen} options={{
      title: 'Initiate Case'
    }} />
    <HomeStack.Screen name="LoanCalculator" component={LoanCalculatorScreen} options={{
      title: 'Loan Eligibility',
    }} />
  </HomeStack.Navigator>
);

const TaskStackScreen = () => (
  <TaskStack.Navigator>
    <TaskStack.Screen name="Tasks" component={TasksScreen} />
  </TaskStack.Navigator>
);

const SearchStackScreen = () => (
  <TaskStack.Navigator>
    <TaskStack.Screen name="Search" component={SearchScreen} />
  </TaskStack.Navigator>
);

const NotificationsStackScreen = () => (
  <TaskStack.Navigator>
    <TaskStack.Screen name="Notifications" component={NotificationsScreen} />
  </TaskStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <HomeTabStack.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'ios-home' : 'ios-home';
        } else if (route.name === 'Tasks') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }
        else if (route.name === 'Search') {
          iconName = focused ? 'ios-search' : 'ios-search';
        }
        else if (route.name === 'Notifications') {
          iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <HomeTabStack.Screen name="Home" component={HomeStackScreen} />
    <HomeTabStack.Screen name="Tasks" component={TaskStackScreen} />
    <HomeTabStack.Screen name="Search" component={SearchStackScreen} />
    <HomeTabStack.Screen name="Notifications" component={NotificationsStackScreen} />
  </HomeTabStack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen}

    />
    <Drawer.Screen name="Tasks" component={ProfileStackScreen} />
  </Drawer.Navigator>
);


const AppStack = createStackNavigator();
const AppNavigator = props => {
  return (
    <AppStack.Navigator headerMode='none'>
      <AppStack.Screen name='Login' component={LoginScreen} />
      <AppStack.Screen name='Home' component={DrawerScreen} />
    </AppStack.Navigator>
  );
}


export default AppNavigator;
