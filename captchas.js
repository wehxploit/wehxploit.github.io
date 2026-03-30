(() => {
  const canvas = document.getElementById('captchaCanvas')
  const ctx = canvas.getContext('2d')
  const slider = document.getElementById('rotationSlider')
  const loginBtn = document.querySelector('.butonlogreg')

  const buffer = document.createElement('canvas')
  const bctx = buffer.getContext('2d')

  let img = new Image()
  let imgIndex = 1
  let startAngle = 0
  let solved = false
  let offsetX = 0
  let offsetY = 0

  const radius = 105
  const tolerance = 4

  function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function ensureSliderText() {
    if (document.getElementById('sliderText')) return
    const wrap = slider.parentElement
    wrap.style.position = 'relative'

    const t = document.createElement('div')
    t.id = 'sliderText'
    t.innerText = 'Slide to verify →'
    t.style.position = 'absolute'
    t.style.top = '50%'
    t.style.left = '50%'
    t.style.transform = 'translate(-50%, -50%)'
    t.style.pointerEvents = 'none'
    t.style.opacity = '0.7'
    t.style.zIndex = '1'
    wrap.prepend(t)
  }

  function setSliderText(text) {
    const t = document.getElementById('sliderText')
    if (t) t.innerText = text
  }

  function drawToBuffer() {
    buffer.width = canvas.width
    buffer.height = canvas.height

    const cw = buffer.width
    const ch = buffer.height
    const ir = img.width / img.height
    const cr = cw / ch

    let w, h, x, y

    if (ir > cr) {
      h = ch
      w = h * ir
      x = (cw - w) / 2
      y = 0
    } else {
      w = cw
      h = w / ir
      x = 0
      y = (ch - h) / 2
    }

    bctx.clearRect(0, 0, cw, ch)
    bctx.drawImage(img, x, y, w, h)
  }

  function draw(angle) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.drawImage(buffer, 0, 0)

    ctx.save()
    ctx.translate(
      canvas.width / 2 + offsetX,
      canvas.height / 2 + offsetY
    )
    ctx.rotate(angle * Math.PI / 180)
    ctx.beginPath()
    ctx.arc(0, 0, radius, 0, Math.PI * 2)
    ctx.clip()

    ctx.drawImage(
      buffer,
      -canvas.width / 2 - offsetX,
      -canvas.height / 2 - offsetY
    )

    ctx.restore()
  }

  function loadCaptcha() {
    solved = false
    slider.value = 0
    slider.disabled = false
    slider.style.boxShadow = ''
    loginBtn.style.pointerEvents = 'none'
    loginBtn.style.opacity = '0.5'

    ensureSliderText()
    setSliderText('Slide to verify →')

    imgIndex = rnd(1, 18)
    startAngle = rnd(40, 320)
    offsetX = rnd(-18, 18)
    offsetY = rnd(-18, 18)

    img.src = `captchaimg/uniz (${imgIndex}).jpg`
  }

  img.onload = () => {
    drawToBuffer()
    draw(startAngle)
  }

  slider.oninput = () => {
    if (solved) return
    draw(startAngle - slider.value)
  }

  slider.onchange = () => {
    if (solved) return
    slider.disabled = true

    const diff = Math.abs(startAngle - slider.value) % 360
    const delta = Math.min(diff, 360 - diff)

    if (delta <= tolerance) {
      solved = true
      setSliderText('VERIFIED')
      slider.style.boxShadow = '0 0 20px rgba(0,255,0,0.7)'
      loginBtn.style.pointerEvents = 'auto'
      loginBtn.style.opacity = '1'
    } else {
      setSliderText('ERROR')
      slider.style.boxShadow = '0 0 20px rgba(255,0,0,0.7)'
      setTimeout(loadCaptcha, rnd(2000, 3000))
    }
  }

  window.reloadCaptcha = loadCaptcha
  window.reloadImage = loadCaptcha

  loadCaptcha()
})()
