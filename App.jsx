import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/customButton';
import CustomTextInput from './src/components/customTextInput';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomButton
        backgroundColor="#DDD"
        color="#39494f"
        text="Custom Button"
        width="100%"
        onPress={() => {}}
      />
      <CustomTextInput
        label="Custom Text"
        multiline
        numberOfLines={2}
        onChange={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 40,
  },
});
