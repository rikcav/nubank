import { View, StyleSheet } from 'react-native';

export default function PaymentButton() {
  return <View style={styles.container}></View>;
}

const height = '100';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    width: 65,
    height: 65,
    margin: 30,
    borderRadius: 50,
    alignContent: 'stretch',
  },
});
