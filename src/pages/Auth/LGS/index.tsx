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
import ForgotPassword from "@pages/Auth/LGS/ForgotPassword";
import ResetPassword from "@pages/Auth/LGS/ResetPassword";
import HWYJ from "@pages/Auth/LGS/HWYJ";
import SelectItems from "@pages/Auth/LGS/SelectItems";
import StoreDetails from "@pages/Auth/LGS/StoreDetails";
import PickAPlan from "@pages/Auth/LGS/PickAPlan";
import Plan from "@pages/Auth/LGS/Plan";


export type UserType = "CO_SELL" | "SELL" | "ALL" | "BUY";

export interface IFLowProps {
    handleStep: (val: number) => void;
    flow: number[];
    option: LoginOptionTypes;
    currentIdx: number;
    handleUserType?: (val: UserType) => void;
    userType?: UserType
}


type NavigationProps = AuthProps<AuthRoutes.LGS>;

const LGS: React.FC<NavigationProps> = ({navigation, route}) => {

    const {option} = route.params;
    // debug.log("option",option)
    const allUserTypeFLow: number[] = [14, 15]
    const otherUserTypeFLow: number[] = [12, 13]


    const googleFlow: number[] = [0, 1, 2, 3, 4, 11,]
    const appleFlow: number[] = [0, 1, 2, 3, 4, 11,]
    const emailFlow: number[] = [7, 8, 1, 5, 6, 3, 4, 11,]
    const forgotPasswordFlow: number[] = [9, 1, 10]


    const [step, setStep] = useState<number>(0);
    const [currentIdx, setCurrentIdx] = useState<number>(0);
    const [mainFlow, setMainFlow] = useState<number[]>(emailFlow);
    const [previousFLow, setPreviousFLow] = useState<number[]>([]);
    const [userFlow, setUserFlow] = useState<number[]>(otherUserTypeFLow);
    const [userType, setUserType] = useState<UserType>();

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

    const handleUserType = (val: UserType) => {
        debug.log("User type", val)
        setUserType(val)
    }

    const handleMainFlow = () => {
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
            case "forgot-password":
                setMainFlow(forgotPasswordFlow)
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
        debug.log("mainFlow", mainFlow)
        if (mainFlow.length) {
            setStep(mainFlow[currentIdx])
        }

    }, [mainFlow,]);

    useEffect(() => {

        debug.log("User type", userType)
        debug.log("previousFLow", previousFLow)
        if (!userType) {
            return
        }
        if (!previousFLow.length) {
            setPreviousFLow([...mainFlow])
        }
        if (userType === "ALL") {
            setUserFlow(allUserTypeFLow)
            setMainFlow([...previousFLow, ...allUserTypeFLow])
        } else {
            setUserFlow(otherUserTypeFLow)
            setMainFlow([...previousFLow, ...otherUserTypeFLow])
        }

    }, [userType, previousFLow]);


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
                            {![11].includes(step) && <TouchableOpacity
                                style={styles.r2t1}
                                onPress={() => {
                                    handleBack()

                                }}
                            >
                                {/*<AntDesign name="left" size={25} color={COLORS.light.text} />*/}
                                <Feather name="chevron-left" size={28} color={COLORS.light.text}/>
                            </TouchableOpacity>}
                            {step === 15 && <Text style={styles.r2t4}>Plans</Text>}
                            {[12, 14, 15].includes(step) && <TouchableOpacity
                                style={styles.r2t2}
                                onPress={() => {

                                    handleSetStep(mainFlow[currentIdx + 1])
                                    setCurrentIdx(currentIdx + 1)

                                }}
                            >

                                {/*<AntDesign name="left" size={25} color={COLORS.light.text} />*/}
                                {/*<Feather name="chevron-left" size={28} color={COLORS.light.text}/>*/}
                                <Text style={styles.r2t3}>Skip</Text>
                            </TouchableOpacity>}
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

                        {step === 9 && <ForgotPassword
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}
                        />}

                        {step === 10 && <ResetPassword
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}
                        />}

                        {step === 11 && <HWYJ
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}
                            handleUserType={handleUserType}
                        />}

                        {step === 12 && <SelectItems
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}
                            userType={userType}
                        />}


                        {step === 13 && <StoreDetails
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}
                        />}

                        {step === 14 && <PickAPlan
                            currentIdx={currentIdx}
                            flow={mainFlow}
                            handleStep={(val: number) => {
                                handleSetStep(val)
                                setCurrentIdx(currentIdx + 1)
                            }}
                            option={option}
                        />}

                        {step === 15 && <Plan
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
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        marginTop: "5%",
        marginBottom: "5%",

    },
    r2t1: {
        backgroundColor: COLORS.light.backgroundGray,
        padding: 10,
        borderRadius: 30
    },
    r2t2: {
        // backgroundColor: COLORS.light.backgroundGray,
        alignItems: "center",
        justifyContent: "center"
    },
    r2t3: {
        // backgroundColor: COLORS.light.backgroundGray,
        // alignItems: "center",
        // justifyContent: "center"
        fontSize: SIZES.sizeSixC
    },
    r2t4: {

        fontSize: SIZES.sizeSevenB,
        fontWeight:"700",
        textAlign:"center"
    },


});
