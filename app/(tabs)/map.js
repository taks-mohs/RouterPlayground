import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../../components/LinkButton';

export default function Map() {
  return (
    <View style={styles.container}>
        <Text>Map Page</Text>
        <LinkButton page="/" title="Go Back Home"/>
        <LinkButton page="about" title="Go to About"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24ae19",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
