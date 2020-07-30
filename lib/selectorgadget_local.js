(function() {
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('link');
  s.setAttribute('rel', 'stylesheet');
  s.setAttribute('type', 'text/css');
  s.setAttribute('media', 'screen');
  // s.setAttribute('href', 'file:///E:/Desktop/Program/Github/selectorgadget/build/selectorgadget_combined.css?r=' + Math.random());
  // s.setAttribute('href', 'https://cdn.jsdelivr.net/gh/Cesaryuan/selectorgadget@webmonitor/build/selectorgadget_combined.css?r=' + Math.random());
  s.setAttribute('href', 'https://gitee.com/cesaryuan/selectorgadget/raw/webmonitor/build/selectorgadget_combined.css?r=' + Math.random());
  (head ? head : document.body).appendChild(s);

  s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  // s.setAttribute('src', 'file:///E:/Desktop/Program/Github/selectorgadget/build/selectorgadget_combined.js?r=' + Math.random());
  // s.setAttribute('href', 'https://cdn.jsdelivr.net/gh/Cesaryuan/selectorgadget@webmonitor/build/selectorgadget_combined.js?r=' + Math.random());
  s.setAttribute('href', 'https://gitee.com/cesaryuan/selectorgadget/raw/webmonitor/build/selectorgadget_combined.js?r=' + Math.random());
  (head ? head : document.body).appendChild(s);

  var interval = setInterval(function() {
    if (typeof SelectorGadget != 'undefined') {
      clearInterval(interval);
      SelectorGadget.toggle({ analytics: false });
    }
  }, 50);
})();
