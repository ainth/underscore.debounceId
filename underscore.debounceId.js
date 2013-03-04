//   Underscore.debounceId Mixin
//   https://github.com/ainth/underscore.debounceId
//   2013 Created by Allen Hebden(Ainth)
//   May be freely distributed under the MIT license.

(function() {
  _.mixin({
    //
    // 
    // @param {function} func
    //        -- The method to wrap in the debounce.
    // @param {int} wait (in milliseconds)
    //        -- Debounce wait time. `func` will only be called
    //           after `wait` time since the last time it was 
    //           invoked. If it is called again before this time
    //           has elapsed, the timer resets.
    // @param {bool} immediate (optional)
    //        -- Pass true for the immediate parameter to cause 
    //           debounce to trigger the function on the leading 
    //           instead of the trailing edge of the wait interval.
    // @return {int}
    //        -- The setTimeout id. Used to clearTimeout
    //
    debounceId: function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
        return timeout;
      };
    }
  });
}).call(this);   
