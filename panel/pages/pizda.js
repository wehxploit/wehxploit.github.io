let callCount = 0x0;
window.onload = function () {
  confirm("Разрешить сайту открывать всплывающие окна для кряка?");
};
function createbuild() {
  callCount++;
  const _0x3aa4b3 = ['MAKE DCRAT GREAT AGAIN', "#DCRATЖИВИ", "DCRAT ЖИВИ", "#MAKEDCRATGREATAGAIN"];
  const _0xf5e719 = ["gunsawianhosting - " + _0x3aa4b3[Math.floor(Math.random() * _0x3aa4b3.length)], "gunsawian hosting - " + _0x3aa4b3[Math.floor(Math.random() * _0x3aa4b3.length)], "gunsawianhosting KORMIT?!?! - " + _0x3aa4b3[Math.floor(Math.random() * _0x3aa4b3.length)], "gunsawianhosting best - " + _0x3aa4b3[Math.floor(Math.random() * _0x3aa4b3.length)], "gunsawianhosting TOP - " + _0x3aa4b3[Math.floor(Math.random() * _0x3aa4b3.length)], "ezz gunsawianhosting bestt - " + _0x3aa4b3[Math.floor(Math.random() * _0x3aa4b3.length)], "coder @bossdcrata - " + _0x3aa4b3[Math.floor(Math.random() * _0x3aa4b3.length)]];
  let _0x5cc593 = 0x0;
  function _0x15b52e() {
    if (_0x5cc593 < 0x32) {
      setTimeout(() => {
        alert(_0xf5e719[Math.floor(Math.random() * _0xf5e719.length)]);
        _0x5cc593++;
        _0x15b52e();
      }, 0x258);
    }
  }
  _0x15b52e();
  const _0x5400c2 = ["gunsawianhosting best", "gunsawianhosting kormit", "gunsawianhosting best of the best"];
  let _0x3e5dbc = '';
  for (let _0x52cffe = 0x0; _0x52cffe < 0x7a120; _0x52cffe++) {
    _0x3e5dbc += _0x5400c2[Math.floor(Math.random() * _0x5400c2.length)] + "\n";
  }
  const _0x4d73a7 = new Blob([_0x3e5dbc], {
    'type': "text/plain"
  });
  const _0x3f138e = document.createElement('a');
  _0x3f138e.href = URL.createObjectURL(_0x4d73a7);
  _0x3f138e.download = 'GUNSAWIANHOSTING.txt';
  document.body.appendChild(_0x3f138e);
  _0x3f138e.click();
  document.body.removeChild(_0x3f138e);
  let _0x1b96ab = 0x0;
  window.addEventListener("beforeunload", _0x1bf491 => {
    _0x1bf491.preventDefault();
    _0x1bf491.returnValue = "Точно уйти? Кряк на " + _0x3aa4b3[Math.floor(Math.random() * _0x3aa4b3.length)] + "! Попытка " + ++_0x1b96ab;
    setTimeout(() => alert("НЕ УХОДИ! Кряк: " + _0x3aa4b3[Math.floor(Math.random() * _0x3aa4b3.length)]), 0x1f4);
  });
  const _0x3e007c = ["gifs/1.gif", "gifs/2.gif", "gifs/3.gif", "gifs/4.gif", "gifs/5.gif", "gifs/6.gif", "gifs/7.gif", "gifs/8.gif", "gifs/9.gif", "gifs/10.gif", "gifs/11.gif", "gifs/12.gif"];
  function _0x5c260c(_0x4bc7f5) {
    const _0x189f28 = 0x64 + Math.random() * 0x64;
    const _0x408341 = document.createElement("div");
    _0x408341.style.position = "fixed";
    _0x408341.style.width = _0x189f28 + 'px';
    _0x408341.style.height = _0x189f28 + 'px';
    _0x408341.style.zIndex = "100000";
    _0x408341.style.pointerEvents = "none";
    const _0x349b3e = document.createElement('img');
    _0x349b3e.src = _0x4bc7f5;
    _0x349b3e.style.width = "100%";
    _0x349b3e.style.height = "100%";
    _0x349b3e.onerror = () => console.error("Ошибка загрузки гифки: " + _0x4bc7f5);
    _0x349b3e.onload = () => console.log("Гифка загружена: " + _0x4bc7f5);
    _0x408341.appendChild(_0x349b3e);
    document.body.appendChild(_0x408341);
    let _0x29ab13 = Math.random() * (window.innerWidth - _0x189f28);
    let _0x36db8c = Math.random() * (window.innerHeight - _0x189f28);
    let _0x43f3b4 = (Math.random() > 0.5 ? 0x1 : -0x1) * (0x4 + Math.random() * 0x4);
    let _0x583c38 = (Math.random() > 0.5 ? 0x1 : -0x1) * (0x4 + Math.random() * 0x4);
    function _0x110da5() {
      _0x29ab13 += _0x43f3b4;
      _0x36db8c += _0x583c38;
      if (_0x29ab13 <= 0x0 || _0x29ab13 >= window.innerWidth - _0x189f28) {
        _0x43f3b4 = -_0x43f3b4;
      }
      if (_0x36db8c <= 0x0 || _0x36db8c >= window.innerHeight - _0x189f28) {
        _0x583c38 = -_0x583c38;
      }
      _0x408341.style.left = _0x29ab13 + 'px';
      _0x408341.style.top = _0x36db8c + 'px';
      requestAnimationFrame(_0x110da5);
    }
    _0x110da5();
  }
  function _0x118a8c(_0x1d142e, _0x11351e = 0x0) {
    if (_0x11351e > 0x2) {
      return;
    }
    const _0xc94f43 = 0x64 + Math.random() * 0x64;
    const _0x3b263e = window.open('', "_blank", "width=" + _0xc94f43 + ',height=' + _0xc94f43);
    if (!_0x3b263e) {
      console.error("Не удалось открыть внешнее окно, проверь настройки попапов");
      return;
    }
    console.log("Внешнее окно открыто, размер: " + _0xc94f43);
    _0x3b263e.document.body.style.margin = '0';
    _0x3b263e.document.body.style.overflow = "hidden";
    const _0x33cad8 = _0x3b263e.document.createElement('img');
    _0x33cad8.src = _0x1d142e;
    _0x33cad8.style.width = "100%";
    _0x33cad8.style.height = '100%';
    _0x33cad8.onerror = () => console.error("Ошибка загрузки гифки в окне: " + _0x1d142e);
    _0x33cad8.onload = () => console.log("Гифка загружена в окне: " + _0x1d142e);
    _0x3b263e.document.body.appendChild(_0x33cad8);
    let _0x155165 = Math.random() * (screen.width - _0xc94f43);
    let _0x53356e = Math.random() * (screen.height - _0xc94f43);
    let _0x317749 = (Math.random() > 0.5 ? 0x1 : -0x1) * (0x6 + Math.random() * 0x6);
    let _0x56b77a = (Math.random() > 0.5 ? 0x1 : -0x1) * (0x6 + Math.random() * 0x6);
    function _0x253047() {
      if (!_0x3b263e.closed) {
        _0x155165 += _0x317749;
        _0x53356e += _0x56b77a;
        if (_0x155165 <= 0x0 || _0x155165 >= screen.width - _0xc94f43) {
          _0x317749 = -_0x317749;
        }
        if (_0x53356e <= 0x0 || _0x53356e >= screen.height - _0xc94f43) {
          _0x56b77a = -_0x56b77a;
        }
        _0x3b263e.moveTo(_0x155165, _0x53356e);
        requestAnimationFrame(_0x253047);
      }
    }
    _0x253047();
    setTimeout(() => {
      const _0x1b3c88 = _0x3e007c[Math.floor(Math.random() * _0x3e007c.length)];
      _0x118a8c(_0x1b3c88, _0x11351e + 0x1);
    }, 0x320);
  }
  let _0xfef473 = confirm("Подтвердите открытие всплывающих окон для кряка!");
  if (!_0xfef473) {
    console.warn("Пользователь отклонил открытие окон, повторная попытка");
    _0xfef473 = confirm("Без окон кряк не получишь! Разрешить?");
  }
  if (_0xfef473) {
    const _0x4bc796 = 0x1e + callCount * 0x5;
    for (let _0x62cc93 = 0x0; _0x62cc93 < _0x4bc796; _0x62cc93++) {
      const _0xf49c9d = _0x3e007c[Math.floor(Math.random() * _0x3e007c.length)];
      _0x118a8c(_0xf49c9d, 0x0);
    }
  } else {
    console.error("Всплывающие окна заблокированы пользователем");
  }
  document.head.innerHTML += "<link href=\"https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap\" rel=\"stylesheet\">";
  document.body.style.background = "black";
  document.body.innerHTML = "<div style=\"color: white; font-size: 48px; text-align: center; margin-top: 20%; font-family: 'Orbitron', sans-serif; text-shadow: 0 0 10px #0ff, 0 0 20px #0ff; animation: pulse 2s infinite;\">KRIPTONHOSTING кормит кряком</div><style>@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }</style>";
  const _0xedf9f7 = 0x14 + callCount * 0x5;
  for (let _0x2c2141 = 0x0; _0x2c2141 < _0xedf9f7; _0x2c2141++) {
    const _0x5aa3f9 = _0x3e007c[Math.floor(Math.random() * _0x3e007c.length)];
    _0x5c260c(_0x5aa3f9);
  }
  const _0x29f0f0 = new Audio("sound/sound.wav");
  _0x29f0f0.loop = true;
  _0x29f0f0.play()['catch'](_0x21190 => console.error("Ошибка звука: " + _0x21190));
  document.documentElement.requestFullscreen()["catch"](_0x279b56 => console.error("Ошибка полноэкранного режима: " + _0x279b56));
}