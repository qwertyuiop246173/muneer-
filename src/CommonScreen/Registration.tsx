import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

const Registration = () => {
  const [activeTab, setActiveTab] = useState<"worker" | "employee">("worker");
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Registration</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "worker" && styles.activeTab]}
            onPress={() => setActiveTab("worker")}
          >
            <Text
              style={[styles.tabText, activeTab === "worker" && styles.activeTabText]}
            >
              Worker (Job Seeker)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "employee" && styles.activeTab]}
            onPress={() => setActiveTab("employee")}
          >
            <Text
              style={[styles.tabText, activeTab === "employee" && styles.activeTabText]}
            >
              Employee (Hire)
            </Text>
          </TouchableOpacity>
        </View>

        {/* Full Name */}
        <TextInput style={styles.input} placeholder="Enter Your Name" />

        {/* Mobile */}
        <TextInput style={styles.input} placeholder="+91 1712345678" keyboardType="phone-pad" />

        {/* Aadhaar */}
        {activeTab === "worker" && (
          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 10 }]}
              placeholder="Enter Aadhaar number"
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.verifyButton}>
              <Text style={styles.verifyText}>Verify</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Location */}
        <TextInput style={styles.input} placeholder="Delhi, India" />
        <Text style={styles.link}>Use Your Current Location</Text>

        {/* Skills */}
        {activeTab === "worker" && (
          <>
            <TextInput style={styles.input} placeholder="Select Your Skill" />
            <View style={styles.skillTags}>
              {["Washer", "Carpenter", "Electrician", "Plumber", "Labour", "Transport"].map(
                (skill, i) => (
                  <View key={i} style={styles.skillTag}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                )
              )}
            </View>
          </>
        )}

        {/* Plans */}
        {activeTab === "employee" && (
          <View style={styles.planContainer}>
            <Text style={styles.planTitle}>Choose Your Plan</Text>

            {[
              {
                name: "Silver",
                price: "Free /-",
                details: ["✔ 50 verified worker details / month", "✔ Limited contact / reach out"],
              },
              {
                name: "Gold",
                price: "₹1499 /- per month",
                details: ["✔ 150 verified worker details / month", "✔ Unlimited contact / reach out"],
              },
              {
                name: "Platinum Plan",
                price: "₹3499 /- per 3 months",
                details: ["✔ Unlimited worker details", "✔ Unlimited contact / reach out"],
              },
            ].map((plan, i) => (
              <View key={i} style={styles.planBox}>
                <Text style={styles.planName}>{plan.name}</Text>
                <Text style={styles.planPrice}>{plan.price}</Text>
                {plan.details.map((d, j) => (
                  <Text key={j} style={styles.planDetail}>{d}</Text>
                ))}
              </View>
            ))}
          </View>
        ))}

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.signUpLink}>Login</Text>
      </Text>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 25,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#00CFA4",
    borderColor: "#00CFA4",
  },
  tabText: {
    fontSize: 14,
    color: "#000",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 15,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  verifyButton: {
    backgroundColor: "#00CFA4",
    paddingHorizontal: 18,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  verifyText: {
    color: "#fff",
    fontWeight: "600",
  },
  link: {
    color: "#00CFA4",
    fontSize: 13,
    marginBottom: 20,
  },
  skillTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 25,
  },
  skillTag: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  skillText: {
    fontSize: 13,
  },
  planContainer: {
    marginBottom: 25,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },
  planBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 18,
    marginBottom: 15,
  },
  planName: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 5,
  },
  planPrice: {
    color: "#00CFA4",
    fontWeight: "700",
    marginBottom: 5,
  },
  planDetail: {
    fontSize: 13,
    marginBottom: 3,
  },
  signUpButton: {
    backgroundColor: "#00CFA4",
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 5,
    marginBottom: 15,
    alignItems: "center",
  },
  signUpText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  footerText: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 13,
    color: "#333",
  },
  signUpLink: {
    color: "#00CFA4",
    fontWeight: "600",
  },
});
