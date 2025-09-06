// app/congratulations.tsx

import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Congratulation = () => {
    const router = useRouter();
    const handleStartExploring = () => {
        router.navigate('/screen/(WorkerScreen)/(tabs)/Home');
        // Example: navigation.navigate('HomeScreen');
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.mainTitle}>Success</Text>

                <View style={styles.imagePlaceholder}>
                    <Image
                        source={require('../../../assets/images/Congratulation.png')}
                        style={styles.illustrationImage}
                    />
                </View>

                <Text style={styles.congratulationsTitle}>Congratulations!</Text>
                <Text style={styles.message}>
                    Your profile has been successfully created and you're all set to
                    explore new opportunities.
                </Text>

                <TouchableOpacity style={styles.button} onPress={handleStartExploring}>
                    <Text style={styles.buttonText}>Start Exploring</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Congratulation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 50,
        marginTop: -80,
    },
    imagePlaceholder: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    illustrationImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    congratulationsTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    message: {
        fontSize: 15,
        color: 'gray',
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 50,
        maxWidth: '85%',
    },
    button: {
        width: '100%',
        backgroundColor: '#20C997',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
