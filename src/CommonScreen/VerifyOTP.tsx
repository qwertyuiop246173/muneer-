// File: src/screen/VerifyOTP.tsx

import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


export default function VerifyOTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(12);
  const inputRefs = useRef<Array<TextInput | null>>([]);


  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const id = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(id);
    }
    return;
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={{ fontSize: 22 }}>←</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Verify</Text>

      {/* Illustration */}
      <Image
        source={require("../../../assets/images/VerifyOtp.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Enter OTP Label */}
      <Text style={styles.label}>Enter OTP</Text>
      <Text style={styles.subLabel}>
        A 4 digit OTP has been sent to{"\n"}
        <Text style={styles.phone}>458-465-6466</Text>
      </Text>

      {/* OTP Inputs */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      {/* Verify Button */}
      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => router.push("/screen/(CommonScreen)/Registration")}
      >
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>

      {/* Resend OTP */}
      <Text style={styles.resend}>
        Resend OTP{" "}
        <Text style={styles.timer}>
          {timer > 0 ? `(00:${timer < 10 ? `0${timer}` : timer})` : ""}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#000",
  },
  image: {
    width: "80%",
    height: 180,
    marginBottom: 20,
  },
  label: {
    fontFamily: "Nunito_700Bold",
    fontWeight: "700",
    fontSize: 26.32,
    textAlign: "center",
    color: "#000000",
    marginBottom: 5,
    letterSpacing: 18* 0.01,
  },
  subLabel: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  phone: {
    fontWeight: "bold",
   
    color: "#000",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
  },
  otpInput: {
    borderWidth: 1.17,
    borderColor: "#C5C5C5",
    borderRadius: 11.73,
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#F1F1F1",

  },
  verifyButton: {
    backgroundColor: "#44D7B6",
    paddingVertical: 12,
    borderRadius: 17.6,
    width: 330,

    alignItems: "center",
    marginBottom: 15,

  },
  verifyText: {
    fontFamily: "Nunito_700Bold",
    fontWeight: "700",
    color: "#fff",
    fontSize: 18.77,

  },
  resend: {
    fontFamily: "Nunito_700Bold",
    fontWeight: "700",
    fontSize: 16.43,
    color: "#555",
    letterSpacing: 16.43 * 0.02
  },
  timer: {
    fontFamily: "Nunito_700Bold",
    fontWeight: "700",
    color: "#44D7B6",
    fontSize: 16.43,
    letterSpacing: 16.43 * 0.02
  },
});
