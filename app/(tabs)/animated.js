import { Button, StyleSheet, Text, View } from 'react-native';
import LinkButton from '../../components/LinkButton';
import LottieView from 'lottie-react-native';
import { useRef, useEffect } from 'react';

export default function animated() {
    const animation = useRef(null);
    let didPress = false;
    useEffect(() => {
        animation.current?.reset();
    }, [didPress]);

    return (
        <View style={styles.container}>
            <Text>Animation Page</Text>
            <View style={styles.animationContainer}>
                <LottieView
                    autoPlay
                    loop={false}
                    ref={animation}
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: '#a4e3b1ff',
                    }}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require('../../assets/SuccessCheck.json')}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Restart Animation"
                        onPress={() => {
                            animation.current?.reset();
                            animation.current?.play();
                        }}
                    />
                    <Button
                        title="Stop Animation"
                        onPress={() => {
                            didPress = !didPress;
                            //animation.current?.reset();
                            //animation.current?.play();
                        }}
                    />
                </View>
            </View>
            <LinkButton page="/" title="Go Back Home" />
            <LinkButton page="about" title="Go to About" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebffefff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        paddingTop: 20,
    }
});
