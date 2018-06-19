// 设置首页地址
const indexUrl = '/pages/home/index';

let pagesConfig = [
  {
    path: '/pages/home/index',
    config: {
      navigationBarTitleText: '固生堂',
      usingComponents: {
        'i-button': '../../../static/lib/button/index',
        'i-tab-bar': '../../../static/lib/tab-bar/index',
        'i-tab-bar-item': '../../../static/lib/tab-bar-item/index'
      }
    }
  },
  {
    path: '/pages/counter/index',
    config: {
      navigationBarTitleText: '详情',
      usingComponents: {
        'i-button': '../../../static/lib/button/index'
      }
    }
  }
];

pagesConfig.forEach((item, idx) => {
  if(item.path === indexUrl) {
    pagesConfig.unshift(item);
    pagesConfig.splice(idx+1, 1);
  }
});

module.exports = pagesConfig;
