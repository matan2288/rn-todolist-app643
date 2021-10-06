import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { AddTodoStyle } from "../Style/AddTodoStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DateTimePickerComponent } from "./DateTimePickerComponent.js";

export const AddTodoScreen = ({ route, navigation }) => {
  const activateSubmitBtn = (newTodoToAdd) => {
    try {
      AsyncStorage.getItem("@storage_Key", async (err, result) => {
    

      if (result) {
         

          const currentParsedTodoListToUpdate = JSON.parse(result);

          currentParsedTodoListToUpdate.push(newTodoToAdd);

          AsyncStorage.setItem(
            "@storage_Key",
            JSON.stringify(currentParsedTodoListToUpdate)
          );

          navigation.navigate("Home");
        } else {
          alert("Data Not Found");
        }
      });
    } catch (e) {
      alert("OH NO");
    }
  };

  return (
    <KeyboardAvoidingView style={AddTodoStyle.addTodoMainContainer}>
      <View>
        <DateTimePickerComponent activateSubmitBtn={activateSubmitBtn} />
      </View>
    </KeyboardAvoidingView>
  );
}; 
