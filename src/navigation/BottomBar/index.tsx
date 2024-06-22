import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AccountsMain } from '@pages/Accounts';
import { ExploreMain } from '@pages/Explore';
import { Home } from '@pages/Home';
import { ItemsMain } from '@pages/Items';
import { SellsMain } from '@pages/Sells';

import { COLORS, SIZES } from '@constants/Colors';

import {
  TabAccountLogoSVG,
  TabExploreLogoSVG,
  TabHomeLogoSVG,
  TabItemsLogoSVG,
  TabSellLogoSVG,
} from '@shared/components/SVGS';
import { TabOptions } from '@shared/const/routerBottomBar';

import { Text, View } from '@components/Themed';

const Tab = createBottomTabNavigator();

const TAB_OPTIONS: TabOptions = {
  Home: {
    label: 'Home',
    icon: ({ color, stroke }: { color: string; stroke: string }) => {
      return (
        <>
          <TabHomeLogoSVG color={color} stroke={stroke} />
        </>
      );
    },
    component: Home as React.FC,
  },

  Explore: {
    label: 'Explore',
    icon: ({ color, stroke }: { color: string; stroke: string }) => {
      return (
        <>
          <TabExploreLogoSVG color={color} stroke={stroke} />
        </>
      );
    },
    component: ExploreMain as React.FC,
  },

  Sell: {
    label: 'Sell',
    icon: ({ color, stroke }: { color: string; stroke: string }) => {
      return (
        <>
          <TabSellLogoSVG
            color={COLORS.light.colorOne}
            stroke={COLORS.light.background}
          />
        </>
      );
    },
    component: SellsMain as React.FC,
  },

  Items: {
    label: 'Items',
    icon: ({ color, stroke }: { color: string; stroke: string }) => {
      return (
        <>
          <TabItemsLogoSVG color={color} stroke={stroke} />
        </>
      );
    },
    component: ItemsMain as React.FC,
  },

  Account: {
    label: 'Account',
    icon: ({ color, stroke }: { color: string; stroke: string }) => {
      return (
        <>
          <TabAccountLogoSVG color={color} stroke={stroke} />
        </>
      );
    },
    component: AccountsMain as React.FC,
  },
};

const BottomTabNavigator = (): React.ReactElement => {
  const getTabOptions = (name: keyof typeof TAB_OPTIONS) => ({
    tabBarIcon: ({ focused }: { focused: boolean }) => {
      const CompToRender = TAB_OPTIONS[name].icon;
      return (
        <View style={styles.containerItem}>
          <View
            style={[
              styles.containerIcon,
              // focused &&
              TAB_OPTIONS[name].label === 'Sell' && styles.focusIcon,
            ]}
          >
            <CompToRender
              color={focused ? COLORS.light.text : COLORS.light.background}
              stroke={focused ? COLORS.light.background : COLORS.light.text}
            />
          </View>

          <Text
            style={{
              color: focused ? COLORS.light.text : COLORS.light.active,
              fontSize: SIZES.sizeFiveB,
              fontWeight: '400',
            }}
          >
            {focused && TAB_OPTIONS[name].label === 'Sell' ? (
              <Octicons color={COLORS.light.colorOne} name="dot-fill" size={20} />
            ) : (
              TAB_OPTIONS[name].label
            )}
            {/*{TAB_OPTIONS[name].label}*/}
          </Text>
        </View>
      );
    },
  });

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      {Object.keys(TAB_OPTIONS).map(name => (
        <Tab.Screen
          key={name}
          component={TAB_OPTIONS[name].component}
          name={name}
          options={getTabOptions(name)}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: Platform.OS === 'android' ? 80 : 110,
    backgroundColor: COLORS.light.background,
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  containerItem: {
    alignItems: 'center',
    gap: 8,
    marginBottom: Platform.OS === 'android' ? 20 : 25,
  },
  containerIcon: {
    // height: 40,
    // width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    padding: 5,
  },
  focusIcon: {
    backgroundColor: COLORS.light.colorOne,
  },
});

export default BottomTabNavigator;
