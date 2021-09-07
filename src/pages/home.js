import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  StatusBar,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]);
    setNewSkill("");
  }

  function defineCorrectGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good morning!");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon!");
    } else {
      setGreeting("Good evening!");
    }
  }

  useEffect(() => {
    defineCorrectGreeting();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Fernando!</Text>

      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        value={newSkill}
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        onSubmitEditing={handleAddNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        renderItem={({ item }) => <SkillCard skill={item} />}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    padding: Platform.OS === "ios" ? 15 : 10,
    color: "#FFF",
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings: {
    color: "#fff",
  },
});
