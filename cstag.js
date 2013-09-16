var txtarea = document.activeElement
var text = '#!tag/';
var temp = "";
if(txtarea.selectionStart ===txtarea.selectionEnd)
{
	var temp = prompt("Tag Value:","");
}
else
{
	temp = (txtarea.value).substring(txtarea.selectionStart ,txtarea.selectionEnd);
}


temp = temp.trim();
if(temp==="")throw 'Error: Empty string or all spaces.'

temp = temp.split(" ");
for(i=1; i < temp.length ; i++)
{
	if(temp[i]!=="")
		temp[0]+="_" +temp[i];
}

text+=temp[0];

var nextpos = parseInt(txtarea.selectionStart,10) + text.length;
strPos = txtarea.selectionStart;
var front = (txtarea.value).substring(0,strPos);  
var end = (txtarea.value).substring(txtarea.selectionEnd,txtarea.value.length); 


txtarea.value = front+text+end;
txtarea.selectionStart = nextpos;
txtarea.selectionEnd = nextpos;



/*
if( isEnglish(temp) )
{
	alert('here');
	temp = temp.split(" ");
	i=0;
	while(i< temp.length && temp[i]==="")i++;
	temp[0] = temp[i];
	i++;
	for(; i < temp.length ; i++)
	{
		if(temp[i]!=="")
			temp[0]+="_" +temp[i];
	}
	alert(temp);
}
else if(isPersian(temp))
{
	
}
else
{
}


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



function isEnglish(str)
{
	//alert(str.match("[0-9a-zA-Z_\\- ]*").toString().length + " \n" +str.length);
	if(str.match("[0-9a-zA-Z_\\-]*").toString().length===str.length)
		return true;
	return false;
}
function isPersian(str)
{
	
}
*/