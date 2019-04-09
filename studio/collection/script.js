var diyizu
var dierzu
var url = "https://raw.githubusercontent.com/WenpeiWang/ci19/master/studio/collection/mydata.json"
 fetch(url)
 .then(function(response){return response.json();})
 .then(function(json){ buildPage(json);})

 function buildPage(data){
for(var i = 0; i < data.length; i = i + 1){
 var one = document.createElement("p");
 var two = document.createElement("p");
 one.classList.add("diyizu");
 two.classList.add("dierzu");
 document.body.appendChild(one);
 document.body.appendChild(two);
 one.innerHTML = data[i].one;
 two.innerHTML = data[i].two;
}
}