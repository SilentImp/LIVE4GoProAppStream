(function(){

  function LIVE4GoProController(){
    var copy = document.querySelectorAll('article nav a.copy'),
        index = copy.length;
    while(index--){
      copy[index].addEventListener('touchstart', this.copyToClipboard, false);
      copy[index].addEventListener('click', this.copyToClipboard, false);
    }
  }

  LIVE4GoProController.prototype.copyToClipboard = function(event){
    event.preventDefault();
    event.stopPropagation();
    if(event.gesture){
      event.gesture.stopPropagation();
      event.gesture.preventDefault();
      }
    var link = event.currentTarget;
      if(ClipboardEvent){
          copyEvent = new ClipboardEvent('copy', {
            dataType: 'text/plain', 
            data: link.getAttribute('href')
            });
      document.dispatchEvent(copyEvent);
    }
    return false;
  };

  new LIVE4GoProController();

})()
