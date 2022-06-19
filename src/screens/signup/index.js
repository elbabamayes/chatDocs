import React, {useContext, useEffect, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {deviceWidth} from '../../utiles';
import {logo} from '../../images';
import styles from './style';
import {AuthContext} from '../../components/navigation/AuthProvider';
import FlatButton from '../shared/button';

let patient = 'Patient';
let doctor = 'Doctor';

// FORM VALIDATIONS
AntDesign.loadFont();
const validationSchemaPatient = Yup.object({
  name: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Fill your Name'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Fill your email'),
  password: Yup.string()
    .required('Fill your password')
    .min(8, 'password must be at least 8 characters'),
  confirmPassword: Yup.string().required('Confirm password is required'),
  phoneNumber: Yup.number().required('Fill your Phone number'),
});
const validationSchemaDoctor = Yup.object({
  name: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Fill your Name'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Fill your email'),
  password: Yup.string()
    .required('Fill your password')
    .min(8, 'password must be at least 8 characters'),
  confirmPassword: Yup.string().required('Confirm password is required'),
  phoneNumber: Yup.number().required('Fill your Phone number'),
  rizivNumber: Yup.number()
    .required('Fill your RIZIV number')
    .min(8, 'RIZIV must be at least 10 numbers'),
});
const Signup = () => {
  const {navigate} = useNavigation();
  const {top, bottom} = useSafeAreaInsets();
  const [formType, setFormType] = useState(patient);
  const [remmeberChecked, setRemmeberChecked] = useState(false);
  const formTypeHanlder = value => {
    setFormType(value);
  };

  const {user, register} = useContext(AuthContext);

  useEffect(() => {
    if (user !== null) {
      navigate('mainStack', {screen: 'mainStack'});
    }
  }, [user]);
  // LOGO + BUTTONS
  return (
    <View style={{paddingTop: top, paddingBottom: bottom}}>
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
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
              phoneNumber: '',
            }}
            onSubmit={(values, onSubmitProps) => {
              const {email, password, name} = values;
              register(email, password, name, remmeberChecked);
              // onSubmitProps.setSubmitting(false);
              onSubmitProps.resetForm();
              // onPress = () => navigate('home');
            }}
            validationSchema={validationSchemaPatient}>
            {({handleChange, handleBlur, handleSubmit, errors, values}) => {
              console.log({
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                values,
              });
              return (
                <ScrollView style={styles.from}>
                  <Text style={styles.label}>Name</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder="Jan Boon"
                    autoCapitalize="none"
                  />
                  {errors?.name ? (
                    <Text style={styles.error}>{errors?.name}</Text>
                  ) : null}
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
                  <Text style={styles.label}>Confirm password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    placeholder="************"
                    secureTextEntry={true}
                    autoCapitalize="none"
                  />
                  {errors?.confirmPassword ? (
                    <Text style={styles.error}>{errors?.confirmPassword}</Text>
                  ) : null}
                  {values.password !== values.confirmPassword ? (
                    <Text style={styles.error}>
                      password is not equal to confirm passowrd
                    </Text>
                  ) : null}
                  <Text style={styles.label}>Phone number</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                    placeholder="0032485204874"
                    autoCapitalize="none"
                    keyboardType="numeric"
                  />
                  {errors?.phoneNumber ? (
                    <Text style={styles.error}>{errors?.phoneNumber}</Text>
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
                        I accept the Terms of use & Privacy Policy
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <FlatButton text="Sign up" onPress={handleSubmit} />
                  <Text style={styles.signUp}>Already have an account</Text>
                  <TouchableOpacity onPress={() => navigate('login')}>
                    <Text style={styles.signUpText}>Login</Text>
                  </TouchableOpacity>
                </ScrollView>
              );
            }}
          </Formik>
        ) : (
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
              rizivNumber: '',
            }}
            onSubmit={(values, onSubmitProps, onPress) => {
              const {email, password, name} = values;
              const spilttedEmail = email.split('@');
              const newEmail = `${spilttedEmail[0]}-doctor@${spilttedEmail[1]}`;
              register(newEmail, password, name);
              onSubmitProps.setSubmitting(false);
              onSubmitProps.resetForm();
            }}>
            {({handleChange, handleBlur, handleSubmit, errors, values}) => {
              return (
                <ScrollView style={styles.from}>
                  <Text style={styles.label}>Name</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder="Ann Koulen"
                    autoCapitalize="none"
                  />
                  {errors?.name ? (
                    <Text style={styles.error}>{errors?.name}</Text>
                  ) : null}
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="annkoulen@chatdocs.com"
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
                  <Text style={styles.label}>Confirm password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('password')}
                    value={values.confirmPassword}
                    placeholder="************"
                    secureTextEntry={true}
                    autoCapitalize="none"
                  />
                  {errors?.confirmPassword ? (
                    <Text style={styles.error}>{errors?.confirmPassword}</Text>
                  ) : null}
                  <Text style={styles.label}>RIZIV number</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('rizivNumber')}
                    onBlur={handleBlur('rizivNumber')}
                    value={values.rizivNumber}
                    placeholder="154887565266641"
                    keyboardType="numeric"
                  />
                  {errors?.rizivNumber ? (
                    <Text style={styles.error}>{errors?.rizivNumber}</Text>
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
                        I accept the Terms of use & Privacy Policy
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <FlatButton text="Sign up" onPress={handleSubmit} />
                  <Text style={styles.signUp}>Already have an account</Text>
                  <TouchableOpacity onPress={() => navigate('login')}>
                    <Text style={styles.signUpText}>Login</Text>
                  </TouchableOpacity>
                </ScrollView>
              );
            }}
          </Formik>
        )}
      </ScrollView>
    </View>
  );
};

export default Signup;
