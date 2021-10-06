import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, CheckBox, Image} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HomeScreenStyle } from "../Style/HomeScreenStyle";
import reactLogoImgSrc from "../Style/IMG/reactLogo.png";

export const HomeScreenTodoList = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);

  const [todosToRender, setTodosToRender] = useState([]);

  const getData = async () => {
    try {
      const currentTodoListOnLocalStorage = await AsyncStorage.getItem(
        "@storage_Key"
      );
      if (currentTodoListOnLocalStorage == null) {
        AsyncStorage.setItem("@storage_Key", JSON.stringify(todosToRender));
      } else {
        setTodosToRender(JSON.parse(currentTodoListOnLocalStorage));
      }
    } catch (e) {
      alert(e);
    }
  };

  const removeSingleTodo = async (taskId) => {
    var currentTodoListOnLocalStorage = await AsyncStorage.getItem(
      "@storage_Key"
    );

    const currentTodoListOnLocalStorageParsed = JSON.parse(
      currentTodoListOnLocalStorage
    );

    const indexFetchById = currentTodoListOnLocalStorageParsed.findIndex(
      (item) => item.id === taskId
    );
    currentTodoListOnLocalStorageParsed.splice(indexFetchById, 1);

    await AsyncStorage.setItem(
      "@storage_Key",
      JSON.stringify(currentTodoListOnLocalStorageParsed)
    );
  };

  useEffect(() => {
    getData();
    todosToRender;
  }, [removeSingleTodo]);

  return (
    <View style={HomeScreenStyle.HomeScreenMainContainer}>
      <View style={HomeScreenStyle.TodosMainContainer}>
        {todosToRender.length > 0 ? (
          <ScrollView>
            <Text style={HomeScreenStyle.Logo}> 📆 </Text>
            {todosToRender.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate("UpdateTodo", {
                    taskId: item.id,
                    selectedTodoToUpdate: item,
                  })
                }
                style={HomeScreenStyle.SingleTodoContainer}
              >
                <View style={HomeScreenStyle.SingleTodoTextContainer}>
                  <Text style={HomeScreenStyle.SingleTodoTaskDescreption}>
                    <Text>{item.taskDescreption}</Text>
                  </Text>
                  <Text style={HomeScreenStyle.SingleTodoHourAndDate}>
                    <Text>{item.dateChosen}</Text>
                    {"  "}
                    <Text>{item.hourChosen}</Text>
                  </Text>
                </View>

                <CheckBox
                  style={HomeScreenStyle.CheckboxStyle}
                  value={isSelected}
                  onValueChange={() => {
                    removeSingleTodo(item.id);
                  }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View>
            <Text style={HomeScreenStyle.Logo}> 📆 </Text>
            <Text style={HomeScreenStyle.EmptyListMessage}>
              Please add some todos
            </Text>
          </View>
        )}

        <Image
          style={HomeScreenStyle.TransparentReactBackgroundLogo}
          source={reactLogoImgSrc}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("AddTodo")}
        style={HomeScreenStyle.AddTodoPlusButton}
      >
        <Text style={HomeScreenStyle.PlusBtnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
