// params 参数来源: https://xiaoce-cache-api-ms.juejin.im/v1/get 这个请求
let params = {
  token: 'token',
  id: 'id',
  client_id: 'client_id',
  uid: 'uid',
  src: 'web'
}

let urls = {
  getUrl: 'https://xiaoce-cache-api-ms.juejin.im/v1/get', // get 接口, 不需要变
  getSectionUrl: 'https://xiaoce-cache-api-ms.juejin.im/v1/getSection' // getSection 接口, 不需要变
}

let paramsCL = {
  __jsluid : '601859efdd376bb4f9870d2960902819',
  _ga : 'GA1.2.834880515.1537986182',
  remember_cc248a61b22205317666319f4fffa9146988fb4b : '266911%7Ch6BoK46VxvlS17cmlZi3BlvqasXokRm6Wfvyqw8GNjvbejyHM127gqzo20IE',
  _gid : 'GA1.2.820642865.1538489308',
  PHPSESSID : 'h5jtkl34v3sjopao7t1u8nvgfb',
  _gat_web : '1'
}

// PHPSESSID=f9cjeii3uh3mkv4gaud47lltqq; __jsluid=e8e6eeeaa264539cb5c1e22cbdea9772; _ga=GA1.2.739563509.1538534013; _gid=GA1.2.406754901.1538534013; _gat_web=1

module.exports = {
  params,
  urls,
  paramsCL,
  urlsCL: `https://www.kancloud.cn/hanxuming/vue-iq/728305`
}