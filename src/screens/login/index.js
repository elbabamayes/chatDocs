import React, {useState, useContext, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Voximplant} from 'react-native-voximplant';
import {logo} from '../../images';
import styles from './style';
import {AuthContext} from '../../components/navigation/AuthProvider';
import {APP_NAME, ACC_NAME} from '../../constants/index.json';
import FlatButton from '../shared/button';
console.log({APP_NAME, ACC_NAME});

// TEST
let patient = 'Patient';
let doctor = 'Doctor';

// FORM VALIDATIONS
AntDesign.loadFont();
const validationSchemaPatient = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Fill your email'),
  password: Yup.string()
    .required('Fill your password')
    .min(8, 'password must be at least 8 characters'),
});
const validationSchemaDoctor = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Fill your email'),
  password: Yup.string()
    .required('Fill your password')
    .min(8, 'password must be at least 8 characters'),
  rizivNumber: Yup.number()
    .required('Fill your RIZIV number')
    .min(8, 'RIZIV must be at least 10 numbers'),
});
const client = Voximplant.getInstance();

const Login = () => {
  const {navigate} = useNavigation();
  const {user, login} = useContext(AuthContext);
  const {top, bottom} = useSafeAreaInsets();
  const [formType, setFormType] = useState(patient);
  const [remmeberChecked, setRemmeberChecked] = useState(false);
  const [pass, setPass] = useState('');
  const [authResults, setAuthResults] = useState('');
  const [connectStatus, setConnectStatus] = useState(false);
  const connect = async () => {
    try {
      let state = await client.getClientState();
      console.log({state});
      if (state === Voximplant.ClientState.DISCONNECTED) {
        setConnectStatus(false);
        await client.connect();
      } else if (state === Voximplant.ClientState.LOGGED_IN) {
        setConnectStatus(true);
        navigate('mainStack', {screen: 'mainStack'});
      } else if (state === Voximplant.ClientState.CONNECTED) {
        setConnectStatus(true);
      }
    } catch (e) {
      console.log({error: e.name + ' ' + e.message});
    }
  };
  useEffect(() => {
    connect();
  }, [authResults]);
  const formTypeHanlder = value => {
    setFormType(value);
  };

  const signinVoximplant = async userEmail => {
    try {
      return await client.login(userEmail, pass);
      // setAuthResults(authResult);
      // console.log({authResult});
      // navigate('home');
    } catch (error) {
      return error;
      console.log({error});
    }
  };
  // aassdda@asd.asd
  // 123123123
  // console.log({user: user?.user?._user?.email, userEmail});
  useEffect(() => {
    if (user !== null) {
      if (connectStatus) {
        const userEmail = `${user?._user?.email?.substring(
          0,
          user?._user?.email?.indexOf('@'),
        )}@${APP_NAME}.${ACC_NAME}.voximplant.com`;
        signinVoximplant(userEmail).then(authResult => {
          if (authResult?.tokens) {
            setAuthResults(authResult);
            navigate('mainStack', {screen: 'mainStack'});
          }
        });
      }
    }
  }, [user, connectStatus]);

  return (
    <View style={{paddingTop: top}}>
      <ScrollView>
        <Image source={logo} style={styles.logo} />
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => formTypeHanlder(patient)}
            style={[
              styles.buttonActive,
              {backgroundColor: formType === patient ? '#3C67AF' : '#E0E0E0'},
            ]}>
            <Text
              style={[
                styles.buttonActiveText,
                {color: formType === patient ? '#FFFFFF' : '#3C67AF'},
              ]}>
              {patient}{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => formTypeHanlder(doctor)}
            style={[
              styles.buttonSec,
              {
                backgroundColor: formType === doctor ? '#3C67AF' : '#E0E0E0',
              },
            ]}>
            <Text
              style={[
                styles.buttonSecText,
                {
                  color: formType === doctor ? '#FFFFFF' : '#3C67AF',
                },
              ]}>
              {doctor}
            </Text>
          </TouchableOpacity>
        </View>

        {/* PATIENT FORM */}
        {formType === patient ? (
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values, onSubmitProps) => {
              const {email, password, name} = values;
              setPass(password);
              signinVoximplant(email).then(authResult => {
                setAuthResults(authResult);
                navigate('mainStack', {screen: 'mainStack'});
              });
              login(email, password);
              onSubmitProps.setSubmitting(false);
              onSubmitProps.resetForm();
            }}
            validationSchema={validationSchemaPatient}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => {
              return (
                <View style={styles.from}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="janboon@gmail.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  {errors?.email ? (
                    <Text style={styles.error}>{errors?.email}</Text>
                  ) : null}
                  <Text style={styles.label}>password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="************"
                    secureTextEntry={true}
                    autoCapitalize="none"
                  />
                  {errors?.password ? (
                    <Text style={styles.error}>{errors?.password}</Text>
                  ) : null}

                  <View style={styles.loginHelpers}>
                    <TouchableOpacity
                      onPress={() => setRemmeberChecked(!remmeberChecked)}
                      style={styles.remmeberMeContainer}
                      activeOpacity={0.6}>
                      <AntDesign
                        name={remmeberChecked ? 'checkcircle' : 'checkcircleo'}
                        color={remmeberChecked ? '#7DD25A' : undefined}
                        size={22}
                      />
                      <Text
                        style={[
                          styles.remmeberMeText,
                          {color: remmeberChecked ? '#7DD25A' : undefined},
                        ]}>
                        Remember me
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.forgetPasswordText}>
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    // onPress={() => navigate('home')}
                    style={styles.loginButton}>
                    <Text style={[styles.buttonActiveText, {color: '#FFFFFF'}]}>
                      Login
                    </Text>
                  </TouchableOpacity>
                  <FlatButton
                    text="Login"
                    onPress={handleSubmit}
                    // onPress={() => navigate('home')}
                  />
                  <Text style={styles.signUp}>Don't have an account?</Text>
                  <TouchableOpacity onPress={() => navigate('signup')}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </Formik>
        ) : (
          // DOCTOR FORM
          <Formik
            initialValues={{email: '', password: '', rizivNumber: ''}}
            onSubmit={values => {
              const {email, password, rizivNumber} = values;
              const spilttedEmail = email.split('@');
              const newEmail = `${spilttedEmail[0]}-doctor@${spilttedEmail[1]}`;
              login(newEmail, password);
            }}
            validationSchema={validationSchemaDoctor}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => {
              return (
                <View style={styles.from}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="janboon@gmail.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  {errors?.email ? (
                    <Text style={styles.error}>{errors?.email}</Text>
                  ) : null}
                  <Text style={styles.label}>RIZIV number</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('rizivNumber')}
                    onBlur={handleBlur('rizivNumber')}
                    value={values.rizivNumber}
                    placeholder="1548875652"
                    keyboardType="numeric"
                  />
                  {errors?.rizivNumber ? (
                    <Text style={styles.error}>{errors?.rizivNumber}</Text>
                  ) : null}
                  <Text style={styles.label}>password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="************"
                    secureTextEntry={true}
                  />
                  {errors?.password ? (
                    <Text style={styles.error}>{errors?.password}</Text>
                  ) : null}

                  <View style={styles.loginHelpers}>
                    <TouchableOpacity
                      onPress={() => setRemmeberChecked(!remmeberChecked)}
                      style={styles.remmeberMeContainer}
                      activeOpacity={0.6}>
                      <AntDesign
                        name={remmeberChecked ? 'checkcircle' : 'checkcircleo'}
                        color={remmeberChecked ? '#7DD25A' : undefined}
                        size={22}
                      />
                      <Text
                        style={[
                          styles.remmeberMeText,
                          {color: remmeberChecked ? '#7DD25A' : undefined},
                        ]}>
                        Remember me
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.forgetPasswordText}>
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <FlatButton
                    text="Login"
                    onPress={handleSubmit}
                    // onPress={() => navigate('home')}
                  />
                  <Text style={styles.signUp}>Don't have an account?</Text>
                  <TouchableOpacity onPress={() => navigate('signup')}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </Formik>
        )}
      </ScrollView>
    </View>
  );
};

export default Login;
