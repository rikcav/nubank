import { StyleSheet, View } from 'react-native';

export default function Header() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#830AD1',
    width: '100%',
    height: '20%',
    alignSelf: 'flex-start',
  },
});
