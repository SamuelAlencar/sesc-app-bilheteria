import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerScroll: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderWidth: 0,
    shadowColor: 'transparent',
    elevation: 0,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#d63c42',
    borderRadius: 0,
  },
  buttonLabel: {
    color: '#ffffff',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
  },
  modalTitle: {
    color: '#d63c42',
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 5,
  },
  textInput: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    backgroundColor: '#ffffff',
    borderBottomColor: '#d63c42',
  },
  label: {
    color: '#d63c42'
  }
});