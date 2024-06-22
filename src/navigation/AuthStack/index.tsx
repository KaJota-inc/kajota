import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LGS, WS } from '@pages/Auth';

import { AuthParamList, AuthRoutes } from '@shared/const/routerAuth';

import { SignIn, SignUp } from '../../pages/Auth';

const Auth = createStackNavigator<AuthParamList>();

const AuthStack = (): React.ReactElement => {
  return (
    <Auth.Navigator
      screenOptions={
        {
          // headerMode: "float",
          //@ts-ignore
          // header: (props) => <HeaderAuthForNavigate {...props} />,
        }
      }
    >
      <Auth.Screen component={WS} name={AuthRoutes.WS} options={{ headerShown: false }} />
      <Auth.Screen
        component={SignIn}
        name={AuthRoutes.SignIn}
        options={{ headerShown: false }}
      />

      <Auth.Screen
        component={SignUp}
        name={AuthRoutes.SignUp}
        options={{ headerShown: false }}
      />

      <Auth.Screen
        component={LGS}
        name={AuthRoutes.LGS}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
};

export default AuthStack;
