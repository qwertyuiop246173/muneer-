// app/congratulations.tsx

import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Congratulation = () => {
  const router = useRouter();
  const handleStartExploring = () => {
    router.push("/screen/(HiringScreen)/(tabs)/Home");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.mainTitle}>Success</Text>

      <View style={styles.imageWrapper}>
        <Image
          source={require("../../../assets/images/Congratulation.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.congratulationsTitle}>Congratulations!</Text>
      <Text style={styles.message}>
        Your profile has been successfully created and you're all set to explore new opportunities.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleStartExploring}>
        <Text style={styles.buttonText}>Start Exploring</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Congratulation;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 60,
    paddingTop: 40,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  imageWrapper: {
    width: "60%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  congratulationsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    fontSize: 15,
    color: "gray",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 40,
    width: "80%",
  },
  button: {
    width: "80%",
    backgroundColor: "#20C997",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
