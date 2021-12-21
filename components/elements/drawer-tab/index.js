import React from 'react'
import styles from './styles.module.css';

function DrawerTab(props) {
  let { title, innerText, onClick, className, category , location , id, url } = props;
  // processing
  let isSelected = (process.browser&&window.location.pathname===url);
  let isList     = Array.isArray(props?.list);
  location = location || 'single';
  return (
    <div title={title} className={`${styles['drawer-tab']} ${className}`} onClick={e=>onClick(e)} status={String(isSelected)}>
      {category?.includes('sub')?<div className={styles['drawer-dot']} location={location} status={String(isSelected)}><div></div><div></div><div></div></div>:<></>}
      <div kind='tab' dangerouslySetInnerHTML={{__html:innerText}}></div>
      {isList?<div className={styles['drawer-angle']}><i className='fas fa-angle-down' aria-hidden></i></div>:<></>}
    </div>
  )
}
export default DrawerTab
