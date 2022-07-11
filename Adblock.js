    !function() {
      function f() {
        var a = document.createElement("div"); a.id = "arlinablock"; a.innerHTML = '<div class="inner"> <div class="header"> <h2>Ad Blocker Detected</h2> </div> <div class="isi"> <p>Please consider supporting us by disabling your ad blocker</p> <div class="tombol"><button class="1 active">Adblock</button></div> </div> </div> </div>';
        var b = document.createElement("script"); b.type = "text/javascript";
      b.async=!0; b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"; b.onerror = function() {
        f(); window.adblock=!0
      }; var e = document.getElementsByTagName("script")[0]; e.parentNode.insertBefore(b,
        e)}();
