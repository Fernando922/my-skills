import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import showCurrentGreeting from "../utils/showCurrentGreeting";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    if (!newSkill) {
      return;
    }

    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills([...mySkills, data]);
    setNewSkill("");
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldState) => oldState.filter((skill) => skill.id != id));
  }

  function defineCurrentGreeting() {
    setGreeting(showCurrentGreeting);
  }

  useEffect(() => {
    defineCurrentGreeting();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title} testID="welcome">
        Welcome, Fernando!
      </Text>

      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        testID="input-new"
        value={newSkill}
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        onSubmitEditing={handleAddNewSkill}
      />

      <Button onPress={handleAddNewSkill} title="Add" testID="button-add" />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      {!!mySkills.length && (
        <FlatList
          testID="flat-list-skills"
          data={mySkills}
          keyboardShouldPersistTaps="always"
          renderItem={({ item }) => (
            <SkillCard
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
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
    marginTop: 30,
    borderRadius: 7,
  },
  greetings: {
    color: "#fff",
  },
});
