"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

const ThemeLayout = ({ children }: any) => {
  return (
    <Provider store={store}>
      {children}
      <ToastContainer />
    </Provider>
  );
};

export default ThemeLayout;
