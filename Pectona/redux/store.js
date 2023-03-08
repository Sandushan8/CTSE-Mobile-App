import { configureStore } from "@reduxjs/toolkit";
import {
  forgotPasswordReducer,
  updateProfileReducer,
  userReducer,
  userDataReducer,
  updateUserRole,
  userDeleteReducer,
} from "./reducers/UserReducer";

const Store = configureStore({
  reducer: {
    userRole:updateUserRole,
    deleteUser:userDeleteReducer,
    user: userReducer,
    users: userDataReducer,
    forgotPassword: forgotPasswordReducer,
    updateProfile: updateProfileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export default Store;
