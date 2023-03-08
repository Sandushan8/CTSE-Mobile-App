import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/UserAction";
import Pet from "./components/Navigations/Pet";
import Auth from "./components/Navigations/Auth";
import User from "./components/Navigations/User";
import Wallet from "./components/Navigations/Wallet";
import Appoinment from "./components/Navigations/Appoinment";

const App = () => {
  return (
    <Provider store={Store}>
      <AppStack />
    </Provider>
  );
};

const AppStack = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <>
      <NavigationContainer>
        <>
          {!isAuthenticated ? (
            <Auth />
          ) : (
            <>
              {user.role == "admin" ? (
                <User />
              ) : (
                <>
                  {user.role == "wallet" ? (
                    <Wallet />
                  ) : (
                    <>{user.role == "appoinment" ? <Appoinment /> : ""}</>
                  )}
                </>
              )}
            </>
          )}
        </>
      </NavigationContainer>
    </>
  );
};

export default App;
