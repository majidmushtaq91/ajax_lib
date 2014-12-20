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
				var json = JSON.parse(xhr.responseText);

				var heading = json.heading;
				//alert(heading);

				var h2 = document.createElement("h2");
				var h2text = document.createTextNode(heading);

				 var list = document.createElement("ul");
				 var items = json.items

				for( var key in items ) {
					var item = items[key];
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
		xhr.open("GET", "files/ajax.json", true);

		// send request
		xhr.send(null);

		return false;
	};

})();
