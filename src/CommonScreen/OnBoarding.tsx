import React, { useRef, useState } from "react";
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  Dimensions, 
  StyleSheet 
} from "react-native";
import { useFonts, Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const { width, height } = Dimensions.get("window");

const slides = [
  { id: '1', title: 'Welcome', description: 'Discover our app features!', image: require('../assets/slide1.png') },
  { id: '2', title: 'Stay Connected', description: 'Connect with friends easily.', image: require('../assets/slide2.png') },
  { id: '3', title: 'Get Started', description: 'Sign up and enjoy!', image: require('../assets/slide3.png') },
];

export default function Onboarding({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace("Home"); // Navigate to Home or Login screen
    }
  };

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  };

  const viewConfigRef = { viewAreaCoveragePercentThreshold: 50 };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef}
        ref={flatListRef}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    width,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: width * 0.8,
    height: height * 0.5,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: "Nunito_800ExtraBold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontFamily: "Nunito_400Regular",
    textAlign: "center",
    color: "#555",
  },
  footer: {
    position: "absolute",
    bottom: 50,
    width,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4e8cff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Nunito_700Bold",
  },
});
