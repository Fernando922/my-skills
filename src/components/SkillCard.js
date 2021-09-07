import React from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

export function SkillCard({ skill, index }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textSkill: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
