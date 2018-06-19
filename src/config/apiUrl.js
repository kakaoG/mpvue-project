const env = process.env.NODE_ENV;
let host = '';

switch (env){
  case 'dev':
  case 'stg':
    host = '';
    break;
  case 'production':
    host = '';
    break;
  default:
    host = '';
}

export const test = {
 user: `${host}\test`
};
