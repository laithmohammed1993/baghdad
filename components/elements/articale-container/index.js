import React from 'react'
import styles from './styles.module.css';
import fun from '../../../resources/fun';
import env from '../../../resources/env';

function ArticaleContainer(props) {
  let { html } = props;
  const [like, setlike] = React.useState('')
  React.useEffect(()=>{
    document.addEventListener('DOMContentLoaded', (event) => {
      setHightlight()
    });
  },[])
  React.useEffect(()=>{
    setHightlight()
  },[props])
  function setHightlight(){
    document.querySelectorAll('pre code').forEach((block) => {
      window?.hljs?.configure({ tabReplace:'  ' });
      window?.hljs?.highlightBlock(block);
    });
  }
  let pageData = String(html).split('\n')[0].replace('<!-- "','').replace('" -->','');
  pageData     = fun.isJSON(pageData)?JSON.parse(pageData):{};
  let articleHtml = String(html).split('\n').slice(1).join('\n');
  return (<>
    <div className={styles['atricale-container']}>
      <div dangerouslySetInnerHTML={{__html:articleHtml}}></div>
    </div>
    <div className={styles['article-review']}>
      <div>
        <div>
          <p>
            {like?'Thanks for letting us know!':'Is this page useful?'}
            <i className={`${like==='up'?'fas':'far'} fa-thumbs-down`} like={like==='up'?'true':'false'} kind='up' aria-hidden onClick={e=>setlike('up')}></i>
            <i className={`${like==='down'?'fas':'far'} fa-thumbs-up`} like={like==='down'?'true':'false'} kind='down' aria-hidden onClick={e=>setlike('down')}></i>
          </p>
        </div>
        <div>
          <p><a href={`https://github.com/laithmohammed1993/baghdad/blob/master/documents${pageData.github_url}`} target={'_blank'} >Edit this page</a></p>
        </div>
      </div>
    </div>
    <div className={styles['article-navigator']}>
      <div>
        {pageData?.prev_page
          ? <div>
              <p>Previous article</p>
              <a href={pageData?.prev_page?.pathname}>{pageData?.prev_page?.title}</a>
            </div>
          : <div></div>
        }
        {pageData?.next_page
          ? <div>
              <p>Next Aricale</p>
              <a href={pageData?.next_page?.pathname}>{pageData?.next_page?.title}</a>
            </div>  
          : <div></div>
        }
      </div>    
    </div>
    <footer className={styles['article-footer']}>
      <div kind='sign'>
        <div>
          <img src={`${env.domain}/logo.png`} alt='logo'/>
          <div>
            <span>laith.ideas</span>
            <span>open source</span>
          </div>
        </div>
        <p>Copyright (c) 2021 Laith Mohammed Saker</p>
      </div>
    </footer>
    </>
  )
}

export default ArticaleContainer
