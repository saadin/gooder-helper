var txtarea = document.activeElement;
var text = "";


for(var i = txtarea.selectionStart ; i < txtarea.selectionEnd ; i++)
{
	var c = (txtarea.value).charCodeAt(i);
	if(c==32) {
		text+="&nbsp;";
	}
	else text+=String.fromCharCode(c);	
}


var nextpos = parseInt(txtarea.selectionStart,10) + text.length;
strPos = txtarea.selectionStart;
var front = (txtarea.value).substring(0,strPos);  
var end = (txtarea.value).substring(txtarea.selectionEnd,txtarea.value.length); 

txtarea.value = front+text+end;
txtarea.selectionStart = nextpos;
txtarea.selectionEnd = nextpos;


