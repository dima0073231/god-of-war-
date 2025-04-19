
  document.getElementById('playButton').addEventListener('click', function () {
    const iframe = document.getElementById('gameTrailer');
    iframe.style.display = 'block';
    iframe.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: 'playVideo',
      args: []
    }), '*');
  });

