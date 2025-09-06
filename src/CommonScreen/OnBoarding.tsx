// File: src/screen/Onboarding.tsx

import { Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold, useFonts } from "@expo-google-fonts/nunito";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

type OnboardingScreen = {
    id: string;
    title: string;
    description: string;
    image: any;
    buttonText: string;
};

const slides: OnboardingScreen[] = [
    {
        id: "1",
        title: "Find Jobs That Fit You",
        description:
            "Discover jobs near you or remote opportunities, tailored to your skills and interests. Browse, filter, and apply with ease to grow your career.",
        image: require("../../../assets/images/1.png"),
        buttonText: "Get Started",
    },
    {
        id: "2",
        title: "Post Jobs Instantly",
        description:
            "Whether you’re a business, professional, or just need quick help, Wala Work lets you post jobs in seconds and connect with the right people faster.",
        image: require("../../../assets/images/2.png"),
        buttonText: "Continue",
    },
    {
        id: "3",
        title: "Find Jobs Around You",
        description:
            "Explore opportunities within a 10 km range of your location. Get real-time local job updates and connect instantly with nearby employers.",
        image: require("../../../assets/images/3.png"),
        buttonText: "Next",
    },
];

export default function Onboarding() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const [fontsLoaded] = useFonts({ Nunito_800ExtraBold, Nunito_700Bold, Nunito_400Regular });
    if (!fontsLoaded) return <ActivityIndicator style={{ flex: 1 }} />;

    // 👉 Next button handler
    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            router.navigate("/screen/Login");
        }
    };

    return (
        <View style={styles.container}>
            {/* Top Header */}
            <View style={styles.header}>
                <Text style={styles.logo}>Wala Work</Text>
                <TouchableOpacity onPress={() => router.navigate("/screen/(CommonScreen)/Login")}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </View>

            {/* Slides */}
            <FlatList
                ref={flatListRef}
                data={slides}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(e) => {
                    const index = Math.round(
                        e.nativeEvent.contentOffset.x / width
                    );
                    setCurrentIndex(index);
                }}
                renderItem={({ item }) => (
                    <View style={[styles.slide, { width }]}>
                        {item.image && (
                            <Image
                                source={item.image}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        )}
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.desc}>{item.description}</Text>
                    </View>
                )}
            />

            {/* Pagination Dots */}
            <View style={styles.pagination}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { backgroundColor: index === currentIndex ? "#44D7B6" : "#101611ff" },
                        ]}
                    />
                ))}
            </View>

            {/* Bottom Button */}
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>
                    {slides[currentIndex].buttonText}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 20,
        marginTop: 20,
        position: "relative",
    },
    skipText: {
        fontFamily: "Nunito_400Regular",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 27,
        letterSpacing: -0.16, // approx -1% of 16px
        textAlign: "center",
        textAlignVertical: "center", // vertical-align: middle equivalent on RN
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
        width: 31,
        height: 27,
        opacity: 1,
    },
    logo: {
        fontFamily: "Nunito_800ExtraBold", // use the loaded 800 weight
        fontWeight: "800",
        fontSize: 22,
        lineHeight: 27,
        letterSpacing: -0.22, // ~ -1% of 22px
        color: "#44D7B6",
        position: "absolute",
        left: 0,
        right: 0,
        textAlign: "center",
        textAlignVertical: "center",
    },
    slide: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    image: {
        width: 379,
        height: 287,
        top: -10,
        left: 0,
        right: 0,
    },
    title: {
        fontFamily: "Nunito_700Bold",
        fontWeight: "700",
        fontSize: 28,
        lineHeight: 42,
        letterSpacing: -0.28,
        marginBottom: 10,
        textAlign: "center",
    },
    desc: {
        fontFamily: "Nunito_400Regular",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 27,
        letterSpacing: -0.16, // approx -1% of 16px
        textAlign: "center",
        color: "#555",

    },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#44D7B6",
        marginHorizontal: 5,
    },
    button: {
        backgroundColor: "#44D7B6",
        padding: 15,
        margin: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
});
