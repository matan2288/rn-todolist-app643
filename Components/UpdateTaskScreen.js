import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DateTimePickerComponent } from "./DateTimePickerComponent.js";
import { UpdateTodoScreenStyle } from "../Style/UpdateTodoScreenStyle.js";

export const UpdateTaskScreen = ({ route, navigation }) => {
  const { taskId, selectedTodoToUpdate } = route.params;

  const [todoToUpdate, settodoToUpdate] = useState([]);

  const showTodoDataToUpdate = async () => {
    AsyncStorage.getItem("@storage_Key", async (err, result) => {
      if (result) {
        const currentTodoListOnLocalStorageParsed = JSON.parse(result);

        const findObjById = currentTodoListOnLocalStorageParsed.find(
          (x) => x.id === taskId
        );

        settodoToUpdate([findObjById]);
      } else {
        await AsyncStorage.setItem("@storage_Key", JSON.stringify([]));
      }
    }).catch((err) => alert("Error"));
  };

  const activateUpdateBtn = async (pushUpdatedTodoToThisList) => {
    var currentTodoListOnLocalStorage = await AsyncStorage.getItem(
      "@storage_Key"
    );

    const currentTodoListOnLocalStorageParsed = JSON.parse(
      currentTodoListOnLocalStorage
    );

    const indexFetchById = currentTodoListOnLocalStorageParsed.findIndex(
      (item) => item.id === taskId
    );

    currentTodoListOnLocalStorageParsed.splice(
      indexFetchById,
      1,
      pushUpdatedTodoToThisList
    );

    await AsyncStorage.setItem(
      "@storage_Key",
      JSON.stringify(currentTodoListOnLocalStorageParsed)
    );
    navigation.navigate("Home");
  };

  useEffect(() => {
    showTodoDataToUpdate();
  }, []);


   
  return (
    <View style={UpdateTodoScreenStyle.MainContainer}>
      {todoToUpdate.map((item, index) => (
        <View key={item.id}>
          <DateTimePickerComponent
            activateUpdateBtn={activateUpdateBtn}
            todoToUpdate={selectedTodoToUpdate}
          />
        </View>
      ))}
    </View>
  );
};
