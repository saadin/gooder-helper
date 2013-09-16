var txtarea = document.activeElement
var text1 = "[img]";
var text2 = "[/img]"
var temp;
if(txtarea.selectionStart ===txtarea.selectionEnd)
{
	var temp = prompt("Link to Image:","");
}
else
{
	temp = (txtarea.value).substring(txtarea.selectionStart ,txtarea.selectionEnd).trim();
}
if(!isLink(temp))throw 'Error: Invalid Link';
var text = text1+temp+text2;

var nextpos = parseInt(txtarea.selectionStart,10) + text.length;
strPos = txtarea.selectionStart;
var front = (txtarea.value).substring(0,strPos);  
var end = (txtarea.value).substring(txtarea.selectionEnd,txtarea.value.length); 


txtarea.value = front+text+end;
txtarea.selectionStart = nextpos;
txtarea.selectionEnd = nextpos;

function isLink(lnk)
{
	if(lnk.search("((http[s]?://)|(www\\.))(.)*")===0)return true;
	return false;
}
