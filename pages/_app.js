import React from "react";
import App from "next/app";

import "../styles/app.less";

class MyApp extends App {
  static async getInitialProps(appContexts) {
    const appProps = await App.getInitialProps(appContexts);

    return { ...appProps };
  }

  render() {
    const { Component, PageProps } = this.props;
    return <Component {...PageProps} />;
  }
}

export default MyApp;
