/* basic/Ajax.js */

export function ajax(req){
/*
**  arg: req = {
        method: "",
        url: "",
        type: "",
        params: "",
        resulthandler: function(){},
        progresshandler: function(){},
        headers:{
                "name":"value",
            }
    };
*/
    if (typeof req != "object") {
        throw new Error("Argument must be of type: Object");
    }
    var xhr = new XMLHttpRequest();
    xhr.request = req;
    if (typeof req.resulthandler === "undefined") {
        throw new Error("ajax: no handler function!");
    }
    xhr.handler = function(something){
        if (typeof req.resulthandler === 'function'){
            req.resulthandler(something);
        }
        else if (typeof req.resulthandler === 'object'){
            req.resulthandler.innerHTML = something;
        }
    };
    xhr.addEventListener("readystatechange",function(e){
        if (this.readyState == 4){
            if ((this.status > 199) && (this.status < 400))
            this.handler(this.response);
        }
    });
    xhr.timeout = 10000;
    xhr.addEventListener("timeout",function(){
        if ((this.readyState > 0) && (this.readyState < 4)) this.abort();
        this.handler(new Error("Connection timeout"));
    });
    xhr.addEventListener("error",function(e){
        xhr.handler(e);
    });
    if (req.progresshandler){
        if (typeof req.progresshandler === "function") {
            (xhr.upload?xhr.upload:xhr).onprogress = function(e){
                req.progresshandler.call(req,(e.lengthComputable?(e.loaded/e.total):1));
            }
        }
        else if (typeof req.progresshandler === "object") {
            if (typeof req.progresshandler.setState === "function") {
                (xhr.upload?xhr.upload:xhr).onprogress = function(e){
                    if (!req.progresshandler.active) req.progresshandler.show(req.progresshandler.total+1)
                    else req.progresshandler.value = Math.floor(req.progresshandler.value)+(e.lengthComputable?(e.loaded-1/e.total):0.99);
                }
            }
        }
    }
    if (req.type) {
        xhr.responseType = req.type;
    }
    else {
			if ((req.method == "GET") && (req.url.search(/\.jp[e]?g$/i) > 0)) {
				xhr.responseType = 'blob';
			}
		 }
    (xhr.executesession = function(){
        xhr.open(req.method,encodeURI(req.url),true);
        if (req.headers) {
            var h;
            for (h in req.headers) {
                xhr.setRequestHeader(h,req.headers[h]);
            }
        }
        xhr.send(req.params);
    })();
    return xhr;
}

export default ajax;
