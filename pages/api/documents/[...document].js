import env from "../../../resources/env"
import fs from 'fs'
import path from 'path'
import fun from "../../../resources/fun";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  try {
    let { query: { document } , 'cookies':{ language } } = req;
    document = document.join('/')
    language =  fun.isLanguage(language)?language:env.defaultLanguage;
    let filePath = path.resolve(process.cwd(), `documents/${language}/${document}`)
    let isExist = fs.existsSync(filePath);
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    if( isExist ){
      let imageBuffer = fs.readFileSync(filePath,'utf-8');
      res.json({ status:200, doc:imageBuffer })
    } else {
      res.json({ status : env.status.badRequest })
    }
  } catch (error) {
    res.json({ status : env.status.badRequest })
  }
}
