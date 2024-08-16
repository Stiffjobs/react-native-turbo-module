import { StyleSheet, View, Button } from 'react-native';
import {
  reverseString,
  getNumbers,
  getObject,
  promiseNumber,
  callMeLater,
} from 'react-native-turbo-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="reverse string"
        onPress={() => console.log(reverseString('reverse string'))}
      />
      <Button title="get number" onPress={() => console.log(getNumbers())} />
      <Button title="get object" onPress={() => console.log(getObject())} />
      <Button
        title="promise"
        onPress={async () => {
          console.log('promised value', await promiseNumber(5));
        }}
      />
      <Button
        title="callbacks"
        onPress={() => {
          callMeLater(
            () => console.log('success'),
            () => console.log('failure')
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
