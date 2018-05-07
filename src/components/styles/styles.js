
//Styles for Modals
export const buttonContainerStyle = { 
    flex: 1, 
    width: 300,
    justifyContent: "space-around", 
    alignItems: "center", 
    flexDirection: "row" 
};

export const viewStyle = { 
    marginTop: 100, 
    paddingRight: 10, 
    paddingLeft: 10, 
    flex: 1 
};

export const cardItemStyle = { 
    height: 300, 
    backgroundColor: "#f5f5f5",
    borderRadius: 1,
    borderColor: 'black' 
};

export const center = { alignSelf: "center" };

export const buttonStyle = {
    alignSelf: 'center',
}
export const buttonTextStyle = { 
    color: "#ffc107",
    fontSize: 18
};
//Style for custom cardItem component 
export const cardItemContainerStyle = { borderBottomWidth: 1, borderRadius: 3, padding: 5, backgroundColor: "#fafafa", justifyContent: "flex-start", flexDirection: "row", borderColor: "#ddd", position: "relative" };

export const cardContainerStyle = { 
    borderWidth: 1, 
    borderRadius: 40, 
    borderColor: "#ddd", 
    borderBottomWidth: 0, 
    shadowColor: "black", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 2, 
    elevation: 1, 
    marginLeft: 5, 
    marginRight: 5, 
    marginTop: 10 
}; //rounded edges //no shadows on side //round corners for corners

//Header styles
export const headerBackgroundColor = { backgroundColor: "#fafafa", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, elevation: 2 };

export const headerTextStyle = { 
    color: "black", 
    fontSize: 25,
    fontWeight: '400', 
    fontFamily: 'System'
 
};

export const iconStyle = { color: "#ffc107", fontSize: 35 };

//flash card style
export const flashCardTextStyle = { 
    fontSize: 32, 
    fontFamily: 'System'
};

export const flashCardItemStyle = { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
};

export const flashCardStyle = { 
    elevation: 3, 
    height: 300, 
    shadowColor: "black", 
    marginTop: 100, 
    marginLeft: 20, 
    marginRight: 20, 
    borderRadius: 4, 
    borderWidth: 10, 
    borderTopWidth: 7,
    borderTopColor: "#ffc107" };

export const listItemTextStyle = {
    fontSize: 20,
    fontWeight: '200',
}

export const appBackGroundColor = { 
    backgroundColor: "#ffffff" 
};

export const startTextButtonStyle = { 
    fontSize: 20, 
    color: "white", 
};

export const listItemStyle = {
  flex: 1,
  flexDirection: "row",
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderLeftWidth: 0,
  borderBottomColor: "#ddd",
  borderBottomWidth: 1,
  borderStyle: "solid",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingLeft: 20,
  paddingRight: 20,
  height: 50
};

export const listItemIconStyle ={
 alignSelf: "flex-end", color: "#ffc107", fontSize: 35 
}

export const studyScreenView = { 
    flexDirection: "row", 
    flex: 1, 
    position: "absolute", 
    bottom: 50, 
    left: 50, 
    right: 50, 
    justifyContent: "space-between", 
    padding: 15 
};