import { StyleSheet } from "react-native";
export const HomeScreenStyle = StyleSheet.create({
  HomeScreenMainContainer: {
    backgroundColor:
      "radial-gradient(circle, rgba(0,65,133,1) 0%, rgba(34,89,159,1) 100%)",
    minHeight: "100%",
    flex: 1,
  },

  Image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },

  TodosMainContainer: {
    flex: 6,
    marginTop: 10,
  },

  SingleTodoContainer: {
    flexDirection: "row",
    flex: 2,
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    fontSize: 23,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "transparent",
    margin: 5,
    borderRadius: 15,
    backgroundColor:
      "radial-gradient(circle, rgba(35,86,138,1) 0%, rgba(46,109,190,1) 100%)",
  },

  SingleTodoTextContainer: {
    flexDirection: "column",
    textAlign: "left",
    flex: 2,
    color: "white",
    fontSize: 23,
    margin: 10,
    marginLeft: 18,
  },

  SingleTodoTaskDescreption: {
    textAlign: "left",
    flex: 2,
    color: "white",
    fontSize: 17,

    borderRadius: 10,
  },

  SingleTodoHourAndDate: {
    textAlign: "left",
    flex: 2,
    color: "#CDCDCD",
    fontSize: 10,
    margin: 2,
    borderRadius: 10,
 
  },

  CheckboxStyle: {
    margin: 5,
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
  AddTodoPlusButton: {
    elevation: 8,
    backgroundColor: "#009688",
    position: "absolute",
    top: "85%",
    right: "6%",
    zIndex: 1,
    width: 75,
    height: 75,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  
  },

  Logo: {
    fontSize: 45,
    margin: 10,
    color: "white",
    alignSelf: "center",
  },

  EmptyListMessage: {
   color: 'white',
   textAlign:'center',
   margin: 20
  },


  
  TransparentReactBackgroundLogo: {
    width: 250,
    height: 250,
    opacity: 0.03,
    alignSelf: "center",
    position: "absolute",
    top: "30%",
    zIndex: -1,
    aspectRatio: 1 * 1.4,
  },

  EmptyList: {
    color: "white",
    alignSelf: "center",
    margin: 25,
    fontSize: 15,
  },
  PlusBtnText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
