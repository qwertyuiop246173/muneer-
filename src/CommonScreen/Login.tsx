// app/login.tsx

import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Language Selector */}
      <TouchableOpacity style={styles.languageButton}>
        <Image
          source={require("../../../assets/icon/login/Globe.png")}
          style={styles.languageIcon}
        />
        <Text style={styles.languageText}>Marathi</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Login</Text>

      {/* Illustration */}
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../../assets/images/Login.png")}
          style={styles.image}
        />
      </View>

      {/* Input Label */}
      <Text style={styles.label}>Enter your mobile number</Text>

      {/* Mobile Input */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.countryButton}>
          <Text style={styles.countryCode}>{countryCode}</Text>
          <Image
            source={require("../../../assets/icon/login/Drop_Down.png")}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="8985456325"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />

        {mobile.length === 10 && <Text style={styles.checkmark}>✔</Text>}
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("/screen/(CommonScreen)/VerifyOTP")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Footer */}
      <Text style={styles.footerText}>
        Don’t have an account?{" "}
        <Text style={styles.signUp}>Sign Up</Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 60,
    paddingTop: 40,
  },
  languageButton: {
    position: "absolute",
    top: 40,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#44D7B6",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 1,
  },
  languageIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    resizeMode: "contain",
  },
  languageText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#252525",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#000",
  },
  imageWrapper: {
    width: "60%",
    aspectRatio: 1,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#000",
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    width: "100%",
    marginBottom: 20,
  },
  countryButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  checkmark: {
    fontSize: 18,
    color: "#44D7B6",
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#00bfa6",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
    maxWidth: 300,
    alignSelf: "center",
    marginTop: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 20,
    color: "#333",
  },
  signUp: {
    color: "#00bfa6",
    fontWeight: "600",
  },
});
