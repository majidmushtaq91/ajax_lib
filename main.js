(function(){

	var link = document.getElementsByTagName('a')[0]
	link.onclick = function() {

		Sam.ajax('files/ajax.json', {
			method: 'GET',
			complete: function(response) {
				var body = document.getElementsByTagName("body")[0]
				var json = response

				span = document.getElementsByTagName("span")[0]

				if((this.readyState == 1)) {

					span.innerHTML = "Loading";

				}

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
		});
	
		return false;
	};

})();