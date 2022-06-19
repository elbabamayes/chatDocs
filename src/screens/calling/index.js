import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Pressable,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Voximplant} from 'react-native-voximplant';

import CallActionBox from '../../components/callActionBox';
import styles from './style';

const permissions = [
  PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  PermissionsAndroid.PERMISSIONS.CAMERA,
];
const voximplant = Voximplant.getInstance();
Ionicons.loadFont();
const Calling = () => {
  const {goBack, navigate} = useNavigation();
  const {params} = useRoute();
  let call = useRef(params?.call);
  let endpoint = useRef(null);
  
  const [premissionsGranted, setPremissionsGranted] = useState(false);
  const [callStatus, setCallStatus] = useState('Initializing...');
  const [localVideoStreamId, setLocalVideoStreamId] = useState('');
  const [remoteVideoStreamId, setRemoteVideoStreamId] = useState('');

  useEffect(() => {
    const getPermisions = async () => {
      const granted = await PermissionsAndroid.requestMultiple(permissions);
      const recordAudioGranted =
        granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === 'granted';
      const cameraGranted =
        granted[PermissionsAndroid.PERMISSIONS.CAMERA] === 'granted';
      if (!recordAudioGranted || !cameraGranted) {
        Alert.alert('Permissions not granted');
      } else {
        setPremissionsGranted(true);
      }
    };
    if (Platform.OS === 'android') {
      getPermisions();
    } else {
      setPremissionsGranted(true);
    }
  }, []);
  
  useEffect(() => {
    if (!premissionsGranted) {
      return;
    }
    const callSettings = {
      video: {
        sendVideo: true,
        receiveVideo: true,
      },
    };

    const makeCall = async () => {
      // put userName here dynamic instead of making it static just like here
      call.current = await voximplant.call(params?.user?.name, callSettings);
      subscribeToCallEvents();
    };

    const answerCall = async () => {
      subscribeToCallEvents();
      call.current.answer(callSettings);
      endpoint.current = call.current.getEndpoints()[0];
      subscribeToCallEvents();
    };

    const subscribeToCallEvents = () => {
      call.current.on(Voximplant.CallEvents.Failed, callEvent => {
        showError(callEvent.reason);
      });
      call.current.on(Voximplant.CallEvents.ProgressToneStart, callEvent => {
        setCallStatus('Calling...');
      });
      call.current.on(Voximplant.CallEvents.Connected, callEvent => {
        setCallStatus('Connected');
      });
      call.current.on(Voximplant.CallEvents.Disconnected, callEvent => {
        setCallStatus('Disconnected');
        goBack()
      });
      call.current.on(
        Voximplant.CallEvents.LocalVideoStreamAdded,
        callEvent => {
          setRemoteVideoStreamId(callEvent.videoStream.id);
        },
      );
      call.current.on(Voximplant.CallEvents.EndpointAdded, callEvent => {
        endpoint.current = callEvent.endpoint;
        subscribeToEndpointEvents();
      });
    };

    const subscribeToEndpointEvents = async () => {
      endpoint.current.on(
        Voximplant.EndpointEvents.RemoteVideoStreamAdded,
        endpointEvent => {
          setRemoteVideoStreamId(endpointEvent.videoStream.id);
        },
      );
    };

    const showError = reason => {
      Alert.alert('Call failed', `Reason:${reason}`, [
        {
          text: 'Ok',
          onPress: navigate('home'),
        },
      ]);
    };
    if (params?.isIncomingCall) {
      answerCall();
    } else {
      makeCall();
    }
    return () => {
      call.current.off(Voximplant.CallEvents.Failed);
      call.current.off(Voximplant.CallEvents.ProgressToneStart);
      call.current.off(Voximplant.CallEvents.Connected);
      call.current.off(Voximplant.CallEvents.Disconnected);
    };
  }, [premissionsGranted]);
  const onHangupPress = () => {
    call.current.hangup();
  };
  return (
    <View style={styles.page}>
      <Pressable onPress={() => goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" color="white" size={25} />
      </Pressable>
      <Voximplant.VideoView
        videoStreamId={remoteVideoStreamId}
        style={styles.remoteVideo}
      />
      <Voximplant.VideoView
        videoStreamId={localVideoStreamId}
        style={styles.localVideo}
      />
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Mayes El Baba</Text>
        <Text style={styles.phoneNumber}>{callStatus}</Text>
      </View>
      <CallActionBox onHangupPress={onHangupPress} />
    </View>
  );
};

export default Calling;
