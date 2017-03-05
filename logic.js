function beginSave(tabSetName) {
	chrome.windows.getCurrent({"populate":true}, function(curr_window) {
      saveTabset(tabSetName,curr_window.tabs);
    });
};

function saveTabset(tabSetName, tabData) {
	//first check if a similar tabsetName exists in the chrome.storage.sync...
	// chrome.storage.sync.get(tabSetName, function( items){
		
	// 	if(items) {
	// 		console.error('Tabset Already Exists...!');	
	// 	}

	// 	// if(tabSetData) {
	// 	// //we have an existing tabset. In the ideal world, we will
	// 	// //warn the user now...
	// 	// }
		var data= {

		};
		data[tabSetName] = tabData;

		//set the data now.
		chrome.storage.sync.set(data,function(){
			console.log('Done!');

		});
	// });

		
	
}


document.addEventListener('DOMContentLoaded', function(e){
	var queryButton = document.getElementById('collect_button');
	queryButton.addEventListener('click',function(e){
		var tabSetName = document.querySelector('#tabset_name');
		beginSave(tabSetName.value);
	});

});	