import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
export default function Login() {
  const [mobile, setMobile] = useState("");
  const router = useRouter();
  const [countryCode, setCountryCode] = useState("+91");
  const [codeModalVisible, setCodeModalVisible] = useState(false);
  const ITEM_HEIGHT = 48;

  return (
    <View style={styles.container}>
      {/* Language Dropdown (Top Right) */}
      <TouchableOpacity
        style={styles.languageButton}
        onPress={() => {
          /* open language selector */
        }}
      >
        <Image
          source={require('../../../assets/icon/login/Globe.png')}
            style={styles.languageIcon}
        />
        <Text style={styles.languageText}>Marathi</Text>
      </TouchableOpacity>


      {/* Title */}
      <Text style={styles.title}>Login</Text>

      {/* Illustration Image */}
      <Image
        source={require("../../../assets/images/Login.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Input Label */}
      <Text style={styles.label}>Enter your mobile number</Text>

      {/* Input with Country Code */}
      {/* <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.input}
          placeholder="8985456325"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />
        <Text style={styles.checkmark}>✔</Text>
      </View> */}
      {/* Input with Country Code (tap to open selector) */}
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.countryButton}
          onPress={() => setCodeModalVisible(true)}
        >
          <Text style={styles.countryCode}>{countryCode}</Text>
          <Image  source={require('../../../assets/icon/login/Drop_Down.png')}/>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="8985456325"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />
        <Text style={styles.checkmark}>✔</Text>
      </View>
      


      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("/screen/(CommonScreen)/VerifyOTP")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Text */}
      <Text style={styles.footerText}>
        Don’t have an account?{" "}
        <Text >
          Sign Up
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
  },
  languageButton: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#44D7B6",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 20,
  },
  languageIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    resizeMode: "contain",
  },
  languageText: {
    fontFamily: "Nunito_600SemiBold",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 14, // 100% of 14px
    letterSpacing: 0,
    textAlign: "right",
    textAlignVertical: "bottom",
    color: "#252525",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#000",
  },
  image: {
    // width: 367,
    // height: 381,
    // top: -50,
    // left:0,
    alignSelf: "center",
    marginBottom: 25,
  },
  label: {
    fontFamily: "Nunito_600SemiBold",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: 16.43,
    lineHeight: 25.81,
    letterSpacing: 0.82, // 5% of 16.43 ≈ 0.82px
    marginBottom: 10,
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 20,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 8,
  },
  countryButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 8,
  },
  downArrow: {
    marginLeft: 6,
    fontSize: 14,
    color: "#555",
      },
  // dropdown shown inline below the input
  dropdownBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 10,
    // slight shadow (iOS/Android)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  countryItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  countryLabel: {
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
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
    color: "#44D7B6",
    fontWeight: "600",
  },
});
