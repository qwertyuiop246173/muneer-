import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

// ✅ Use Expo Router
import { useRouter } from "expo-router";

const Registration = () => {
    const [activeTab, setActiveTab] = useState<"worker" | "employee">("worker");
    const router = useRouter(); // ✅ For navigation

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
                        style={[
                            styles.tabText,
                            activeTab === "worker" && styles.activeTabText,
                        ]}
                    >
                        Worker (Job Seeker)
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, activeTab === "employee" && styles.activeTab]}
                    onPress={() => setActiveTab("employee")}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === "employee" && styles.activeTabText,
                        ]}
                    >
                        Employee (Hire)
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Full Name */}
            <TextInput style={styles.input} placeholder="Enter Your Name" />

            {/* Mobile */}
            <TextInput
                style={styles.input}
                placeholder="+91 1712345678"
                keyboardType="phone-pad"
            />

            {/* Aadhaar (only for worker) */}
            {activeTab === "worker" && (
                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, { flex: 1, marginRight: 8 }]}
                        placeholder="Enter aadhar number"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity
                        style={styles.verifyButton}
                        onPress={() => router.push("/screen/VerifyAadharOTP")}
                    >
                        <Text style={styles.verifyText}>Verify</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Location */}
            <TextInput style={styles.input} placeholder="Delhi, India" />
            <Text style={styles.link}>Use Your Current Location</Text>

            {/* Skills (only for worker) */}
            {activeTab === "worker" && (
                <>
                    <TextInput style={styles.input} placeholder="Select Your Skill" />
                    <View style={styles.skillTags}>
                        {[
                            "Washer",
                            "Carpenter",
                            "Electrician",
                            "Plumber",
                            "Labour",
                            "Transport",
                        ].map((skill, i) => (
                            <View key={i} style={styles.skillTag}>
                                <Text style={styles.skillText}>{skill}</Text>
                            </View>
                        ))}
                    </View>
                </>
            )}

            {/* Plans (only for employee) */}
            {activeTab === "employee" && (
                <View style={styles.planContainer}>
                    <Text style={styles.planTitle}>Choose Your Plan</Text>

                    <View style={styles.planBox}>
                        <Text style={styles.planName}>Silver</Text>
                        <Text style={styles.planPrice}>Free /-</Text>
                        <Text style={styles.planDetail}>
                            ✔ 50 verified worker details / month
                        </Text>
                        <Text style={styles.planDetail}>
                            ✔ Limited contact / reach out
                        </Text>
                    </View>

                    <View style={styles.planBox}>
                        <Text style={styles.planName}>Gold</Text>
                        <Text style={styles.planPrice}>₹1499 /- per month</Text>
                        <Text style={styles.planDetail}>
                            ✔ 150 verified worker details / month
                        </Text>
                        <Text style={styles.planDetail}>
                            ✔ Unlimited contact / reach out
                        </Text>
                    </View>

                    <View style={styles.planBox}>
                        <Text style={styles.planName}>Platinum Plan</Text>
                        <Text style={styles.planPrice}>₹3499 /- per 3 months</Text>
                        <Text style={styles.planDetail}>✔ Unlimited worker details</Text>
                        <Text style={styles.planDetail}>
                            ✔ Unlimited contact / reach out
                        </Text>
                    </View>
                </View>
            )}

            {/* ✅ Sign Up Button with conditional navigation */}
            <TouchableOpacity
                style={styles.signUpButton}
                onPress={() =>
                    activeTab === "worker"
                        ? router.push("/screen/(CommonScreen)/WCongratulation")
                        : router.push("/screen/(CommonScreen)/HCongratulation")
                }
            >
                <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Footer */}
            <Text style={styles.footerText}>
                Already have an account? <Text style={styles.signUpLink}>Sign up</Text>
            </Text>
        </ScrollView>
    );
};

export default Registration;

// Styles remain the same
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    header: {
        marginBottom: 20,
        marginTop: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        textAlign: "center",
    },
    tabContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    tab: {
        flex: 1,
        padding: 12,
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
        padding: 12,
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
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
    },
    verifyText: {
        color: "#fff",
        fontWeight: "600",
    },
    link: {
        color: "#00CFA4",
        fontSize: 13,
        marginBottom: 15,
    },
    skillTags: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 20,
    },
    skillTag: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginRight: 8,
        marginBottom: 8,
    },
    skillText: {
        fontSize: 13,
    },
    planContainer: {
        marginTop: 10,
    },
    planTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
    },
    planBox: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    planName: {
        fontSize: 15,
        fontWeight: "600",
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
        padding: 15,
        borderRadius: 25,
        marginTop: 10,
    },
    signUpText: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
        fontSize: 16,
    },
    footerText: {
        textAlign: "center",
        marginTop: 15,
        fontSize: 13,
    },
    signUpLink: {
        color: "#00CFA4",
        fontWeight: "600",
    },
});
