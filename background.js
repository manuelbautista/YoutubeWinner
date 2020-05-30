chrome.runtime.onInstalled.addListener(() => {
    //console.log('Installed');
});

chrome.bookmarks.onCreated.addListener(()=> {
    //alert('bookmark saved!');
})

chrome.runtime.onMessage.addListener(function(message, sender) {
    if(!message.myPopupIsOpen) return;

});