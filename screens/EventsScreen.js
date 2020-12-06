import React from "react";
import { View, Button, StyleSheet, Image } from "react-native";
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

      <Card style={styles.card}>
        <CardItem>
          <Text>Melbourne, Australia: January 18-31, 2021 </Text>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Australian_Open_Logo_2017.svg/1200px-Australian_Open_Logo_2017.svg.png",
            }}
            style={{ height: 400, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>

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

      <Card style={styles.card}>
        <CardItem>
          <Text>Roland Garros , France: May 17 -June 6, 2021</Text>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://yt3.ggpht.com/a/AATXAJy7xtmtPyeVc-JKfVz_yg7aLwVqU3TltRKNrCgjKw=s900-c-k-c0x00ffffff-no-rj",
            }}
            style={{ height: 400, width: null, flex: 10 }}
          />
        </CardItem>
      </Card>

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
      <Card style={styles.card}>
        <CardItem>
          <Text>London, United Kingdom: 28 June – 11 July, 2021</Text>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://static.toiimg.com/thumb/msid-78699698,width-1200,height-900,resizemode-4/.jpg",
            }}
            style={{ height: 400, width: null, flex: 10 }}
          />
        </CardItem>
      </Card>
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
      <Card style={styles.card}>
        <CardItem>
          <Text>New York, USA: August 30 - September 12, 2021</Text>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://echobrandgroup.com/wp-content/uploads/2016/07/USOPEN_LOGO_960X960_144DPI_SIDE_PANEL_SQ.jpg",
            }}
            style={{ height: 400, width: null, flex: 10 }}
          />
        </CardItem>
      </Card>
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

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titleText: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
