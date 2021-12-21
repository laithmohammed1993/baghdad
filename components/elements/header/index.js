import React from 'react'
import styles from './styles.module.css'
import { Switch , Badge } from 'react-ideas'
import { useDispatch, useSelector } from 'react-redux'
function Header() {
  const dispatch = useDispatch();
  const { mode , 'drawer-visible':drawerVisible } = useSelector(state => state);
  return (
    <header className={styles['bv-header']}>
      <div>
        <p>Baghdad<small>validator</small></p>
      </div>
      <div className={styles['bv-header-loader']}></div>
      <div className={styles['bv-header-badge']}>
        <Badge icon={'fas fa-th-list'} onClick={e=>dispatch({type:'SETSTATE',data:{ 'drawer-visible':!drawerVisible }})} size='s' fontawesome={true} className={styles['bv-header-drawer-badge']}/>
        <Badge icon={mode==='dark'?'fas fa-sun':'fas fa-moon'} onClick={e=>dispatch({type:'SETSTATE',data:{ mode:mode==='light'?'dark':'light'}})} size='s' fontawesome={true}/>
      </div>
    </header>
  )
}

export default Header
