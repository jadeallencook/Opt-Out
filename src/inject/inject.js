// wait until document is loaded
$(document).ready(function () {
  
  // cache app settings
  var app = {
    posts: 0
  }
  
  // removes posts containing keywords
  function checkPosts() {
    // cache elements
    var $elements = $('div._3ccb');
    // loop over all elements
    for (var x = app.posts, max = $elements.length; x < max; x++) {
      // check to see if post contains word
      if($elements[x].innerHTML.indexOf('Trump') != -1) {
        console.log($elements[x]);
        $elements[x].remove();
      }
    }
    // set app posts so we don't check them again 
    app.posts = $elements.length;
  }
  
  // checks when page height changes
  function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight,
      newHeight;
    (function run() {
      newHeight = elm.clientHeight;
      if (lastHeight != newHeight)
        callback();
      lastHeight = newHeight;

      if (elm.onElementHeightChangeTimer)
        clearTimeout(elm.onElementHeightChangeTimer);

      elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
  }

  // init post check
  checkPosts();
  
  // check posts on height change
  onElementHeightChange(document.body, function () {
    checkPosts();
  });
});