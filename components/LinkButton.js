import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colorSheet'

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
        backgroundColor: colors.primary,
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});
