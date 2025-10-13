import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../../components/LinkButton';
import myColors from '../../constants/colorSheet';

export default function Map() {
  return (
    <View style={styles.container}>
      <Text>Map Page</Text>
       <LinkButton page="/" title="Go Back Home"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
