window.PGB     = new Object;
PGB.plg        = new Object;
PGB.utl        = new Object;
PGB.Bse        = new Function;
PGB.hlp        = new Object;
PGB.doc        = null;

/**
 * Initializer
 * 
 * @return {Int}
 */
PGB.init = function() {
    var context, i;
    PGB.doc = $(document);
    context = $(document.body);
    i = 0;
    for (p in PGB.plg) {
        if (PGB.plg[p] !== undefined &&
                $.isFunction(PGB.plg[p].init)) {
            PGB.plg[p].init.apply(PGB.plg[p], [context]);
            i++;
        }
    }
    return i;
};

/**
 * Gets data args into string
 * 
 * @param {String} str
 * @param {Object} args
 * @return {String}
 */
PGB.utl.a = function(str, args) {
  var key, val, out;
  out = str;
  for(arg in args) {
    key = new RegExp("\{" + arg + "\}", "ig");
    out = out.replace(key, args[arg]);
  }
  return out;
};

/**
 * Returns dummy data
 * 
 * @return {Int}
 */
PGB.Bse.prototype.test = function() {
    return 1;
};

$(PGB.init);