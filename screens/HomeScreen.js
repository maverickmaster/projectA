import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon,
  Accordion,
} from "native-base";

const dataArray = [
  {
    title: "What is ATP?",
    content:
      "The Association of Tennis Professionals (ATP) is the governing body of the men's professional tennis circuits - the ATP Tour, the ATP Challenger Tour and the ATP Champions Tour.",
  },
  {
    title: "Why was it formed?",
    content:
      "It was formed to protect the interests of professional tennis players.",
  },
  {
    title: "Who formed it?",
    content: "It was formed in September 1972 by Donald Dell, Jack Kramer.",
  },
];

function HomeHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Association of Tennis Professionals 2021{" "}
      </Text>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>Welcome</Text>
            <Text>
              Thanks for downloading our app! Here, you'll find all kinds of
              information about our upcoming event. It'll be great!
            </Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://static1.squarespace.com/static/560195f3e4b0fcc5265b7b78/562b0f76e4b0b7066cf45af6/5c70532024a694a5a1574f64/1560235322136/hn1w1tvms4y11.jpg?format=1500w",
            }}
            style={{ height: 200, width: null, flex: 10 }}
          />
        </CardItem>
      </Card>
      <Accordion style={styles.accordion} dataArray={dataArray} expanded={0} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomeHomeScreen} />
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
