import React from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  Header,
  List,
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Text,
} from "native-base";

const contactsData = [
  {
    name: "Novak Djokovic",
    rank: "World No.1",
    country: "Serbia",
    pic:
      "https://images6.fanpop.com/image/photos/40800000/Novak-Djokovic-novak-djokovic-40814089-300-300.png",
  },
  {
    name: "Rafael Nadal",
    rank: "World No.2",
    country: "Spain",
    pic:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/tennis/players/full/261.png&w=350&h=254",
  },
  {
    name: "Dominic Thiem",
    rank: "World No.3",
    country: "Austria",
    pic:
      "https://www.atptour.com/-/media/tennis/players/head-shot/2020/thiem_head_ao20.png",
  },
  {
    name: "Daniil Medvedev",
    rank: "World No.4",
    country: "Russia",
    pic:
      "https://www.atptour.com/-/media/tennis/players/head-shot/2020/medvedev_head_ao20.png",
  },
  {
    name: "Roger Federer",
    rank: "World No.5",
    country: "Switzerland",
    pic:
      "https://bloximages.chicago2.vip.townnews.com/lacrossetribune.com/content/tncms/assets/v3/editorial/8/ca/8ca1fa21-6965-5a29-9917-1b5a8af18d84/5a6e6ecd7c9c4.image.png?resize=1200%2C1200",
  },
];

export default function ContactScreen() {
  return (
    <Container>
      <Content>
        <Text
          style={{
            fontStyle: "italic",
            padding: 15,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 28,
            textAlign: "center",
            color: "red",
          }}
        >
          2021 World Top 5 Ranked Players
        </Text>
        <List>
          {contactsData.map((item) => {
            return (
              <ListItem avatar key={item.name}>
                <Left>
                  <Thumbnail source={{ uri: item.pic }} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>
                    {item.rank}, {item.country}
                  </Text>
                </Body>
              </ListItem>
            );
          })}
        </List>
      </Content>
    </Container>
  );
}
