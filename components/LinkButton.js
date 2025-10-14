import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function LinkButton({page, title}) {
    return (
        <View style={styles.container}>
            <Link href={page}>{title}</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        widht: 300,
        backgroundColor: "#ae1209",
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});
