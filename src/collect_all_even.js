'use strict';

function collect_all_even(collection) {
  //在此处实现函数过程
  return collection.filter(function(val){
    return val%2 === 0;
  });
}

module.exports = collect_all_even;
