var i = 0; 			
var images = [];	
var time = 4000;	
	 

images[0] = "destaque-home.png";
images[1] = "destaque-home-2.png";
images[2] = "destaque-home-3.jpeg";
images[3] = "destaque-home-4.jpg";


function changeImg(){
	document.banner.src = images[i];

	
	if(i < images.length - 1){
	  
	  i++; 
	} else { 
		
		i = 0;
	}

	
	setTimeout("changeImg()", time);
}


window.onload=changeImg;

function start() { setInterval(4000);
      
	
      } 
 
function stop() { 
        clearInterval(i); 
      } 