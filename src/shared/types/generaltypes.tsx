import { ReactNode } from 'react';
import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootParamList } from '@shared/const/routerRoot';

// declare global {
//     namespace ReactNavigation {
//         interface RootParamList extends RootParamList {
//         }
//     }
// }

export type CountryType = {
  countryName?: string;
  countryCode?: string;
  phoneCode?: string;
  locale?: string;
  countryFlag?: string;
  countryCcy?: string;
  currency?: string;
};

export type RootStackScreenProps<Screen extends keyof RootParamList> =
  NativeStackScreenProps<RootParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootParamList>
  >;

export interface MainButtonContainer {
  title: string | ReactNode;
  disabled?: boolean;
  // whiteStyling?: boolean,
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPressFunction: () => void;
  err?: boolean;
  loading?: boolean;
}

// export interface CountryPickerContainer {
//     handleChosenCountry: any;
// }

export type LoginOptionTypes = 'google' | 'apple' | 'email' | 'forgot-password';

export interface ProductType {
  key: number;
  category: string;
  title: string;
  uri: ImageSourcePropType;
  ccy?: string;
  price: string | number;
  item: number;
  rating: number;
  store: string;
  badgeText: string;
  favorite: boolean;
}

export interface ItemType {
  key: number;
  uri: ImageSourcePropType;
  date: string;
  time: string;
  title: string;

  ccy?: string;
  price: string | number;

  reference: string;

  deliveryStatus: DeliveryStatusType;
}

export type DeliveryStatusType = 'Delivered' | 'Pending' | 'Cancelled';

export interface NotificationType {
  key: number;
  uri: ImageSourcePropType;
  time: string;
  desc: string;
  store: string;
}
