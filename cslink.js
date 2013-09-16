var txtarea = document.activeElement
var text;
var lnk = "";
var ttl = "";
if(txtarea.selectionStart ===txtarea.selectionEnd)
{
	lnk = prompt("Link Address:","");
	ttl = prompt("Link Title:","");
}
else
{
	temp = (txtarea.value).substring(txtarea.selectionStart ,txtarea.selectionEnd).trim();
	if(isLink(temp))
	{
		lnk = temp;
		ttl = prompt("Link Title:","");
	}
	else
	{
		ttl=temp;
		lnk = prompt("Link Address:","");
	}
}
lnk = lnk.trim();
ttl = ttl.trim();

if(!isLink(lnk))throw 'Error: Invalid Link';

if(ttl==="")
	text = '[url]'+lnk+'[/url]';
else
	text = '[url=' + lnk+']'+ttl+'[/url]';
var nextpos = parseInt(txtarea.selectionStart,10) + text.length;
strPos = txtarea.selectionStart;
var front = (txtarea.value).substring(0,strPos);  
var end = (txtarea.value).substring(txtarea.selectionEnd,txtarea.value.length); 

txtarea.value = front+text+end;
txtarea.selectionStart = nextpos;
txtarea.selectionEnd = nextpos;


function isLink(lnk)
{
	if(lnk.search("(((http|ftp|ws)[s]?://)|(www\\.))(.)*")===0)return true;
	return false;
}
