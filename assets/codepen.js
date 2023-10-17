function Typewrite() {
    'use strict';
    var el = null;
    var text = "";
    var tempText = "";
    var interval;
    var range = [1];
    
    var init = function(args) {
      el = args.el || null;
      text = args.el.innerHTML || "";
      range.push(text.length)
      interval = setInterval(animate, 1000)
    };
    
    var setTempText = function() {
      tempText = text.substring(0, range[0]);
      if (tempText.length % 2 == 0)
        tempText += "_";
      el.setAttribute('data-content', tempText)
      if ( range[0] < range[1]) {
        range[0]++;
        return true;      
      }
      return false;
    };
    
    
    var animate = function() {
      // do things
      setTempText();
      clearInterval(interval)
      if (text != tempText) {
        var counter = 10;
        interval = setInterval(animate, counter)
      } else {
        el.setAttribute('data-content', text)
        console.log('done', interval)
      }
    }
    return {
      init: init
    }
  }
  
  var t = new Typewrite();
  t.init({
    el: document.getElementById("typewrite")
  });