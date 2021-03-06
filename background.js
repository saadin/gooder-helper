// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the url of a tab changes.
created=false;
function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.search('(/*gooder.us/*)|(/*174.142.15.1/*)') > -1) {
    // ... show the page action.
    chrome.pageAction.show(tabId);
	//alert("1");
	if(!created)
	{
		chrome.contextMenus.create({type:"normal", id:"11", title:"Link", contexts:["editable"],
			onclick:linkf}, function(){});
		
		chrome.contextMenus.create({type:"normal", id:"12", title:"User", contexts:["editable"],
			onclick:userf}, function(){});
			
		chrome.contextMenus.create({type:"normal", id:"13", title:"Post", contexts:["editable"],
			onclick:postf}, function(){});
			
		chrome.contextMenus.create({type:"normal", id:"14", title:"Tag", contexts:["editable"],
			onclick:tagf}, function(){});
			
		chrome.contextMenus.create({type:"normal", id:"15", title:"IMG", contexts:["editable"],
			onclick:imgf}, function(){});
			
		chrome.contextMenus.create({type:"normal", id:"16", title:"HTML Code", contexts:["editable"],
			onclick:htmlcodef}, function(){});
			
		chrome.contextMenus.create({type:"normal", id:"17", title:"Replace Spaces", contexts:["editable"],
			onclick:replacespacef}, function(){});
		
		created=true;
	}
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

function linkf(info, tab)
{
	chrome.tabs.executeScript(null, {file: "cslink.js"});
}

function userf(info,tab)
{
	chrome.tabs.executeScript(null, {file: "csuser.js"});
}

function postf(info,tab)
{
	chrome.tabs.executeScript(null, {file: "cspost.js"});
}

function tagf(info,tab)
{
	chrome.tabs.executeScript(null, {file: "cstag.js"});
}
function imgf(info,tab)
{
	chrome.tabs.executeScript(null, {file: "csimg.js"});
}

function htmlcodef(info,tab)
{
	chrome.tabs.executeScript(null, {file: "cshtmlcode.js"});
}

function replacespacef(info,tab)
{
	chrome.tabs.executeScript(null, {file: "csreplacespace.js"});
}
