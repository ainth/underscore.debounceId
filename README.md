underscore.debounceId
=====================

Underscore's debounce implementation returns the last result of calling the debounced function. This is useful if you care about the return value but the big disadvantage is that there is no way to get the timeout id from debounce. debounceId is a variant of debounce that will always return the timeoutId.

###Usage

The behaviour and arguments are identical to _.debounce (http://underscorejs.org/#debounce). The only difference is in the return value of calling the debounced function. It will always return an (int) that is the id of the timeout.

