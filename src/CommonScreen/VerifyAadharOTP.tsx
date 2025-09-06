// app/verify-aadhar-otp.tsx

import React, { useEffect, useRef, useState } from 'react';
import {
    Alert,
    Image,
    NativeSyntheticEvent,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TextInputKeyPressEventData,
    TouchableOpacity,
    View,
} from 'react-native';

// ✅ Use Expo Router's router instead of useNavigation
import { useRouter } from 'expo-router';

const VerifyAadharOTP = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(12);
    const router = useRouter(); // ✅ Expo Router navigation
    const inputs = useRef<Array<TextInput | null>>([]);

    useEffect(() => {
        if (timer === 0) return;
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleOtpChange = (text: string, index: number) => {
        if (isNaN(Number(text))) {
            return;
        }

        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3 && inputs.current[index + 1]) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (
        e: NativeSyntheticEvent<TextInputKeyPressEventData>,
        index: number,
    ) => {
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp.length === 4) {
            // ✅ Navigate using Expo Router
            router.push('/screen/(CommonScreen)/Registration'); // make sure this route exists in your app
        } else {
            Alert.alert('Error', 'Please enter a valid 4-digit OTP.');
        }
    };

    const handleResend = () => {
        if (timer === 0) {
            setOtp(['', '', '', '']);
            setTimer(12);
            Alert.alert('OTP Resent', 'A new OTP has been sent.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Text style={styles.backButtonText}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Verify</Text>
            </View>

            <View style={styles.content}>
                <Image
                    source={require('../../../assets/images/VerifyOtp.png')}
                    style={styles.image}
                />

                <Text style={styles.title}>Enter OTP</Text>
                <Text style={styles.subtitle}>
                    An 4 digit OTP has been sent to registered Mobile no.
                </Text>
                <Text style={styles.mobileNumber}>0000 0000 0000</Text>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={styles.otpInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            onChangeText={text => handleOtpChange(text, index)}
                            onKeyPress={e => handleKeyPress(e, index)}
                            value={digit}
                            ref={ref => { inputs.current[index] = ref; }}
                        />
                    ))}
                </View>

                <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                    <Text style={styles.verifyButtonText}>Verify</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleResend} disabled={timer !== 0}>
                    <Text style={styles.resendText}>
                        Resend OTP {timer > 0 ? `(${String(timer).padStart(2, '0')})` : ''}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// Styles remain unchanged...
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAF7F5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    backButton: {
        padding: 5,
    },
    backButtonText: {
        fontSize: 24,
        color: '#333',
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 30,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    image: {
        width: 250,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        maxWidth: '80%',
    },
    mobileNumber: {
        fontSize: 15,
        color: 'black',
        fontWeight: '600',
        marginTop: 5,
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
        marginBottom: 40,
    },
    otpInput: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF',
        color: '#333',
    },
    verifyButton: {
        width: '100%',
        backgroundColor: '#20C997',
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 20,
    },
    verifyButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    resendText: {
        fontSize: 14,
        color: 'gray',
    },
});

export default VerifyAadharOTP;
