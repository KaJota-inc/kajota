import { createNavigationContainerRef, StackActions } from '@react-navigation/native';

import { navigationRef } from '@shared/components/InactivityWrapper';
import { AuthRoutes } from '@shared/const/routerAuth';
import { RootRoutes } from '@shared/const/routerRoot';

// export const navigationRef = createNavigationContainerRef();

export function navigate(name: unknown, params: unknown) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

export function navigateReplace(name: never, params: never) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

export function navigateReset(name = RootRoutes.Auth) {
  if (navigationRef.isReady()) {
    const currentScreen = navigationRef?.current?.getCurrentRoute?.();
    if (currentScreen?.name === AuthRoutes.SignIn) {
      return;
    }
    navigationRef.reset({
      index: 0,
      routes: [{ name }],
    });
  }
}
