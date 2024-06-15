import {ScrollView, StatusBar, StyleSheet, TouchableOpacity} from "react-native";

import React, {useEffect, useState} from "react";
import {Text, View} from "@components/Themed";
import {AuthProps, AuthRoutes} from "@shared/const/routerAuth";
import {COLORS, SIZES} from "@constants/Colors";
import {AntDesign, Feather} from "@expo/vector-icons";
import ConfirmPassword from "@pages/Auth/LGS/ConfirmPassword";
import EYDB from "@pages/Auth/LGS/EYDB";
import DOBAuth from "@pages/Auth/LGS/DOBAuth";
import Digit6Code from "@pages/Auth/LGS/Digit6Code";
import PhoNoV from "@pages/Auth/LGS/PhoNoV";
import WYE from "@pages/Auth/LGS/WYE";
import WYN from "@pages/Auth/LGS/WYN";
import WYC from "@pages/Auth/LGS/WYC";
import WYPN from "@pages/Auth/LGS/WYPN";
import {LoginOptionTypes} from "@shared/types/generaltypes";


export interface IFLowProps {
    handleStep: (val: number) => void;

    flow: number[];
    option: LoginOptionTypes;
    currentIdx: number;
}

type NavigationProps = AuthProps<AuthRoutes.LGS>;

const LGS: React.FC<NavigationProps> = ({navigation, route}) => {

    const {option} = route.params;
    // debug.log("option",option)
    const googleFlow: number[] = [0, 1, 2]
    const appleFlow: number[] = [0, 1, 2]
    const emailFlow: number[] = [7, 8, 1, 5, 6, 3, 4]


    const [step, setStep] = useState<number>(0);
    const [currentIdx, setCurrentIdx] = useState<number>(0);
    const [mainFlow, setMainFlow] = useState<number[]>(emailFlow);

    const handleSetStep = (val: number) => {
        setStep(val)
    }
    const handleBack = () => {
        if (currentIdx === 0) {
            navigation?.navigate(AuthRoutes.SignUp);
            return
        }
        setStep(mainFlow[currentIdx - 1])
        setCurrentIdx(currentIdx - 1)

    }

    const handleMainFlow = () =>{
        switch (option) {
            case "google":
                setMainFlow(googleFlow)
                break;
            case "email":
                setMainFlow(emailFlow)
                break;
            case "apple":
                setMainFlow(appleFlow)
                break;
            default:
                setMainFlow(emailFlow)
                break;
        }



    }

    useEffect(() => {

        handleMainFlow()

    }, [option,]);

    useEffect(() => {

        if(mainFlow.length){
            setStep(mainFlow[0])
        }

    }, [mainFlow,]);


    useEffect(() => {
        if (currentIdx === mainFlow.length) {
            navigation?.navigate(AuthRoutes.SignIn);
            return
        }
    }, [currentIdx]);

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
                                    handleBack()

                                }}
                            >
                                {/*<AntDesign name="left" size={25} color={COLORS.light.text} />*/}
                                <Feather name="chevron-left" size={28} color={COLORS.light.text}/>
                            </TouchableOpacity>

                        </View>

                        {step === 0 && <PhoNoV
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}

                        />}
                        {step === 1 && <Digit6Code
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}

                            option={option}
                        />}
                        {step === 2 && <DOBAuth
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}

                        />}
                        {step === 3 && <EYDB
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}
                        />}
                        {step === 4 && <ConfirmPassword
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}
                        />}
                        {step === 5 && <WYE
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}
                        />}
                        {step === 6 && <WYN
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}
                        />}
                        {step === 7 && <WYC
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}
                        />}
                        {step === 8 && <WYPN
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}
                        />}


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
