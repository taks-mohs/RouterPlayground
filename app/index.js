import { StyleSheet, Text, View } from 'react-native';

import LinkButton from '../components/LinkButton';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Main Page</Text>
            <LinkButton page="about" title="Go To About Page"/>
            <LinkButton page="contact" title="Go To Contact Us"/>
            <LinkButton page="profile" title="Go To Profile Page"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});
