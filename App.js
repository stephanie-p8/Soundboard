import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< Sampler
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import SamplerEditionNavigation from "./components/navigation/Navigation";
import AddSampler from "./components/sampler/addSampler";

const Tabs = createBottomTabNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Sampler":
                iconName = focused ? "musical-notes" : "musical-notes-outline";
                break;
              case "Add sampler":
                iconName = focused ? "add-circle" : "add-circle-outline";
                break;
              default:
                iconName = "ban";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{ activeTintColor: "tomato", inactiveTintColor: "gray" }}
      >

        <Tabs.Screen name="Sampler" component={SamplerEditionNavigation}/>
        <Tabs.Screen name="Add sampler">
          {(props) => <AddSampler {...props} />}
        </Tabs.Screen>
        
      </Tabs.Navigator>
    </NavigationContainer>
=======


export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
>>>>>>> main
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
<<<<<<< Sampler

export default App;
=======
>>>>>>> main
