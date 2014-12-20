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

			if((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
				var body = document.getElementsByTagName("body")[0]

				var heading = xhr.responseXML.getElementsByTagName("heading")[0].firstChild.nodeValue;
				var h2 = document.createElement("h2");
				var h2text = document.createTextNode(heading);

				 var list = document.createElement("ul");
				 var items = xhr.responseXML.getElementsByTagName("items")[0];

				 items = items.getElementsByTagName("item");

				for(var i=0; i<items.length; i++ ) {
					var item = items[i].firstChild.nodeValue;
					var li = document.createElement("li");
					var litext = document.createTextNode(item);
					li.appendChild(litext);
					list.appendChild(li);
				}


				h2.appendChild(h2text);

				body.appendChild(h2);
				body.appendChild(list);

				body.removeChild(link)

				span.innerHTML = "Loaded";
			} 
		};  

		// open request{}
		xhr.open("GET", "files/ajax.xml", true);

		// send request
		xhr.send(null);

		return false;
	};

})();
