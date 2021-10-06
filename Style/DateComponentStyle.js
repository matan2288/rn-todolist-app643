import { StyleSheet } from "react-native";
export const DateComponentStyle = StyleSheet.create({
  MainContainer: {
    height: "60%",
  },

  Logo: {
    fontSize: 45,
    color: "white",
    alignSelf: "center",
  },
  TextInput: {
    fontSize: 17,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    margin: 15,
    width: "90%",
  },

  DateAndHourText: {
    fontSize: 16,
    color: "#D5D5D5",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    margin: 15,
    width: "90%",
    textAlign: "left",
  },

  

  AddTodoBtn: {
    elevation: 8,
    backgroundColor: "#009688",
    alignSelf: "center",
    width: 180,

    borderRadius: 100,
    margin: 15,
  },
  BtnsText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
