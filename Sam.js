var Sam = {};

Sam.createXHR = function(url, options) {

	var xhr = false;

	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();

	}

	if(xhr) {

		options = options || {};
		options.method =  options.method || "GET";
		
		xhr.onreadystatechange = function() {
			if((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) { 
				
				if(options.complete) {

					options.complete.call(xhr, JSON.parse(xhr.responseText));
				}
			} 
	    }

	xhr.open(options.method, url, true);
	return xhr;

	} else {
		return false;
	}
}


Sam.ajax = function(url, options) {
	var xhr = Sam.createXHR(url, options);

	if(xhr) {

		xhr.send(null);
	}

};


