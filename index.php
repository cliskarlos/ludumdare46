<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta name="theme-color" content="#000000">
	<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
	<title>Run for their lives - @cliskarlos</title>
	
</head>

<body>

	<script>

		function onFileLoaded(data) {

			var gameData={};
			Object.assign(gameData, data);
			gameData=JSON.stringify(gameData, (key,value)=>{if(key!="id")return value}, '\t');
			localStorage.setItem("localStorage_GameData",gameData);
			var form = document.createElement("form");
			form.setAttribute("method", "post");
			form.setAttribute("action", "../engine/index.php");
			form.setAttribute("target", "_self");
			var inputFolder = document.createElement('input');
			inputFolder.type = 'text';
			inputFolder.name = "gameFolder";
			inputFolder.value = gameFolder;
			form.appendChild(inputFolder);
			
			var inputUrl = document.createElement('input');
			inputUrl.type = 'text';
			inputUrl.name = "parentGamesFolder";
			inputUrl.value = parentGamesFolder;
			form.appendChild(inputUrl);
			document.body.appendChild(form);
			form.submit();
			document.body.removeChild(form); 
		}

		function load(URL) {		

			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if(this.readyState == this.DONE && this.status == 200){
					var json=JSON.parse(this.responseText);    		   
					onFileLoaded(json);
				}
			}
			xhr.open("GET", URL, true);
			xhr.send();
		}
		
		var gameFolder = "ludumdare46-carlos";
		var host = window.location.href.replace("launcher/", "");
		var parentGamesFolder = host+"/games";		

		load(this.parentGamesFolder+"/loadJson.php?gameFolder="+this.gameFolder);

    </script>
	
</body>
</html>