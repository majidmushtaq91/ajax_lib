

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
		// 3 = Complete



		xhr.onreadystatechange = function(){


			if((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
				var body = document.getElementsByTagName("body")[0]
				var p = document.createElement("p")
				var pText = document.createTextNode(xhr.responseText);
				p.appendChild(pText);
				body.appendChild(p); 
			}
		};  

		// open request{}
		xhr.open("GET", "files/ajax.txt", true);

		// send request
		xhr.send(null);

		return false;
	};

})();
