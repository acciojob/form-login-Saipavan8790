function getFormvalue() {
    //Write your code here
var x = document.getElementById("form1");
	let name = "";
	for(var i=0; i<x.length; i=i+1)
		{
			if(x.element[i].value != 'Submit')
				name = name + x.element[i].value + " "
		}
	alert(name.substring(0, name.length - 1));
}
