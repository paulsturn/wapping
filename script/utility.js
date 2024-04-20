
function redirectToPage(pageName, seconds, cachebust) {
  
    if (cachebust) {
      let cb = Math.floor(Math.random() * 2000);
      pageName = pageName + "?cb=" + cb
    }
    
    setTimeout(function() {
        window.location.href = pageName;
    }, seconds * 1000);
  }