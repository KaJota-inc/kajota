import { StackScreenProps } from '@react-navigation/stack';

export enum Tabs {
  Home = 'Home',
}

export type TabsNavigatorParamList = {
  [Tabs.Home]: undefined;
};

export type TabsScreenProps<RouteName extends Tabs> = StackScreenProps<
  TabsNavigatorParamList,
  RouteName
>;

export type TabOptions = {
  [key: string]: {
    label: string;
    icon: any;
    component: React.FC;
  };
};
