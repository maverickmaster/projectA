import React from "react";
import { View, Button, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Icon,
  Accordion,
} from "native-base";

function EventsHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to my event!</Text>
      <Text
        style={{
          fontStyle: "italic",
          fontSize: 48,
          textAlign: "center",
          color: "skyblue",
        }}
      >
        2021 Australian Open Tennis
      </Text>
      <Text>Melbourne, Australia: January 18-31, 2021</Text>
      <Image
        source={{
          uri:
            "https://events.com.au/wp-content/uploads/2020/03/Australian-Open.png",
        }}
        style={{ height: 200, width: null, flex: 10 }}
      />
      <Button
        title="Next Event- French Open"
        onPress={() => navigation.navigate("French Open")}
      ></Button>
    </View>
  );
}

function EventsSecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontStyle: "italic",
          fontSize: 48,
          textAlign: "center",
          color: "green",
        }}
      >
        2021 French Open Tennis
      </Text>
      <Text>Roland Garros, France May 17 -June 6, 2021</Text>
      <Image
        source={{
          uri:
            "https://images.prismic.io/fft-rg-site/58ff2d89-3f3d-4e85-859f-7c89d50e2581_RG_log_inst_cou_R.png?auto=compress,format",
        }}
        style={{ height: 200, width: null, flex: 10 }}
      />
      <Button
        title="Next Event- Wimbledon Championship"
        onPress={() => navigation.navigate("Wimbledon")}
      ></Button>
    </View>
  );
}

function EventsThirdScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontStyle: "italic",
          fontSize: 48,
          textAlign: "center",
          color: "purple",
        }}
      >
        2021 Wimbledon Championship Tennis
      </Text>
      <Text>London, United Kingdom: 28 June – 11 July, 2021</Text>
      <Image
        source={{
          uri:
            "https://static.toiimg.com/thumb/msid-78699698,width-1200,height-900,resizemode-4/.jpg",
        }}
        style={{ height: 200, width: null, flex: 10 }}
      />
      <Button
        title="Next Event- US Open"
        onPress={() => navigation.navigate("US Open")}
      ></Button>
    </View>
  );
}

function EventsFourthScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontStyle: "italic",
          fontSize: 48,
          textAlign: "center",
          color: "red",
        }}
      >
        2021 US Open
      </Text>
      <Text>New York; August 30 - September 12, 2021</Text>
      <Image
        source={{
          uri:
            "https://echobrandgroup.com/wp-content/uploads/2016/07/USOPEN_LOGO_960X960_144DPI_SIDE_PANEL_SQ.jpg",
        }}
        style={{ height: 200, width: null, flex: 10 }}
      />
      <Button
        title="Next Event- Australia Open"
        onPress={() => navigation.navigate("Australia Open")}
      ></Button>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Australia Open" component={EventsHomeScreen} />
      <Stack.Screen name="French Open" component={EventsSecondScreen} />
      <Stack.Screen name="Wimbledon" component={EventsThirdScreen} />
      <Stack.Screen name="US Open" component={EventsFourthScreen} />
    </Stack.Navigator>
  );
}
