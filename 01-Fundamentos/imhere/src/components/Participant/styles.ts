import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  name: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 16,
  },

  button: {
    width: 36,
    height: 36,
    borderRadius: 4,
    backgroundColor: '#e23c44',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});
