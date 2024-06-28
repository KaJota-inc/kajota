import React from 'react';
import { StyleSheet } from 'react-native';

import { COLORS } from '@constants/Colors';

import AIStar from '../assets/images/svg/AIStar.svg';
import AppleLogo from '../assets/images/svg/apple.svg';
import Basket from '../assets/images/svg/Basket.svg';
import WalletLogo from '../assets/images/svg/bi_wallet-fill.svg';
import ConfirmationLogo from '../assets/images/svg/confirmation.svg';
import EmailLogo from '../assets/images/svg/email_icon.svg';
import FifaLogo from '../assets/images/svg/FIFA_logo_without_slogan 1.svg';
import GoogleLogo from '../assets/images/svg/google.svg';
import NotificationBellIcon from '../assets/images/svg/iconamoon_notification-thin.svg';
import LocationIcon from '../assets/images/svg/Location.svg';
import DeleteIcon from '../assets/images/svg/material-symbols_delete.svg';
import NoNotificationsIccon from '../assets/images/svg/no_notifications.svg';
import PayPalLogo from '../assets/images/svg/paypal.svg';
import PendingIcon from '../assets/images/svg/pending.svg';
import PickAPLan from '../assets/images/svg/PickAPlan.svg';
import TabSellLogoNew from '../assets/images/svg/sell_button.svg';
import TabAccountLogo from '../assets/images/svg/TabAccount.svg';
import TabExploreLogo from '../assets/images/svg/TabExplore.svg';
import TabHomeLogo from '../assets/images/svg/TabHome.svg';
import TabItemsLogo from '../assets/images/svg/TabItems.svg';
import TabSellLogo from '../assets/images/svg/TabSell.svg';
import WishListIcon from '../assets/images/svg/wish_list.svg';

export const WalletLogoLogoSVG = ({
  height = 25,
  width = 25,
  color = COLORS.light.colorOne,
  stroke = COLORS.light.background,
}) => {
  return (
    <>
      <WalletLogo fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};
export const TabExploreLogoSVG = ({
  height = 35,
  width = 35,
  color = COLORS.light.background,
  stroke = COLORS.light.active,
}) => {
  return (
    <>
      <TabExploreLogo fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};
export const TabSellLogoSVG = ({
  height = 35,
  width = 35,
  color = COLORS.light.background,
  stroke = COLORS.light.active,
}) => {
  return (
    <>
      <TabSellLogo fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};
export const TabSellLogoNewSVG = ({
  // height = 85,
  // width = 84,
  color = COLORS.light.background,
  stroke = COLORS.light.active,
}) => {
  return (
    <>
      <TabSellLogoNew
      // fill={color}
      // height={height} stroke={stroke} width={width}
      />
    </>
  );
};
export const TabAccountLogoSVG = ({
  height = 35,
  width = 35,
  color = COLORS.light.background,
  stroke = COLORS.light.active,
}) => {
  return (
    <>
      <TabAccountLogo fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};
export const TabItemsLogoSVG = ({
  height = 35,
  width = 35,
  color = COLORS.light.background,
  stroke = COLORS.light.active,
}) => {
  return (
    <>
      <TabItemsLogo fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};
export const TabHomeLogoSVG = ({
  height = 35,
  width = 35,
  color = COLORS.light.background,
  stroke = COLORS.light.active,
}) => {
  return (
    <>
      <TabHomeLogo fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};
export const FifaLogoSVG = ({
  height = 25,
  width = 25,
  color = COLORS.light.tabIconSelected,
  stroke = COLORS.light.background,
}) => {
  return (
    <>
      <FifaLogo fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};
export const AppleLogoSVG = ({
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

export const GoogleLogoSVG = ({
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

export const EmailLogoSVG = ({
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

export const BasketSVG = ({
  height = 32,
  width = 32,
  color = COLORS.light.background,
  stroke = COLORS.light.active,
}) => {
  return (
    <>
      <Basket fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};

export const AIStarSVG = ({
  height = 20,
  width = 20,
  color = COLORS.light.colorOne,
  stroke = COLORS.light.background,
}) => {
  return (
    <>
      <AIStar fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};
export const PickAPLanSVG = ({
  height = 250,
  width = 250,
  color = COLORS.light.colorOne,
  stroke = COLORS.light.background,
}) => {
  return (
    <>
      <PickAPLan fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};
export const DeleteIconSVG = ({
  height = 28,
  width = 38,
  color = 'transparent',
  stroke = COLORS.light.background,
}) => {
  return (
    <>
      <DeleteIcon fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};
export const LocationIconSVG = ({
  height = 28,
  width = 38,
  color = COLORS.light.colorOne,
  stroke = COLORS.light.background,
}) => {
  return (
    <>
      <LocationIcon fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};
export const PayPalLogoSVG = ({
  height = 30,
  width = 100,
  color = COLORS.light.colorOne,
}) => {
  return (
    <>
      <PayPalLogo fill={color} height={height} width={width} />
    </>
  );
};
export const ConfirmationLogoSVG = ({
  height = 250,
  width = 150,
  color = COLORS.light.colorOne,
}) => {
  return (
    <>
      <ConfirmationLogo fill={color} height={height} width={width} />
    </>
  );
};

export const NoNotificationsLogoSVG = ({
  height = 250,
  width = 150,
  color = COLORS.light.colorOne,
}) => {
  return (
    <>
      <NoNotificationsIccon
        // fill={color}
        height={height}
        width={width}
        // stroke={stroke}
      />
    </>
  );
};
export const NotificationBellIconSVG = ({
  height = 30,
  width = 30,
  color = 'transparent',
  stroke = COLORS.light.active,
}) => {
  return (
    <>
      <NotificationBellIcon fill={color} height={height} stroke={stroke} width={width} />
    </>
  );
};
export const WishListIconSVG = ({
  height = 35,
  width = 35,
  color = COLORS.light.colorOne,
  stroke = COLORS.light.colorOne,
}) => {
  return (
    <>
      <WishListIcon
        // fill={color}
        height={height}
        width={width}
        // stroke={stroke}
      />
    </>
  );
};

export const PendingIconSVG = ({
  height = 35,
  width = 35,
  color = COLORS.light.colorOne,
  stroke = COLORS.light.colorOne,
}) => {
  return (
    <>
      <PendingIcon
        // fill={color}
        height={height}
        width={width}
        // stroke={stroke}
      />
    </>
  );
};

// const styles = StyleSheet.create({});
