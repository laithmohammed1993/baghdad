const APP_ENV         = true;
const IP              = '153.92.209.225';
const PORT            = 9000;
const isDevelopement  = false;
const domain          = isDevelopement?`http://localhost:${PORT}`:`http://${IP}:${PORT}`;

const env = {
  PORT,
  APP_ENV,
  domain      : domain,
  api         : `${domain}/api`,
  iconDomain  : 'https://media-ideas.appspot.com/i',
  defaultLanguage : 'en',
  request : {
    post : (body={},header={})=>{
      return {
        method:'post',
        headers : {'content-type':'application/json','set-cookie':'SameSite=None',...header},
        body : JSON.stringify(body)
      }
    }
  },
  status : {
    success : 200,
    error : 403,
    success : 200,
    badRequest : 400,
    unauthorized : 401,
    forbidden : 403,
    methodNotAllowed : 405,
    notAcceptable : 406,
    internalServerError : 500,
  }
}
export default env;