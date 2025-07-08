(function() {
  // 取得當前月份
  var month = new Date().getMonth() + 1; // 1~12

  // 各季節圖片陣列
  var images;
  if (month >= 3 && month <= 5) {
    // 春季
    images = [
      '/images/root/spring.png'
      // 可加入更多春季圖片
    ];
  } else if (month >= 6 && month <= 8) {
    // 夏季
    images = [
      '/images/root/summer.jpg'
      // 可加入更多夏季圖片
    ];
  } else if (month >= 9 && month <= 11) {
    // 秋季
    images = [
      '/images/root/autumn.jpg'
      // 可加入更多秋季圖片
    ];
  } else {
    // 冬季
    images = [
      '/images/root/winter.jpg'
      // 可加入更多冬季圖片
    ];
  }

  // 隨機選一張
  var idx = Math.floor(Math.random() * images.length);

  // 建立背景層
  var bg = document.createElement('div');
  bg.style.position = 'fixed';
  bg.style.top = 0;
  bg.style.left = 0;
  bg.style.width = '100vw';
  bg.style.height = '100vh';
  bg.style.zIndex = '-2';
  bg.style.backgroundImage = 'url(' + images[idx] + ')';
  bg.style.backgroundSize = 'cover';
  bg.style.backgroundPosition = 'center';
  bg.style.filter = 'blur(10px)'; // 可根據 _config.stellar.yml 調整
  document.body.appendChild(bg);

  // 建立遮罩層
  var mask = document.createElement('div');
  mask.style.position = 'fixed';
  mask.style.top = 0;
  mask.style.left = 0;
  mask.style.width = '100vw';
  mask.style.height = '100vh';
  mask.style.zIndex = '-1';
  mask.style.background = 'var(--alpha75)'; // 可根據 _config.stellar.yml 調整
  document.body.appendChild(mask);
})();