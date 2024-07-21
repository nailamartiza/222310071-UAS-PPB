import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Linking, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';

const User = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedRoutes, setSelectedRoutes] = useState([]);

  const routes = [
    { name: 'Perumahan Asri Pratama', street: 'Jl. Asri Pratama', locations: 15, link: "https://maps.app.goo.gl/TbpURrFrW8j94axN6", days: [0] },
    { name: 'Perumahan Indraprasta 2', street: 'Jl. Drupada 7', locations: 10, link: "https://maps.app.goo.gl/VKFcN3stvrrVKAzQA", days: [1, 2] },
    { name: 'Perumahan Harmoni Park', street: 'Jl. Gunung Kapur', locations: 20, link: "https://maps.app.goo.gl/s4owhLDJHqru2SrS9", days: [2, 3] },
    { name: 'Perumahan Bogor Asri', street: 'Jl. Roda Pembangunan', locations: 15, link: "https://maps.app.goo.gl/DW3RcD9sp1raEHwg8", days: [0, 3] },
    { name: 'Perumahan Taman Heulang', street: 'JL. Bango', locations: 5, link: "https://maps.app.goo.gl/voxpqbMbs5teHTZZ8", days: [4, 5] },
    { name: 'IBIK Kesatuan', street: 'JL. Rangga Gading', locations: 2, link: "https://maps.app.goo.gl/RXLT6ZjA6Ne37a5QA", days: [5, 6] },
    { name: 'Villa Citra Bantarjati', street: 'JL. Villa Citra', locations: 15, link: "https://maps.app.goo.gl/zmE7uWfwv5KAQda26", days: [6] }
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const linkClick = async (url) => {
    await Linking.openURL(url);
  };

  useEffect(() => {
    if (selectedDay === null) {
      setSelectedRoutes(routes);
    } else {
      const filteredRoutes = routes.filter(route => route.days.includes(selectedDay));
      setSelectedRoutes(filteredRoutes);
    }
  }, [selectedDay]);

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#9AD280", padding: 20 }}>
        <Text style={styles.welcome}>Welcome,</Text>
        <Text style={styles.username}>User</Text>
        <Text style={styles.subtitle}>Time to collect and clean, let's clean up the city!</Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.header}>Routes & Schedule</Text>
      </View>
      <View style={styles.daySelector}>
        {daysOfWeek.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayName}>{day}</Text>
            <TouchableOpacity onPress={() => setSelectedDay(index)}>
              <Text style={[styles.day, selectedDay === index && styles.selectedDay]}>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={styles.dayContainer}>
          <Text style={styles.dayName}>Routes</Text>
          <TouchableOpacity onPress={() => setSelectedDay(null)}>
            <Text style={[styles.day, selectedDay === null && styles.selectedDay]}>All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.cardContainer}>
        {selectedRoutes.map((route, index) => (
          <Pressable key={index} onPress={async () => await linkClick(route.link)}>
            <Card style={styles.card}>
              <Card.Content>
                <Title>{route.name}</Title>
                <Paragraph>{route.street}</Paragraph>
                <View style={styles.cardFooter}>
                  <View style={styles.cardFooterItem}>
                  </View>
                  <View style={styles.cardFooterItem}>
                    <IconButton icon="map-marker" size={20} />
                    <Text>{route.locations} lokasi</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  welcome: {
    fontSize: 24,
    marginTop: 20,
  },
  username: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: -6,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 15,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: -15,
  },
  daySelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginBottom: 22,
    marginHorizontal: 25
  },
  dayContainer: {
    alignItems: 'center',
  },
  dayName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  day: {
    width: 30,
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 15,
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 'bold',
  },
  selectedDay: {
    backgroundColor: '#8BC34A',
    color: '#fff',
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    marginBottom: 16,
    borderRadius: 22,
    marginHorizontal: 15
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -35,
  },
  cardFooterItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default User;
