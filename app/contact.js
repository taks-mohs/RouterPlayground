import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text>Contact Page</Text>
      <LinkButton page="about" title="Go To About Page"/>
       <LinkButton page="/" title="Go Back Home"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#429a29',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
