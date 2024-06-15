import React, {useState} from "react";
import {StyleSheet} from "react-native";
import {Button, Menu, Divider} from "react-native-paper";
import {Text, View} from "./Themed";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {COLORS} from "@constants/Colors";

type IProps = {
    hideMenu: boolean;
    items: string[];
    openMenu: () => void;
    closeMenu: () => void;
    setSelectedItemIndex: (idx: number) => void;
    selectedItemIndex: number;
};

const DropDownInput = ({
                           hideMenu,
                           items = ["Item 1", "Item 2", "Item 3"],
                           openMenu = () => {
                           },
                           closeMenu = () => {
                           },
                           setSelectedItemIndex = (idx: number) => {
                           },
                           selectedItemIndex = 0,
                       }: IProps) => {
    //   const [visible, setVisible] = useState(false);
    //   const [selectedItem, setSelectedItem] = useState<string>("");

    const handleMenuItemPress = (item: number) => {
        setSelectedItemIndex(item);
        closeMenu();
    };

    return (
        <View style={styles.container}>
            <Menu
                visible={hideMenu}
                onDismiss={closeMenu}
                anchor={
                    // <Ionicons
                    //   name={hideMenu ? "ios-caret-up" : "ios-caret-down"}
                    //   size={18}
                    //   color={COLORS.light.text}
                    //   onPress={openMenu}
                    // />
                    <Ionicons
                        name={hideMenu ? "chevron-up" : "chevron-down"}
                        size={18}
                        color={COLORS.light.text}
                        onPress={openMenu}
                    />
                }
                contentStyle={styles.menuContainer}
            >
                {items.map((item, index) => (
                    <Menu.Item
                        key={index}
                        onPress={() => handleMenuItemPress(index)}
                        title={item}
                        style={
                            selectedItemIndex === index
                                ? styles.menuItemSelected
                                : styles.menuItem
                        }
                        leadingIcon={() => (
                            <View style={styles.radioButton}>
                                <MaterialIcons
                                    name={
                                        selectedItemIndex === index
                                            ? "radio-button-on"
                                            : "radio-button-unchecked"
                                    }
                                    size={24}
                                    color={COLORS.light.colorOne}
                                />
                            </View>
                        )}
                    />
                ))}
                <Divider/>
            </Menu>
        </View>
    );
};

export default DropDownInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        // borderWidth: 1,
    },
    menuContainer: {
        backgroundColor: COLORS.light.background,

        // backgroundColor: "transparent",
        // borderWidth: 1,
        // width:
    },
    menuItem: {
        // borderWidth: 1,
        backgroundColor: "transparent",
        marginBottom: 8,
        // borderColor: COLORS.Light.colorOne,
        // borderRadius: 5,
        // paddingVertical: 10,
        height: 52,
    },
    menuItemSelected: {
        borderWidth: 1,
        backgroundColor: COLORS.light.background,
        marginBottom: 8,
        borderColor: COLORS.light.colorOne,
        borderRadius: 5,
        // paddingVertical: 10,
        height: 52,
        marginHorizontal: 3,
    },
    radioButton: {
        backgroundColor: "transparent",
    },
});
