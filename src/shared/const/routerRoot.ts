import {StackNavigationProp, StackScreenProps} from "@react-navigation/stack";

import {AccountsParamList, AccountsRoutes} from "./routerAccounts";
import {AuthRoutes, AuthParamList} from "./routerAuth";
import {SellsRoutes, SellsParamList} from "./routerSells";
import {HomeParamList, HomeRoutes} from "./routerHome";
import {ExploreRoutes, ExploreParamList} from "./routerExplore";
import {ItemsParamList, ItemsRoutes} from "./routerItems";
import {Tabs} from "./routerBottomBar";

export enum RootRoutes {
    Auth = "AuthStack",
    Home = "HomeStack",
    Accounts = "AccountsStack",
    Explore = "ExploreStack",
    Sells = "SellsStack",
    Items = "ItemsStack",
    Tabs = "BottomBar",
}

export type RootParamList = {
    [RootRoutes.Auth]?: {
        screen: AuthRoutes;
        params: any | undefined;
    };
    [RootRoutes.Home]?: {
        screen: HomeRoutes;
        params: any | undefined;
    };
    [RootRoutes.Accounts]?: {
        screen: AccountsRoutes;
    };
    [RootRoutes.Explore]?: {
        screen: ExploreRoutes;
        params: any | undefined;
    };
    [RootRoutes.Sells]?: {
        screen: SellsRoutes;
    };
    [RootRoutes.Items]?: {
        screen: ItemsRoutes;
        params: any | undefined;
    } ;
    [RootRoutes.Tabs]?: {
        screen: Tabs;
        params: any | undefined;
    };
};

export type RootScreenProps<RouteName extends RootRoutes> = StackScreenProps<
    RootParamList,
    RouteName
>;

export type RootNavigationProps = StackNavigationProp<
    RootParamList &
    AuthParamList &
    SellsParamList &
    AccountsParamList &
    ExploreParamList &
    ItemsParamList &
    HomeParamList
>;

const screens = {
    ...AuthRoutes,
    ...AccountsRoutes,
    ...HomeRoutes,
    ...ExploreRoutes,
    ...SellsRoutes,
    ...ItemsRoutes,
};

export type ScreensType = typeof screens;
