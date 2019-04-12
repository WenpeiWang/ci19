
// var currentChar;
var yanse = "#f6f0e2";

$(document).ready(function() {
	var entryCount = 0;
	var displayCount = 0;

  //capture key presses
  $(document).on("keypress", function(e) {
  		e.preventDefault();
  		entryCount ++;
  		displayCount ++;
      console.log(char)
  	
    //translate unicode to characters        
    var char = String.fromCharCode(e.which);
    console.log(char);
    currentChar = char;
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing" + displayCount);
    createElement(char);
  });

  //capture function keys

   $(document).on("keydown", function(e) {
   	//if pressed key is a backsapce
   	
    if (e.which == 8){
   		e.preventDefault();
   		entryCount ++;
   		displayCount --;
   		if (displayCount < 0){
   			displayCount = 0;
   		}
   		console.log("entry #" + entryCount + " : " + e.which + " | BKSP.Showing " + displayCount);
   		deleteElement();


   	// } else if(e.which == 37) {
    //   //left arrow
    //   //get id of the image
    //   var id = '#' + currentChar; 
    //   var img = $(id);
    //   //calculate the left position
    //   var offset = img.offset();
    //   var currentLeft = offset.left;

    //   document.getElementById(currentChar).style.left = currentLeft - 10 + 'px';


    // } else if(e.which == 38){
    //   //up arrow
    //   //get id of the image
    //   var id = '#' + currentChar; 
    //   //call the image
    //   var img = $(id);
    //   //calculate the bottom position
    //   var offset = img.offset();
    //   var top = offset.top;
    //   var currentBottom = $(window).height() - top - img.height();

    //   //update bottom position
    //   document.getElementById(currentChar).style.bottom = currentBottom + 10 + 'px';

    // } else if(e.which == 39) {
    //   //right arrrow
    //   //get id of the image
    //   var id = '#' + currentChar; 
    //   var img = $(id);
    //   //calculate the left position
    //   var offset = img.offset();
    //   var currentLeft = offset.left;

    //   document.getElementById(currentChar).style.left = currentLeft + 10 + 'px';

    // } else if(e.which == 40) {
    //   //down arrow
    //   var id = '#' + currentChar; 
    //   //call the image
    //   var img = $(id);
    //   //calculate the bottom position
    //   var offset = img.offset();
    //   var top = offset.top;
    //   var currentBottom = $(window).height() - top -img.height();

    //   //update bottom position
    //   document.getElementById(currentChar).style.bottom = currentBottom - 10 + 'px';


    }
 	});

 });
function createElement(k) {
	var elem = $('#cursor');
  

	if (k == "a" || k == "A") {

   // elem.before('<span class="inner">A</span>');
   var el = document.getElementById('a');

   if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/a.png');
      img.id = 'a';
      img.style.width = "16%";
      document.body.appendChild(img);
      $( "#a" ).draggable();
   }

  }
	if (k == "b" || k == "B") {
   // elem.before('<span class="inner">B</span>');
   var el = document.getElementById('b');

   if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/b.png');
      img.id = 'b';
      //presetting the positon of the images
      // img.style.top = '0px';
      img.style.right ='100px';
      //how you can change the size of images
      img.style.width = "8%";
      document.body.appendChild(img);
      $( "#b" ).draggable();
   }

  }
	if (k == "c" || k == "C") {
   // elem.before('<span class="inner">C</span>');
     var el = document.getElementById('c');

   if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/c.png');
      img.id = 'c';
      img.style.top ='480px';
      img.style.width = "30%";
      document.body.appendChild(img);
      $( "#c" ).draggable();
   }

  }
	if (k == "d" || k == "D") {
   // elem.before('<span class="inner">D</span>'); 
      var el = document.getElementById('d');

   if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/d.png');
      img.id = 'd';
      img.style.right ='300px';
      img.style.width = "4%";
      document.body.appendChild(img);
      $( "#d" ).draggable();
   }
  }
	if (k == "e" || k == "E") {
   //elem.before('<span class="inner">E</span>'); 
        var el = document.getElementById('e');

   if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/e.png');
      img.id = 'e';
      img.style.top ='80px';
      img.style.right ='80px';
      img.style.width = "5%";
      document.body.appendChild(img);
      $( "#e" ).draggable();
   }
  }
	if (k == "f" || k == "F") {
   //elem.before('<span class="inner">F</span>');
        var el = document.getElementById('f');

   if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/f.png');
      img.id = 'f';
      img.style.left ='280px';
      img.style.top ='80px';
      img.style.width = "10%";
      document.body.appendChild(img);
      $( "#f" ).draggable();
   } 
  }
  if (k == "g" || k == "G") {
   //elem.before('<span class="inner">G</span>'); 
     var el = document.getElementById('g');

   if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/g.png');
      img.id = 'g';
      img.style.left ='550px';
      img.style.bottom ='80px';
      img.style.width = "11%";
      document.body.appendChild(img);
      $( "#g" ).draggable();
   }
  }
  if (k == "h" || k == "H") {
   //elem.before('<span class="inner">H</span>'); 
     var el = document.getElementById('h');

   if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/h.png');
      img.id = 'h';
      img.style.left ='180px';
      img.style.bottom ='30px';
      img.style.width = "35%";
      document.body.appendChild(img);
      $( "#h" ).draggable();
   }
  }
  if (k == "i" || k == "I") {
   //elem.before('<span class="inner">I</span>'); 
    var el = document.getElementById('i');

    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/i.png');
      img.id = 'i';
      img.style.left ='580px';
      img.style.top ='580px';
      img.style.width = "5%";
      document.body.appendChild(img);
      $( "#i" ).draggable();
   }
  }
  if (k == "j" || k == "J") {
   //elem.before('<span class="inner">J</span>'); 
      var el = document.getElementById('j');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/j.png');
      img.id = 'j';
      img.style.right ='80px';
      img.style.bottom ='80px';
      img.style.width = "5%";
      document.body.appendChild(img);
      $( "#j" ).draggable();
   }
  }
  if (k == "k" || k == "K") {
   //elem.before('<span class="inner">K</span>'); 
      var el = document.getElementById('k');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/k.png');
      img.id = 'k';
      img.style.right ='380px';
      img.style.top ='280px';
      img.style.width = "12%";
      document.body.appendChild(img);
      $( "#k" ).draggable();
   }
  }
  if (k == "l" || k == "L") {
   //elem.before('<span class="inner">L</span>'); 
      var el = document.getElementById('l');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/l.png');
      img.id = 'l';
      img.style.top ='380px';
      img.style.right ='80px';
      img.style.width = "25%";
      document.body.appendChild(img);
      $( "#l" ).draggable();
   }
  }
  if (k == "m" || k == "M") {
   //elem.before('<span class="inner">M</span>'); 
      var el = document.getElementById('m');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/m.png');
      img.id = 'm';
      img.style.right ='580px';
      img.style.top ='80px';
      img.style.width = "12%";
      document.body.appendChild(img);
      $( "#m" ).draggable();
   }
  }
  if (k == "n" || k == "N") {
   //elem.before('<span class="inner">N</span>'); 
      var el = document.getElementById('n');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/n.png');
      img.id = 'n';
      img.style.top ='480px';
      img.style.left ='680px';
      img.style.width = "8%";
      document.body.appendChild(img);
      $( "#n" ).draggable();
   }
  }
  if (k == "o" || k == "O") {
   //elem.before('<span class="inner">O</span>'); 
      var el = document.getElementById('o');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/o.png');
      img.id = 'o';
      img.style.left ='580px';
      img.style.bottom ='380px';
      img.style.width = "18%";
      document.body.appendChild(img);
      $( "#o" ).draggable();
   }
  }
  if (k == "p" || k == "P") {
   //elem.before('<span class="inner">P</span>'); 
      var el = document.getElementById('p');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/p.png');
      img.id = 'p';
      img.style.right ='380px';
      img.style.top ='380px';
      img.style.width = "3%";
      document.body.appendChild(img);
      $( "#p" ).draggable();
   }
  }
  if (k == "q" || k == "Q") {
   //elem.before('<span class="inner">Q</span>'); 
      var el = document.getElementById('q');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/q.png');
      img.id = 'q';
      img.style.left ='780px';
      img.style.top ='80px';
      img.style.width = "13%";
      document.body.appendChild(img);
      $( "#q" ).draggable();
   }
  }
  if (k == "r" || k == "R") {
   //elem.before('<span class="inner">R</span>'); 
      var el = document.getElementById('r');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/r.png');
      img.id = 'r';
      img.style.top ='380px';
      img.style.right ='480px';
      img.style.width = "9%";
      document.body.appendChild(img);
      $( "#r" ).draggable();
   }
  }
  if (k == "s" || k == "S") {
   //elem.before('<span class="inner">S</span>'); 
       var el = document.getElementById('s');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/s.png');
      img.id = 's';
      img.style.left ='80px';
      img.style.bottom ='380px';
      img.style.width = "80%";
      document.body.appendChild(img);
      $( "#s" ).draggable();
   }
  }
  if (k == "t" || k == "T") {
   //elem.before('<span class="inner">T</span>'); 
       var el = document.getElementById('t');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/t.png');
      img.id = 't';
      img.style.top ='80px';
      img.style.left ='80px';
      img.style.width = "5%";
      document.body.appendChild(img);
      $( "#t" ).draggable();
   }
  }
  if (k == "u" || k == "U") {
   //elem.before('<span class="inner">U</span>'); 
       var el = document.getElementById('u');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/u.png');
      img.id = 'u';
      img.style.top ='80px';
      img.style.right ='480px';
      img.style.width = "13%";
      document.body.appendChild(img);
      $( "#u" ).draggable();
   }
  }
  if (k == "v" || k == "V") {
   //elem.before('<span class="inner">V</span>'); 
       var el = document.getElementById('v');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/v.png');
      img.id = 'v';
      img.style.left ='180px';
      img.style.top ='180px';
      img.style.width = "12%";
      document.body.appendChild(img);
      $( "#v" ).draggable();
   }
  }
  if (k == "w" || k == "W") {
   //elem.before('<span class="inner">W</span>'); 
       var el = document.getElementById('w');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/w.png');
      img.id = 'w';
      img.style.left ='230px';
      img.style.top ='80px';
      img.style.width = "5%";
      document.body.appendChild(img);
      $( "#w" ).draggable();
   }
  }
  if (k == "x" || k == "X") {
   //elem.before('<span class="inner">X</span>'); 
       var el = document.getElementById('x');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/x.png');
      img.id = 'x';
      img.style.right ='200px';
      img.style.bottom ='1px';
      img.style.width = "16%";
      document.body.appendChild(img);
      $( "#x" ).draggable();
   }
  }
  if (k == "y" || k == "Y") {
   //elem.before('<span class="inner">Y</span>'); 
       var el = document.getElementById('y');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/y.png');
      img.id = 'y';
      img.style.top ='300px';
      img.style.width = "8%";
      document.body.appendChild(img);
      $( "#y" ).draggable();
   }
  }
  if (k == "z" || k == "Z") {
   //elem.before('<span class="inner">Z</span>'); 
       var el = document.getElementById('z');
    
    if(el == undefined) {
      var img = document.createElement('img');
      img.setAttribute('src', 'assets/z.png');
      img.id = 'z';
      img.style.right ='80px';
      img.style.top ='280px';
      img.style.width = "38%";
      document.body.appendChild(img);
      $( "#z" ).draggable();
   }

  }


  if (k == " ") { 
    // elem.before('<span class="inner">&nbsp;</span>'); 
    //  for (i = 0; i < colors.length; i++) {

    //     document.getElementById("container").style.backgroundColor = colors[i];

    
      var colors = ["#f6f0e2", "#ffbcbb", "#defef9", "#bec380", "#b6c7d9", "#fdfbd2"];
 
     console.log(colors);


      if(yanse == colors[0]) {
        yanse = colors[1];

      } else if (yanse == colors[1]) {
        yanse = colors[2];

      } else if(yanse == colors[2]) {
        yanse = colors[3];
      }
      else if(yanse == colors[3]) {
        yanse = colors[4];
      }
      else if(yanse == colors[4]) {
        yanse = colors[5];
      }
      else if(yanse == colors[5]) {
        yanse = colors[0];
      }
      console.log(yanse)
   document.getElementById("container").style.backgroundColor = yanse;
  }

}
function deleteElement(){
	$("img").last().remove();
}
