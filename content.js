
window.onload = () => {
}

//reciviendo desde el popup.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "start" ) {
       start();
      }
    }
  );

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  var lastCount = 0;  
  var x = 0;
  var finish = false;
  var alerted = false;
  
  function start(){
      alert("started!!!");
      
      setInterval(function(){ 
        var commentsMax = parseInt($(".count-text").text());    
        var commentCount = parseInt($("#contents").children.length);
        window.scrollBy(0,180);
        
        if(commentCount<= commentsMax && finish == false){           
            window.scrollBy(0,180)
            lastCount = commentCount;
            x++;           
        }        
        if(!commentsMax){
            window.scrollBy(0,180)
            lastCount = commentCount;
            x++;
        }
        else {
            if(x == 50){
                if(lastCount == commentCount){
                    finish = true;
                }
            }
            if(finish && alerted == false){
                var intWinner = getRandomInt(commentsMax+1);
                var value = $("#contents").children()[parseInt(intWinner)];
                if(!value){
                    alerted= false;
                    finish = false;
                    x= 0;
                }
                else{
                var winner = $("#contents").children()[parseInt(intWinner)].innerText;
                alerted = true;
                alert(winner);
            }
            }
        }
    }, 1000);
  }


