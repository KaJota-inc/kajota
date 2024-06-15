import {StyleSheet, TouchableOpacity} from "react-native";

import React, {useEffect, useState} from "react";
import {Text, View} from "@components/Themed";
import {COLORS, SIZES} from "@constants/Colors";
import {MainButton} from "@components/index";
import DropDownInput from "@components/DropDownInput";
import {TextInput} from "react-native-paper";
import {JsonCalendar} from "json-calendar";
import {IFLowProps} from "@pages/Auth/LGS/index";

const DOBAuth = ({handleStep,flow, option, currentIdx }:IFLowProps) => {

    const [day, setDay] = useState<string>("");
    const [month, setMonth] = useState<string>("");
    const [year, setYear] = useState<string>("");

    const defaultDays = Array.from({length: 31 - 1 + 1}, (v, k) => (1 + k).toString())
    const [days, setDays] = useState<string[]>(defaultDays);
    // const defaultMonths = Array.from({length: 31 - 1 + 1}, (v, k) => (1 + k).toString())
    const [months, setMonths] = useState<string[]>([]);
    const defaultYears = Array.from({length: 2020 - 1980 + 1}, (v, k) => (1980 + k).toString())
    const [years, setYears] = useState<string[]>(defaultYears);

    const [hideDays, setHideDays] = useState<boolean>(false);
    const [selectedDayIndex, setSelectedDayIndex] = useState<number>(1);

    const [hideMonths, setHideMonths] = useState<boolean>(false);
    const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(2);

    const [hideYears, setHideYears] = useState<boolean>(false);
    const [selectedYearIndex, setSelectedYearIndex] = useState<number>(3);


    // const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    // const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // const years = ["1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990"];

    const handleContinue = async () => {
        debug.log("here")
        handleStep(flow[currentIdx + 1])
    }

    useEffect(() => {
        // debug.log("year", year);
        setYear(years[selectedYearIndex]);
        const calendar = new JsonCalendar({year: Number(years[selectedYearIndex])});
        const daysInMonth = calendar.weeks.filter(wks => wks
            .filter(wk => wk.monthIndex === selectedMonthIndex)).map(wd => wd
            .map(d => d.day.toString()).flat()).flat()
        const uniqueDaysInMonth = new Set(daysInMonth)
        const finalDaysInMonth = [...uniqueDaysInMonth].sort((a, b) => Number(a) - Number(b));

        // debug.log("calendar.monthNames", calendar.monthNames);
        // debug.log("calendar.day",
        //     calendar.weeks.map(wk => wk.length)
        // );
        // calendar.weeks.map(wk => wk .flat().map(d => d.day.toString()))
        setMonths(calendar.monthNames);
        setDays(finalDaysInMonth)
    }, [selectedMonthIndex, selectedYearIndex]);


    return (
        <>

            <View style={styles.r1}>
                <Text style={styles.r1t2}>Enter Date of Birth</Text>
            </View>
            <View style={styles.r3}>
                <Text style={styles.r3t1}>Provide your date of birth</Text>
            </View>

            <View style={styles.r2}>
                {/*<View style={styles.r6}>*/}
                {/*<Text style={styles.r6t1}>Day</Text>*/}
                <TextInput
                    mode="outlined"
                    textColor={COLORS.light.text}
                    placeholder={"Day"}
                    placeholderTextColor={COLORS.light.textGray}
                    style={{...styles.inputContent}}
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={false}
                    selectionColor={COLORS.light.colorOne}
                    outlineStyle={styles.outlineStyle}

                    outlineColor={
                        hideDays
                            ? COLORS.light.colorOne
                            : "transparent"
                        // : COLORS.light.warning
                    }
                    activeOutlineColor={
                        hideDays
                            ? COLORS.light.colorOne
                            : "transparent"
                        // : COLORS.light.warning
                    }
                    value={days[selectedDayIndex]?.substring(0, 3)}
                    onChangeText={(val) => {
                        setDay(val);
                    }}
                    onPressIn={() => {
                        setHideDays(!hideDays);
                    }}
                    right={
                        <TextInput.Icon
                            style={styles.affix}
                            icon={() => (
                                <DropDownInput
                                    hideMenu={hideDays}
                                    items={days}
                                    openMenu={() => {
                                        setHideDays(true);
                                    }}
                                    closeMenu={() => {
                                        setHideDays(false);
                                    }}
                                    setSelectedItemIndex={(idx: number) => {
                                        setSelectedDayIndex(idx);
                                    }}
                                    selectedItemIndex={selectedDayIndex}
                                />
                            )}

                        />
                    }
                />
                {/*</View>*/}

                {/*<View style={styles.r6}>*/}
                {/*<Text style={styles.r6t1}>Month</Text>*/}
                <TextInput
                    mode="outlined"
                    textColor={COLORS.light.text}
                    placeholder={"Month"}
                    placeholderTextColor={COLORS.light.textGray}
                    style={{...styles.inputContent, width:"30%"}}
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={false}
                    selectionColor={COLORS.light.colorOne}
                    outlineStyle={styles.outlineStyle}
                    outlineColor={
                        hideMonths
                            ? COLORS.light.colorOne
                            : "transparent"
                        // : COLORS.light.warning
                    }
                    activeOutlineColor={
                        hideMonths
                            ? COLORS.light.colorOne
                            : "transparent"
                        // : COLORS.light.warning
                    }
                    value={months[selectedMonthIndex]?.substring(0, 3)}
                    onChangeText={(val) => {
                        setMonth(val);
                    }}
                    onPressIn={() => {
                        setHideMonths(!hideMonths);
                    }}
                    right={
                        <TextInput.Icon
                            style={styles.affix}
                            icon={() => (
                                <DropDownInput
                                    hideMenu={hideMonths}
                                    items={months}
                                    openMenu={() => {
                                        setHideMonths(true);
                                    }}
                                    closeMenu={() => {
                                        setHideMonths(false);
                                    }}
                                    setSelectedItemIndex={(idx: number) => {
                                        setSelectedMonthIndex(idx);
                                    }}
                                    selectedItemIndex={selectedMonthIndex}
                                />
                            )}

                        />
                    }
                />
                {/*</View>*/}

                {/*<View style={styles.r6}>*/}
                {/*<Text style={styles.r6t1}>Year</Text>*/}
                <TextInput
                    mode="outlined"
                    textColor={COLORS.light.text}
                    placeholder={"Year"}
                    placeholderTextColor={COLORS.light.textGray}
                    style={{...styles.inputContent, width: "35%",}}
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={false}
                    selectionColor={COLORS.light.colorOne}

                    outlineStyle={styles.outlineStyle}
                    outlineColor={
                        hideYears
                            ? COLORS.light.colorOne
                            : "transparent"
                        // : COLORS.light.warning
                    }
                    activeOutlineColor={
                        hideYears
                            ? COLORS.light.colorOne
                            : "transparent"
                        // : COLORS.light.warning
                    }
                    value={years[selectedYearIndex]?.substring(0, 3)}
                    // onChangeText={(val) => {
                    //     debug.log("val",val)
                    //     setYear(val);
                    // }}
                    onPressIn={() => {
                        setHideYears(!hideYears);
                    }}
                    right={
                        <TextInput.Icon
                            style={styles.affix}
                            icon={() => (
                                <View style={styles.affixContent}>
                                <DropDownInput
                                    hideMenu={hideYears}
                                    items={years}
                                    openMenu={() => {
                                        setHideYears(true);
                                    }}
                                    closeMenu={() => {
                                        setHideYears(false);
                                    }}
                                    setSelectedItemIndex={(idx: number) => {
                                        setSelectedYearIndex(idx);
                                    }}
                                    selectedItemIndex={selectedYearIndex}
                                />
                                </View>
                            )}

                        />
                    }
                />
                {/*</View>*/}
            </View>


            <View style={styles.r9}>
                <MainButton
                    title={"Continue"}
                    onPressFunction={() => {
                        handleContinue()
                    }}
                    err={false}
                    btnStyle={styles.r9t}

                />
            </View>
        </>
    );
};

export default DOBAuth;

const styles = StyleSheet.create({
    r1: {
        flexDirection: "row",
        // justifyContent: "center",
        width: "100%",
        // alignItems: "center",
        marginTop: "5%",
        marginBottom: "2%",
        backgroundColor: "transparent",
    },
    r1t1: {},

    r1t2: {
        // marginLeft: "8%",
        color: COLORS.light.text,
        fontSize: SIZES.sizeNine,
        fontWeight: "700",
        // textAlign: "center",
    },
    r3: {
        width: "100%",
        marginTop: 5,
        marginBottom: 15,
    },
    r3t1: {
        marginBottom: 18,
        fontWeight: "300",
        fontSize: SIZES.sizeSixB,
    },
    inputContent: {
        fontSize: SIZES.sizeSeven,
        fontWeight: "500",
        color: COLORS.light.backgroundGray,
        width: "25%",
        backgroundColor: COLORS.light.backgroundGray,
        marginBottom: 8,
        paddingRight: "-5%",
        marginRight: "3%",
        // borderRadius:30,
        // borderWidth:2
    },
    inputOutline: {
        borderRadius: 30,
    },
    error: {
        color: COLORS.light.warning,
        fontSize: SIZES.sizeSix,
        fontWeight: "500",
        // textAlign: "center",
        marginLeft: 5
    },
    r9: {
        marginBottom: 10,
        marginTop: "2%",
        // backgroundColor: COLORS.light.colorOne,
        paddingVertical: 5,
        width: "100%",
        alignItems: "center"
    },
    r9t: {
        // width: "80%",
        backgroundColor: COLORS.light.colorOne,
    },
    r2: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",
        marginTop: "3%",
        // marginBottom: "2%",
        // borderWidth: 1,
        marginBottom: "2%",
    },
    r2t1: {
        backgroundColor: COLORS.light.backgroundGray,
        padding: 10,
        borderRadius: 30
    },

    r6: {
        width: "45%",
        // justifyContent:"space-between"
        // marginTop: 5,
        // marginBottom: 15,
        // borderWidth: 1
    },
    r6t1: {
        marginBottom: 10,
        fontWeight: "300",
        fontSize: SIZES.sizeSixB,
    },
    r6a: {
        flexDirection: "row",
        // width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "transparent",
        // borderWidth: 1
    },
    r6b: {
        // borderTopWidth: 2,
        // borderTopColor: COLORS.light.textGray,
        // width: "30%",

        backgroundColor: "transparent",
        marginLeft: 10
    },
    r6c: {
        borderRightWidth: 2,
        borderRightColor: COLORS.light.textGray,
        height: "70%",
        backgroundColor: "transparent",
    },

    r6d: {
        // borderTopWidth: 2,
        // borderTopColor: COLORS.light.textGray,
        // width: "30%",
        color: COLORS.light.active,
        fontSize: SIZES.sizeSeven,
        fontWeight: "400",
        backgroundColor: "transparent",
        marginLeft: "4%"
    },
    r7: {
        width: "100%",
        backgroundColor: "transparent",
        flexDirection: "row",
        marginTop: "7%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        flexWrap: "wrap"
    },
    r7t1: {
        color: COLORS.light.text,
        fontSize: SIZES.sizeSixB,
        fontWeight: "400",
        textAlign: "center",
    },
    r7t2: {
        color: COLORS.light.colorOne,
        fontSize: SIZES.sizeSeven,
        fontWeight: "700",
        textAlign: "center",
    },
    outlineStyle: {
        borderRadius: 12,
    },
    affix: {
        // color: COLORS.light.textGray,
        // fontSize: SIZES.sizeSeven,
        // marginHorizontal: "2%",
        // width: "10%",
        // borderWidth: 1,
        // alignItems: "flex-start",
        // marginRight: "70%",
        // paddingLeft: "25%",
        backgroundColor:"transparent"
    },
    affixContent: {
        // color: COLORS.light.textGray,
        // fontSize: SIZES.sizeSeven,
        // marginHorizontal: "2%",
        // width: "10%",
        // borderWidth: 1,
        // alignItems: "flex-start",
        // marginLeft: "50%",
        // paddingLeft: "25%",
        backgroundColor:"transparent"
    },
});
