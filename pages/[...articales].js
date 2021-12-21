import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BodyLayout from '../components/layouts/body';
import HtmlLayout from '../components/layouts/html'
import { setAppHeader } from './_app'
import showdown from 'showdown'
import env from '../resources/env';
import ArticaleContainer from '../components/elements/articale-container';
import { initializeStore , useStore } from '../resources/redux'
import fun from '../resources/fun';
import { setListner } from './index';
import { useRouter } from 'next/router'

let initialState = {
  'doc'       : '',
  'pathname'  : '',
}
export default function Home(props) {
  const { 'drawer-list':drawerList } = useSelector(state => state);
  const dispatchState       = useDispatch();
  const router              = useRouter();
  const [state, dispatch]   = React.useReducer((state,object)=>{ return { ...state, ...object } }, initialState);
  React.useEffect(()=>{
    if( process.browser ){
      if( window.location.pathname !== state.pathname ){
        getArticale();
      }
    }
  });
  React.useEffect(()=>{
    setInterval(()=>{
      getArticale();
    },5000)
  },1000)
  function getArticale(){
    let { pathname } = window?.location || {};
    fetch(`${env.domain}/api/documents${pathname}.md`).then(res=>res.json()).then((res)=>{
      if(res.status===env.status.success){
        if( process.browser ){
          let data = String(res?.doc?.split('\n')?.[0]).replace('<!-- "','').replace('" -->','');
          data     = fun.isJSON(data)?JSON.parse(data):{};
          let title = data?.current_page?.title || '';
          if( title.length > 0 ){
            title = `${title} - Baghdad validator`;
            console.log(res.doc.length)
            document.title = title;
          }
        }
        dispatch({doc:res.doc,pathname});
        setTimeout( ()=>setListner(drawerList,router,dispatchState) ,1000)
      }
    }).catch(console.log)
  }
  let converter             = new showdown.Converter();
  let html                  = converter.makeHtml(state.doc || props?.article?.doc ||  '');
  return (
    <HtmlLayout>
      <BodyLayout>
        <ArticaleContainer html={html} />
      </BodyLayout>
    </HtmlLayout>
  )
}
export async function getServerSideProps({ req , res , params }){
  let initialReduxState   = await setAppHeader(req,res);
  let path                = req.url;
  let article             = {};
  let getArticalDocument  = await fetch(`${env.api}/documents${path}.md`);
  let articalDocument     = await getArticalDocument.json();
  if(articalDocument.status===env.status.success){
    article = { doc:articalDocument.doc };
  }
  return { props: { initialReduxState , path , article } }
}
