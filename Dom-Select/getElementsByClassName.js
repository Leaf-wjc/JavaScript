var testName = function(opts) {
	debugger;
    var searchClass = opts.searchClass; //要查找的类名
    var nodeScope = opts.scope || document; //要查找的范围
    var tag = opts.tag || "*"; //存储一定范围内要查找的标签
    var result = [];
    console.log(document.getElementsByClassName(searchClass));
    console.log(nodeScope.getElementsByClassName(searchClass));
    if (document.getElementsByClassName) {
        var nodes = nodeScope.getElementsByClassName(searchClass);
        if (tag !== "*") {
            for (var i = 0; nodeScope = nodes[i++];) {
                if (nodeScope.tagName === tag.toUpperCase()) {
                    result.push(nodeScope);
                }
            }
        } else {
            result = nodes;
        }
        return result;
    } else {
        var els = nodeScope.getElementsByTagName(tag);
        var elsLen = els.length;
        var i, j;
        var pattern = new new RegExp("(^|\\s)" + searchClass + "(\\s|$)")
        for (var i = 0, j = 0; i < elsLen; i++) {
            if (pattern.test(els[i].className)) {
                result[j] = els[i];
                j++;
            }
        }
        return result;
    }

}