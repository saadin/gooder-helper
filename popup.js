/*
document.getElementById("btnlink").onclick = function(){
	document.getElementById("t1").innerHTML = 'Title';
	document.getElementById("t2").style.display='block';
	document.getElementById("text2").style.display='block';
	document.getElementById("text2").style.display='block';
	
};

document.getElementById("btnuser").onclick = function(){
	document.getElementById("t1").innerHTML = 'User ID';
	document.getElementById("t2").style.display='none';
	document.getElementById("text2").style.display='none';
};

document.getElementById("btnpost").onclick = function(){
	document.getElementById("t1").innerHTML = 'Post ID';
	
	document.getElementById("t2").style.display='none';
	document.getElementById("text2").style.display='none';
};

document.getElementById("btntag").onclick = function(){
	document.getElementById("t1").innerHTML = 'Tag Value';
	
	document.getElementById("t2").style.display='none';
	document.getElementById("text2").style.display='none';
};

document.getElementById("btngen").onclick = function(){

	copy();
};

*/
function copy()
{alert();
	bg = chrome.extension.getBackgroundPage();

	clipboardholder= bg.document.getElementById("clipboardholder");
	
	clipboardholder.style.display = "block";
	
	clipboardholder.value = "content to be copied into OS clipboard";
	
	clipboardholder.select();
	
	bg.document.execCommand("Copy");
	
	clipboardholder.style.display = "none";
	
	alert("Content copied to clipboard!");
}
