import React from "react";
import App from "next/app";

import "../styles/app.less";

import ThemeProvider, {
  themeSelector
} from "../context/theme/global.theme.provider";

class MyApp extends App {
  static async getInitialProps(appContexts) {
    const appProps = await App.getInitialProps(appContexts);

    const themeKey = process.env.THEME_APP || "light";

    const themeApp = themeSelector(themeKey);

    return { ...appProps, themeApp };
  }

  render() {
    const { Component, PageProps, themeApp } = this.props;
    return (
      <ThemeProvider themeApp={themeApp}>
        <Component {...PageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
