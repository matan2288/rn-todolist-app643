import React, { useState, useEffect } from "react";
import { View,Text,TextInput, Platform,TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import uuid from "react-native-uuid";
import { DateComponentStyle } from "../Style/DateComponentStyle.js";
export const DateTimePickerComponent = (acceptedValueFromComponents) => {
  const [text, onChangeText] = useState("");
  const [initialDateValue, setDateValue] = useState("Pick Your Date");
  const [initialHourValue, setHourValue] = useState("Pick Your Time");

  const newTodoToAdd = {
    id: uuid.v4(),
    taskDescreption: text,
    dateChosen: initialDateValue,
    hourChosen: initialHourValue,
  };

  const [initialIdToSave, setIdToSave] = useState("");
  const [initialTextToUpdate, setTextToUpdate] = useState("");
  const [dateValueToUpdate, setDateValueToUpdate] = useState("");
  const [hourValueToUpdate, sethourValueToUpdate] = useState("");

  const todoToUpdate = {
    id: initialIdToSave,
    taskDescreption: initialTextToUpdate,
    dateChosen: dateValueToUpdate,
    hourChosen: hourValueToUpdate,
  };

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getFullYear();

    let fTime =  tempDate.getHours()  + " : " + tempDate.getMinutes()

    if (acceptedValueFromComponents.activateSubmitBtn) {
      setDateValue(fDate);
      setHourValue(fTime);
    } else if (acceptedValueFromComponents.activateUpdateBtn) {
      setDateValueToUpdate(fDate);
      sethourValueToUpdate(fTime);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  useEffect(() => {

    if (acceptedValueFromComponents.activateSubmitBtn) {
      setTextToUpdate(null);
      setDateValueToUpdate(null);
      sethourValueToUpdate(null);
    } else if (acceptedValueFromComponents.activateUpdateBtn) {
      setIdToSave(acceptedValueFromComponents.todoToUpdate.id);
      setTextToUpdate(acceptedValueFromComponents.todoToUpdate.taskDescreption);
      setDateValueToUpdate(acceptedValueFromComponents.todoToUpdate.dateChosen);
      sethourValueToUpdate(acceptedValueFromComponents.todoToUpdate.hourChosen);
    }
  }, []);

  return (
    <View style={DateComponentStyle.MainContainer}>
      {acceptedValueFromComponents.activateSubmitBtn ? (
        <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}

          <Text style={DateComponentStyle.Logo}>🗒</Text>

          <TextInput
            onChangeText={onChangeText}
            value={newTodoToAdd.taskDescreption}
            style={DateComponentStyle.TextInput}
            placeholder="Type your task here!"
            placeholderTextColor="#D5D5D5"
          />

          <Text
            onPress={showDatepicker}
            style={DateComponentStyle.DateAndHourText}
          >
            {newTodoToAdd.dateChosen}
          </Text>
          <Text
            onPress={showTimepicker}
            style={DateComponentStyle.DateAndHourText}
          >
            {newTodoToAdd.hourChosen}
          </Text>

          <TouchableOpacity
            style={DateComponentStyle.AddTodoBtn}
            onPress={() => {
              if (
                newTodoToAdd.taskDescreption.length == 0 ||
                newTodoToAdd.dateChosen == "Pick Your Date" ||
                newTodoToAdd.hourChosen == "Pick Your Time"
              ) {
                alert("Please fill in the required information");
              } else {
                acceptedValueFromComponents.activateSubmitBtn(newTodoToAdd);
              }
            }}
          >
            <Text style={DateComponentStyle.BtnsText}>✓</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}

          <Text style={DateComponentStyle.Logo}>📝</Text>
          <TextInput
            onChangeText={setTextToUpdate}
            value={todoToUpdate.taskDescreption}
            style={DateComponentStyle.TextInput}
          />
          <Text
            onPress={showDatepicker}
            style={DateComponentStyle.DateAndHourText}
          >
            {todoToUpdate.dateChosen}
          </Text>
          <Text
            onPress={showTimepicker}
            style={DateComponentStyle.DateAndHourText}
          >
            {todoToUpdate.hourChosen}
          </Text>

          <TouchableOpacity
            style={DateComponentStyle.AddTodoBtn}
            onPress={() => {
              if (todoToUpdate.taskDescreption.length == 0) {
                alert("Please fill in the required information");
              } else {
                acceptedValueFromComponents.activateUpdateBtn(todoToUpdate);
              }
            }}
          >
            <Text style={DateComponentStyle.BtnsText}>✓</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
