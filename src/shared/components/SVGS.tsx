import {StyleSheet} from "react-native";
import React from "react";

import FifaLogo from "../assets/images/svg/FIFA_logo_without_slogan 1.svg";
import {COLORS} from "@constants/Colors";

export const FifaLogoSVG =
    ({
         height = 25,
         width = 25,
         color = COLORS.light.tabIconSelected,
         stroke = COLORS.light.background
     }) => {
        return (
            <>
                <FifaLogo
                    height={height}
                    width={width}
                    fill={color}
                    stroke={stroke}
                />
            </>
        );
    };

const styles = StyleSheet.create({});
