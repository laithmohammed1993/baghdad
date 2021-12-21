import React from 'react'
import styles from './styles.module.css';
import { Drawer } from 'react-ideas'
import { useDispatch, useSelector } from 'react-redux';
import DrawerTab from '../../elements/drawer-tab';
import { useRouter } from 'next/router';

function BodyLayout(props) {
  const { 'drawer-list':drawerList,'drawer-visible':drawerVisible } = useSelector(state => state);
  const router        = useRouter();
  const dispatch      = useDispatch();
  function setArticale(article){
    // dispatch({ type:'SETSTATE', data:{ article },index:1 })
    router.push(article.url);
  }
  return (
    <div className={styles['body-layout']}>
      <div className={styles['body-drawer-container']} status={String(drawerVisible)}>
        <Drawer>
        {drawerList?.map((obj,i)=>{
          if( Array.isArray(obj.list) ){
            return <optgroup key={i} label={<DrawerTab {...obj} onClick={e=>setArticale(obj)} />}>
              {obj?.list?.map((el,x)=>{
                let listLength = obj?.list?.length;
                let lastIndex = listLength-1;
                return <option key={x}><DrawerTab location={x===lastIndex&&listLength===1?'single':(x===0?'first':(x===lastIndex?'last':'middle'))} {...el} onClick={e=>setArticale(el)} /></option>
              })}
            </optgroup>
          }
          return <option key={i}><DrawerTab {...obj} onClick={e=>setArticale(obj)} /></option>
        })}
        </Drawer>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
          {props.children}
      </div>
    </div>
  )
}

export default BodyLayout
