import {ScrollView, StatusBar, StyleSheet, TouchableOpacity} from "react-native";

import React, {useEffect, useState} from "react";
import {Text, View} from "@components/Themed";
import {AuthProps, AuthRoutes} from "@shared/const/routerAuth";
import {COLORS, SIZES} from "@constants/Colors";
import {AntDesign, Feather} from "@expo/vector-icons";
import PhoNoV from "@pages/Auth/LGS/PhoNoV";

type NavigationProps = AuthProps<AuthRoutes.LGS>;

const LGS: React.FC<NavigationProps> = ({navigation}) => {

    const [step, setStep] = useState<number>(0);


    return (
        <View style={styles.main}>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.container}>
                <View style={styles.subContainer}>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContent}
                        style={styles.scroll}
                    >
                        <View style={styles.r2}>
                            <TouchableOpacity
                                style={styles.r2t1}
                                onPress={() => {
                                    navigation?.navigate(AuthRoutes.SignUp);
                                }}
                            >
                                {/*<AntDesign name="left" size={25} color={COLORS.light.text} />*/}
                                <Feather name="chevron-left" size={28} color={COLORS.light.text}/>
                            </TouchableOpacity>

                        </View>

                        {step === 0 && <PhoNoV/>}
                    </ScrollView>


                </View>

            </View>
        </View>
    );
};

export default LGS;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // borderWidth: 1,
    },
    container: {
        // borderWidth: 1,
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        marginHorizontal: "5%",
    },
    subContainer: {
        // flex: 1,
        // borderWidth: 1,
        // justifyContent: "center",
        alignItems: "center",
        // height: "60%",
        width: "100%",
        marginTop: "15%",
        // paddingHorizontal: "5%",
    },
    scroll: {
        // borderWidth: 1,
        width: "100%",
        // marginTop: 10,
        backgroundColor: "transparent",
        marginBottom: 20,
    },
    scrollContent: {
        // borderWidth: 1,
        width: "100%",
        // height: "500%",
        alignItems: "center",
        backgroundColor: "transparent",
        marginBottom: 20,
        paddingVertical: 5,
    },
    r2: {
        flexDirection: "row",
        // justifyContent: "center",
        width: "100%",
        // alignItems: "flex-start",
        marginTop: "8%",
        // marginBottom: "2%",

    },
    r2t1: {
        backgroundColor: COLORS.light.backgroundGray,
        padding: 10,
        borderRadius: 30
    },


});
