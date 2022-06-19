import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';

import {
  HomeScreen,
  LoginScreen,
  OnboardingScreen,
  SignUpScreen,
  CallingScreen,
  IncommingCallScreen,
  LocationScreen,
  CallScreen,
  ProfileScreen,
  DocumentsScreen,
  ChatScreen,
  ReviewsScreen,
  SymptomFormScreen,
  WaitingPageScreen,
  DossierScreen,
  WaitingListScreen,
  HomeDoctorScreen,
  HomePatientScreen,
  ConsultationFormScreen,
  ConsultationTextScreen,
  CertificateFormScreen,
  CertificateTextScreen,
  MedicationFormScreen,
  MedicationTextScreen,
  SymptomTextScreen,
} from './screens';
import {AuthContext} from './components/navigation/AuthProvider';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
Entypo.loadFont();
Ionicons.loadFont();
FontAwesome.loadFont();

const TabNavigator = () => {
  const {isDoctor} = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#707070',
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: '#161616',
              width: '100%',
              height: '100%',
            }}
          />
        ),
      }}>
      <Tab.Screen
        name="mainStack"
        component={HomeStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      {!isDoctor ? (
        <Tab.Screen
          name="dossier"
          component={DossierScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
              <Ionicons
                name="chatbubble-ellipses-sharp"
                size={24}
                color={color}
              />
            ),
          }}
        />
      ) : null}

      <Tab.Screen
        name="docs"
        component={DocumentsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="document-text" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="user-circle-o" size={24} color={color} />
          ),
          headerTitle: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  const {isDoctor} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName={isDoctor ? 'homeDoctor' : 'homePatient'}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="calling" component={CallingScreen} />
      <Stack.Screen name="incommingCall" component={IncommingCallScreen} />
      <Stack.Screen
        options={{title: 'Location'}}
        name="location"
        component={LocationScreen}
      />
      <Stack.Screen name="call" component={CallScreen} />
      <Stack.Screen name="documents" component={DocumentsScreen} />
      <Stack.Screen name="chat" component={ChatScreen} />
      <Stack.Screen
        options={{title: 'Reviews'}}
        name="reviews"
        component={ReviewsScreen}
      />
      <Stack.Screen
        options={{title: 'Waiting page'}}
        name="waitingPage"
        component={WaitingPageScreen}
      />
      <Stack.Screen
        options={{title: 'Waiting List'}}
        name="waitingList"
        component={WaitingListScreen}
      />
      <Stack.Screen
        options={{title: 'Dossier'}}
        name="dossier"
        component={DossierScreen}
      />
      <Stack.Screen
        options={{headerTitle: 'Home'}}
        name="homeDoctor"
        component={HomeDoctorScreen}
      />
      <Stack.Screen
        options={{headerTitle: 'Home'}}
        name="homePatient"
        component={HomePatientScreen}
      />
      <Stack.Screen
        options={{title: 'Consultation Form'}}
        name="consultationForm"
        component={ConsultationFormScreen}
      />
      <Stack.Screen
        options={{title: 'Consultation'}}
        name="consultationText"
        component={ConsultationTextScreen}
      />
      <Stack.Screen
        options={{title: 'Certificate Form'}}
        name="certificateForm"
        component={CertificateFormScreen}
      />
      <Stack.Screen
        options={{title: 'Certificate'}}
        name="certificateText"
        component={CertificateTextScreen}
      />
      <Stack.Screen
        options={{title: 'Medication Form'}}
        name="medicationForm"
        component={MedicationFormScreen}
      />
      <Stack.Screen
        options={{title: 'Medication'}}
        name="medicationText"
        component={MedicationTextScreen}
      />
      <Stack.Screen
        options={{title: 'Form'}}
        name="symptomForm"
        component={SymptomFormScreen}
      />
      <Stack.Screen
        options={{title: 'Form information'}}
        name="symptomText"
        component={SymptomTextScreen}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="login"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="signup" component={SignUpScreen} />
    <Stack.Screen name="onboarding" component={OnboardingScreen} />
  </Stack.Navigator>
);

function App() {
  const {user, setUser, isDoctor, setIsDoctor} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = validatedUser => {
    setUser(validatedUser);
    setIsDoctor(validatedUser?.email?.includes('doctor'));
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="AuthStack"
          screenOptions={{headerShown: false}}
          initialRouteName={user ? 'mainStack' : 'AuthStack'}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="mainStack" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
