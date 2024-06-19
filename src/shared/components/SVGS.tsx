import {StyleSheet} from "react-native";
import React from "react";

import FifaLogo from "../assets/images/svg/FIFA_logo_without_slogan 1.svg";
import AppleLogo from "../assets/images/svg/apple.svg";
import GoogleLogo from "../assets/images/svg/google.svg";
import EmailLogo from "../assets/images/svg/email_icon.svg";
import TabExploreLogo from "../assets/images/svg/TabExplore.svg";
import TabSellLogo from "../assets/images/svg/TabSell.svg";
import TabItemsLogo from "../assets/images/svg/TabItems.svg";
import TabAccountLogo from "../assets/images/svg/TabAccount.svg";
import TabHomeLogo from "../assets/images/svg/TabHome.svg";
import Basket from "../assets/images/svg/Basket.svg";
import AIStar from "../assets/images/svg/AIStar.svg";
import PickAPLan from "../assets/images/svg/PickAPlan.svg";
import {COLORS} from "@constants/Colors";

export const TabExploreLogoSVG =
    ({
         height = 35,
         width = 35,
         color = COLORS.light.background,
         stroke = COLORS.light.active
     }) => {
        return (
            <>
                <TabExploreLogo
                    height={height}
                    width={width}
                    fill={color}
                    stroke={stroke}
                />
            </>
        );
    };
export const TabSellLogoSVG =
    ({
         height = 35,
         width = 35,
         color = COLORS.light.background,
         stroke = COLORS.light.active
     }) => {
        return (
            <>
                <TabSellLogo
                    height={height}
                    width={width}
                    fill={color}
                    stroke={stroke}
                />
            </>
        );
    };
export const TabAccountLogoSVG =
    ({
         height = 35,
         width = 35,
         color = COLORS.light.background,
         stroke = COLORS.light.active
     }) => {
        return (
            <>
                <TabAccountLogo
                    height={height}
                    width={width}
                    fill={color}
                    stroke={stroke}
                />
            </>
        );
    };
export const TabItemsLogoSVG =
    ({
         height = 35,
         width = 35,
         color = COLORS.light.background,
         stroke = COLORS.light.active
     }) => {
        return (
            <>
                <TabItemsLogo
                    height={height}
                    width={width}
                    fill={color}
                    stroke={stroke}
                />
            </>
        );
    };
export const TabHomeLogoSVG =
    ({
         height = 35,
         width = 35,
         color = COLORS.light.background,
         stroke = COLORS.light.active
     }) => {
        return (
            <>
                <TabHomeLogo
                    height={height}
                    width={width}
                    fill={color}
                    stroke={stroke}
                />
            </>
        );
    };
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
export const AppleLogoSVG =
    ({
         height = 25,
         width = 25,
         color = COLORS.light.background,
         // stroke = COLORS.light.background
     }) => {
        return (
            <>
                <AppleLogo
                    height={height}
                    width={width}
                    fill={color}
                    // stroke={stroke}
                />
            </>
        );
    };

export const GoogleLogoSVG =
    ({
         height = 25,
         width = 25,
         color = COLORS.light.background,
         // stroke = COLORS.light.background
     }) => {
        return (
            <>
                <GoogleLogo
                    height={height}
                    width={width}
                    fill={color}
                    // stroke={stroke}
                />
            </>
        );
    };

export const EmailLogoSVG =
    ({
         height = 25,
         width = 25,
         color = COLORS.light.background,
         // stroke = COLORS.light.background
     }) => {
        return (
            <>
                <EmailLogo
                    height={height}
                    width={width}
                    fill={color}
                    // stroke={stroke}
                />
            </>
        );
    };

export const BasketSVG =
    ({
         height = 32,
         width = 32,
         color = COLORS.light.background,
         stroke = COLORS.light.text
     }) => {
        return (
            <>
                <Basket
                    height={height}
                    width={width}
                    fill={color}
                    stroke={stroke}
                />
            </>
        );
    };

export const AIStarSVG =
    ({
         height = 20,
         width = 20,
         color = COLORS.light.colorOne,
         stroke = COLORS.light.background
     }) => {
        return (
            <>
                <AIStar
                    height={height}
                    width={width}
                    fill={color}
                    stroke={stroke}
                />
            </>
        );
    };
export const PickAPLanSVG =
    ({
         height = 250,
         width = 250,
         color = COLORS.light.colorOne,
         stroke = COLORS.light.background
     }) => {
        return (
            <>
                <PickAPLan
                    height={height}
                    width={width}
                    fill={color}
                    stroke={stroke}
                />
            </>
        );
    };


const styles = StyleSheet.create({});
