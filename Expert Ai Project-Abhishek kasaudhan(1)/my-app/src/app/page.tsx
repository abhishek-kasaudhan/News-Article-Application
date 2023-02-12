

import "../../public/styles.css"
import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import store from '../../store'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
     
    )
  }
}

export default MyApp