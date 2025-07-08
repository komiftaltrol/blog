function setRandomBg() {
  // 先移除舊的背景層與遮罩層
  var oldBg = document.getElementById('stellar-bg');
  if (oldBg) oldBg.remove();
  var oldMask = document.getElementById('stellar-bg-mask');
  if (oldMask) oldMask.remove();

  var images = [
    '/images/root/background1.jpg',
    '/images/root/background2.jpg',
    '/images/root/background3.jpg',
    '/images/root/background4.jpg'
  ];
  var idx = Math.floor(Math.random() * images.length);
  var img = new Image();
  img.src = images[idx];
  img.onload = function() {
    insertBg(images[idx]);
  };
  img.onerror = function() {
    insertBg('');
  };

  function insertBg(bgUrl) {
    // 建立背景層
    var bg = document.createElement('div');
    bg.id = 'stellar-bg';
    bg.style.position = 'fixed';
    bg.style.top = 0;
    bg.style.left = 0;
    bg.style.width = '100vw';
    bg.style.height = '100vh';
    bg.style.zIndex = '0'; // 改為 0
    bg.style.backgroundImage = bgUrl ? 'url(' + bgUrl + ')' : 'none';
    bg.style.backgroundSize = 'cover';
    bg.style.backgroundPosition = 'center';
    bg.style.filter = 'blur(10px)';
    bg.style.pointerEvents = 'none'; // 防止遮擋互動
    // 插入到 body 最前面
    document.body.insertBefore(bg, document.body.firstChild);

    // 建立遮罩層
    var mask = document.createElement('div');
    mask.id = 'stellar-bg-mask';
    mask.style.position = 'fixed';
    mask.style.top = 0;
    mask.style.left = 0;
    mask.style.width = '100vw';
    mask.style.height = '100vh';
    mask.style.zIndex = '1'; // 改為 1
    mask.style.background = 'var(--alpha75)';
    mask.style.pointerEvents = 'none';
    document.body.insertBefore(mask, document.body.children[1]);
  }
}

// 確保所有資源載入完成再執行
window.addEventListener('load', setRandomBg);
// 若主題有用 PJAX，需監聽 PJAX 事件
document.addEventListener('pjax:end', setRandomBg);