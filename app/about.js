import { StyleSheet, Text, View } from 'react-native';

import LinkButton from '../components/LinkButton';

export default function About() {
  return (
    <View style={styles.container}>
      
      <LinkButton page="/" title="Go Back Home"/>
      <LinkButton page="contact" title="Go To Contact Us"/>
      <LinkButton page="contact" title="Go To Contact Us"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67eff1',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
