import {StyleSheet} from 'react-native';

// Calling style 

const style = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#7d4e80',
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 15,
  },
  phoneNumber: {
    fontSize: 20,
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  localVideo: {
    height: 150,
    width: 100,
    backgroundColor: '#ffff6e',
    position: 'absolute',
    right: 10,
    top: 100,
    borderRadius: 10,
  },
  remoteVideo: {
    backgroundColor: '#7d4e80',
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 100,
  },
});

export default style;
