import { Provider } from 'react-redux'
import { initializeStore , useStore } from '../resources/redux'
import 'react-ideas/dist/index.css'
import '../styles/globals.css'
import env from '../resources/env';
import Cookies from 'cookie'
import fun from '../resources/fun';

export const setAppHeader = async (req,res)=>{
  const cookies = Cookies.parse( req.headers.cookie || '' );
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  let language = cookies['language'];
  if( !fun.isLanguage(language) ){
    res.setHeader( 'Set-Cookie' , [`${Cookies.serialize('language',env.defaultLanguage)};`] );
    cookies['language'] = env.defaultLanguage;
  }
  dispatch({ type: 'SETSTATE', data : { language:cookies['language'] } });
  let appData = {};
  let appDataRequest  = await fetch(`${env.api}`);
  let response        = await appDataRequest.json();
  if(response.status === 200){
    appData = {...response};
    dispatch({ type: 'SETSTATE', data : appData });
    // res.setHeader( 'Set-Cookie' , [`${Cookies.serialize('app-hash-code',response.hash)};` , `${Cookies.serialize('language',cookies['language'])};`] )
  }
  let state = JSON.parse(JSON.stringify(reduxStore.getState()));
  return state;
}

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  let attr = { ...pageProps };
  delete attr.initialReduxState;
  return <Provider store={store}>
    <Component {...attr} />
  </Provider>
}

export default MyApp
