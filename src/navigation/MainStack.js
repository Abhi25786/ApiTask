import React from 'react';

import HomeStack from './HomeStack';
import navigationStrings from './navigationString';

export default function (Stack) {
  // const {appData, appStyle} = useSelector(state => state?.initBoot);

  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={HomeStack}
        options={{headerShown: false}}
      />
    </>
  );
}
