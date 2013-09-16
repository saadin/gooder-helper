var txtarea = document.activeElement
var text = '#!user/';
var temp;
if(txtarea.selectionStart ===txtarea.selectionEnd)
{
	var temp = prompt("User Number:","");
}
else
{
	temp = (txtarea.value).substring(txtarea.selectionStart ,txtarea.selectionEnd);
}

temp = parseInt(temp,10);
if(!isNaN(temp))
{
	text+=temp;
}
else
	throw 'Error: selection or input is not a number';


var nextpos = parseInt(txtarea.selectionStart,10) + text.length;
strPos = txtarea.selectionStart;
var front = (txtarea.value).substring(0,strPos);  
var end = (txtarea.value).substring(txtarea.selectionEnd,txtarea.value.length); 


txtarea.value = front+text+end;
txtarea.selectionStart = nextpos;
txtarea.selectionEnd = nextpos;