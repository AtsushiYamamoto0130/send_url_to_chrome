(() =>{
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: `
    var title = document.title;
    var page_url = window.location.href;
     var url = "https://slack.com/api/chat.postMessage";

     var xmlhttp;
if (window.XMLHttpRequest) { 
  xmlhttp=new XMLHttpRequest();
} else { // code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}


xmlhttp.open("POST", "https://slack.com/api/chat.postMessage", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("token=<取得したSlackのAPI>&channel=<指定したいチャンネル>&text=タイトル :  " + title + "                                                                  URLはこちら 👉 : " + page_url )


`
  });

  // xmlhttp.setRequestHeader("Cache-Control", "no-cache"); // For no cache



//   response.formData().then(function(formData){
//     console.log(formData);
// });
// response.text().then(function(text){
//     console.log(text);
// });

  chrome.browserAction.setBadgeText({
      tabId: tab.id,
      text: 'Send'
  });
  setTimeout(function(){
      chrome.browserAction.setBadgeText({
          tabId: tab.id,
          text: ''
      });
  }, 1000);

});

})

// // fech


// var req = new Request(url,{
//   type: 'GET',
//   data: data,
//   success: function (data) {
//     alert( 'Can I post to Slack? :' + data.ok );
// }
// });
// console.log(data);

// fetch(req).then(function(data){
//   if (data.ok) {
//       data.blob().then(function(blob){
//           console.log(blob);
//       })
//   }
// });
