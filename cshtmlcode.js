var txtarea = document.activeElement;
var text = "";


for(var i = txtarea.selectionStart ; i < txtarea.selectionEnd ; i++)
{
	var c = (txtarea.value).charCodeAt(i);
	var code = fixedCharCodeAt(txtarea.value,i);
	if(!code)continue;
	if(code==32) {
		text+="&nbsp;";
	}
	else if(code>32){
		text += "&#"+code+";";
	}
	else text+=String.fromCharCode(code);	

}


var nextpos = parseInt(txtarea.selectionStart,10) + text.length;
strPos = txtarea.selectionStart;
var front = (txtarea.value).substring(0,strPos);  
var end = (txtarea.value).substring(txtarea.selectionEnd,txtarea.value.length); 

txtarea.value = front+text+end;
txtarea.selectionStart = nextpos;
txtarea.selectionEnd = nextpos;

//function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
function fixedCharCodeAt (str, idx) {
    // ex. fixedCharCodeAt ('\uD800\uDC00', 0); // 65536
    // ex. fixedCharCodeAt ('\uD800\uDC00', 1); // 65536
    idx = idx || 0;
    var code = str.charCodeAt(idx);
    var hi, low;
    if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
        hi = code;
        low = str.charCodeAt(idx+1);
        if (isNaN(low)) {
            throw 'High surrogate not followed by low surrogate in fixedCharCodeAt()';
        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
        // We return false to allow loops to skip this iteration since should have already handled high surrogate above in the previous iteration
        return false;
        /*hi = str.charCodeAt(idx-1);
        low = code;
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;*/
    }
    return code;
} 
