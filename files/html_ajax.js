(function(){

	var link = document.getElementsByTagName('a')[0]
	link.onclick = function() {

		//xhr object
		var xhr = new XMLHttpRequest();

		// handle the on ready stage
		// xhr.readyState propert value
		// 0 = uninitialized
		// 1 = Loading
		// 2 = Loaded
		// 3 = Interactive
		// 4 = Complete



		xhr.onreadystatechange = function(){
			span = document.getElementsByTagName("span")[0]

			if((xhr.readyState == 1)) {

				span.innerHTML = "Loading";

			}

			if((xhr.readyState == 2)) {

				span.innerHTML = "Loaded";

			}

			if((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
				var body = document.getElementsByTagName("body")[0]
				var d = document.createElement("div")
				//var pText = document.createTextNode(xhr.responseText);
				//p.appendChild(pText);
				body.appendChild(d); 

				var div = document.getElementsByTagName("div")[0]
				div.innerHTML = xhr.responseText;

				body.removeChild(link)
			}
		};  

		// open request{}
		xhr.open("GET", "files/ajax.html", true);

		// send request
		xhr.send(null);

		return false;
	};

})();
