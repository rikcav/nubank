import { StyleSheet, View, Text, Image } from 'react-native';
import ButtonProps from '../entities/ButtonProps';

export default function RowButton(props: ButtonProps) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          style={styles.image}
          source={require(`../assets/${props.imageURL}.png`)}
        />
      </View>
      <Text style={styles.text}>{props.bodyText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  circle: {
    backgroundColor: '#F0F1F5',
    width: 60,
    height: 60,
    marginTop: 30,
    borderRadius: 50,
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    alignItems: 'center',
    marginTop: 5,
    fontFamily: 'Roboto',
  },
  image: {
    alignSelf: 'center',
    height: 25,
    width: 25,
  },
});
