import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export enum AuthRoutes {
  SignIn = "SignIn",
  SignUp = "SignUp",
  WS = "WS",
  LGS = "LGS"
}

export type AuthParamList = {
  [AuthRoutes.SignIn]: undefined;
  [AuthRoutes.SignUp]: undefined;
  [AuthRoutes.WS]: undefined;
  [AuthRoutes.LGS]: undefined;
};

export type AuthProps<RouteName extends AuthRoutes> = StackScreenProps<
  AuthParamList,
  RouteName
>;

export type AuthNavigationProps = StackNavigationProp<AuthParamList>;
