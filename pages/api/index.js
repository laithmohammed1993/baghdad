// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import env from '../../resources/env'
export default (req, res) => {
  try {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ 
      status: env.status.success,
      'drawer-list' : [
        { id:1, name:'getting-started', innerText:'<p><span>🚀</span>getting started</p>', title:'','url':`/getting-started`,category:'head-article' , list:[
          { id:11, innerText:'<p>introduction</p>', title:'','url':`/getting-started/introduction`,category:'sub-article' },
          { id:12, innerText:'<p>install</p>', title:'','url':`/getting-started/install`,category:'sub-article' } 
        ] },
        { id:2, name:'best-practice', innerText:'<p><span>✒️</span>Best Practice</p>', title:'',category:'head-article','url':`/best-practice` },
        { id:3, name:'data-types', innerText:'<p><span>⚖️</span>data types</p>', title:'','url':`/data-types`,category:'head-article' , list:[
          { id:31, innerText:'<p>integer</p>', title:'','url':`/data-types/integer`,category:'sub-article' },
          { id:32, innerText:'<p>float</p>', title:'','url':`/data-types/float`,category:'sub-article' },
          { id:33, innerText:'<p>boolean</p>', title:'','url':`/data-types/boolean`,category:'sub-article' },
          { id:34, innerText:'<p>string</p>', title:'','url':`/data-types/string`,category:'sub-article' },
          { id:35, innerText:'<p>object</p>', title:'','url':`/data-types/object`,category:'sub-article' },
          { id:36, innerText:'<p>array</p>', title:'','url':`/data-types/array`,category:'sub-article' },
          { id:37, innerText:'<p>JSON</p>', title:'','url':`/data-types/json`,category:'sub-article' },
        ] },
        { id:4, innerText:'<p><span>👻</span>examples</p>', title:'','url':`/examples`,category:'head-article' , list:[
          { id:41, innerText:'<p>new sign-up</p>', title:'','url':`/examples/new-signup`,category:'sub-article' },
          { id:42, innerText:'<p>add booking</p>', title:'','url':`/examples/add-booking`,category:'sub-article' },
          { id:43, innerText:'<p>account details</p>', title:'','url':`/examples/account-details`,category:'sub-article' },
        ] },
        { id:5, innerText:'<p><span>✒️</span>FQA</p>', title:'',category:'component' },
        { id:6, innerText:'<p><span>📬</span>contact us</p>', title:'',category:'component' },
        { id:7, innerText:'<p><span>🍂</span>about</p>', title:'','url':`/about-us`,category:'component' },
        { id:8, innerText:'<p><span>📋</span>license</p>', title:'','url':`/license`,category:'head-article' },
      ]
    })
  } catch (error) {
    res.json({status:env.status.internalServerError})
  }
}
