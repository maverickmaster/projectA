import React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to my event!</Text>
      <Text>2021 Australian Open Tennis</Text>
      <Text>Melbourne, Australia: January 18-31, 2021</Text>
      <Button
        title="Next Event- French Open"
        onPress={() => navigation.navigate("EventsSecond")}
      ></Button>
    </View>
  );
}

function EventsSecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>2021 French Open Tennis</Text>
      <Text>Roland Garros, France May 17 -June 6, 2021</Text>
      <Button
        title="Next Event- Wimbledon Championship"
        onPress={() => navigation.navigate("EventsThird")}
      ></Button>
    </View>
  );
}

function EventsThirdScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>2021 Wimbledon Championship</Text>
      <Text>London, United Kingdom 28 June – 11 July, 2021</Text>
      <Button
        title="Next Event- US Open"
        onPress={() => navigation.navigate("EventsFourth")}
      ></Button>
    </View>
  );
}

function EventsFourthScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>2021 US Open</Text>
      <Text>New York; August 30 - September 12, 2021</Text>
      <Button
        title="Next Event- Australia Open"
        onPress={() => navigation.navigate("EventsHome")}
      ></Button>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsHomeScreen} />
      <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
      <Stack.Screen name="EventsThird" component={EventsThirdScreen} />
      <Stack.Screen name="EventsFourth" component={EventsFourthScreen} />
    </Stack.Navigator>
  );
}
