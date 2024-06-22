import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export enum AccountsRoutes {
  AccountsMain = 'AccountsMain',
}

export type AccountsParamList = {
  [AccountsRoutes.AccountsMain]: undefined;
};

export type AccountsProps<RouteName extends AccountsRoutes> = StackScreenProps<
  AccountsParamList,
  RouteName
>;

export type AccountsNavigationProps = StackNavigationProp<AccountsParamList>;
