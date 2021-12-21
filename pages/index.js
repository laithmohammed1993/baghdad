import React from 'react'
import { useRouter } from 'next/router'
import { useSelector , useDispatch } from 'react-redux'
import BodyLayout from '../components/layouts/body';
import HtmlLayout from '../components/layouts/html'
import { setAppHeader } from './_app'
import showdown from 'showdown'
import env from '../resources/env';
import ArticaleContainer from '../components/elements/articale-container';
import { initializeStore , useStore } from '../resources/redux'
import fun from '../resources/fun';
export const setListner = (drawerList,router,dispatch)=>{
  let tags = document.querySelectorAll('a');
  let tagsIndexes = Object.keys(tags);
  for(let index of tagsIndexes){
    let href = String(tags[index].getAttribute('href'));
    // console.log({href,'case':href.includes('data-types') || href.includes('getting-started')})
    if( href.includes('data-types') || href.includes('getting-started') ){
      tags[index].onclick = (e)=>{
        e.preventDefault();
        let href    = tags[index].getAttribute('href');
        router.push(href);
      };
    }
  }
}
export default function Home(props) {
  const { article , language , 'drawer-list':drawerList } = useSelector(state => state);
  const dispatch      = useDispatch()
  const router        = useRouter()
  const [doc, setdoc] = React.useState(article.doc||'');
  React.useEffect(()=>{
    fetch(`${article['url']}`).then(res=>res.json()).then((res)=>{
      if(res.status===env.status.success){
        setdoc(res.doc);
        setTimeout(()=>{
          setListner(drawerList,router,dispatch);
        },1000);
      }
    }).catch(console.log)
  },[article]);
  React.useEffect(()=>{
    setListner(drawerList,router,dispatch);
  },[])
  let  converter = new showdown.Converter();
  let html = converter.makeHtml(doc);
  return (
    <HtmlLayout>
      <BodyLayout>
        <ArticaleContainer html={html} />
      </BodyLayout>
    </HtmlLayout>
  )
}
export async function getServerSideProps({ req , res }){
  let initialReduxState = await setAppHeader(req,res);
  let path = req.url;
  if(['/','index.html'].includes(req.url)){
    path = 'getting-started';
  }
  try{
    let getArticalDocument = await fetch(`${env.domain}/api/documents/${path}.md`);
    let articalDocument    = await getArticalDocument.json();
    if(articalDocument.status===env.status.success){
      initialReduxState['article'] = { doc:articalDocument.doc };
    }
  }catch(error){ console.log(error.message) }
  return { props: { initialReduxState } }
}
