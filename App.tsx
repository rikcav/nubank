import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import RowButton from './components/RowButton';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <RowButton bodyText="Pix" imageURL={"pix"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
