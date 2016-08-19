//tweet 组件的工具函数

module.exports.getListOfTweetIds = (tweets) => {
  if ( !tweets ) return [];
  return Object.keys(tweets);  
};
