import { Provider } from 'react-redux'
import Header from '../components/Header'
import '../styles/globals.css'
import store from '../Store'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Provider
    store={store}
    >
      <Header/>
      <Component {...pageProps} />
    </Provider>
    </>
  ) 
}

export default MyApp
