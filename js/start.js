// 互動練習一
let hobby = ['閱讀', '攝影', '打遊戲']
for (let j = 0; j < hobby.length; j++){
  console.log('我的興趣：' + hobby[j])
}

// ============================ 初代 ============================ 

// 1. 宣告函式
function greet() {
  const messageEl = document.querySelector('#message')
  messageEl.textContent = '我的興趣：' + hobby.join('、') 
}

// 2. 綁定事件
const btn = document.querySelector('#greetBtn')
btn.addEventListener('click', greet)

// ============================ 次代 ============================ 

// 學習按鈕 任務
// function learn() {
//   const messageEl = document.querySelector('#learningMessage')
//   messageEl.textContent = '今天學會了函式 + DOM 操作！' 
// }
// document.querySelector('#learningBtn').addEventListener('click', learn)

// ================== 第三代 (動態打字效果函式) ================== 

// 參數說明：
// text：要打出的文字字串，例如 '我的興趣：閱讀、運動、打遊戲'
// element：要放文字的 HTML 元素，例如 document.querySelector('#message')
// speed：每個字出現的速度（毫秒），預設值是 100 ms

function typeWriter(text, element, speed = 100) {
  element.textContent = '' // 先清空文字，#message 變成空白
  let i = 0
  const timer = setInterval(() => { // setInterval 會每隔一段時間執行一次指定程式碼
    if (i < text.length) {
      element.textContent += text[i]
      i++
    } else {                 // else：如果所有字都打完了，就停止 setInterval
      clearInterval(timer)   // clearInterval(timer)：停止計時器，結束打字效果。
    }
  }, speed)
}
// 學習訊息按鈕
function learn() {
  const messageEl = document.querySelector('#learningMessage')
  const text = '今天學會了函式 + DOM 操作！'
  typeWriter(text, messageEl, 80)
}
document.querySelector('#learningBtn').addEventListener('click', learn)


// ============================ 輪播 ============================ 

const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')

let idx = 0
let interval = setInterval(run, 2000)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  const carouselWidth = document.querySelector('.carousel').clientWidth
  if (idx > img.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = img.length - 1
  }
  imgs.style.transform = `translateX(${-idx * carouselWidth}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
  idx++
  changeImage()
  resetInterval()
})

leftBtn.addEventListener('click', () => {
  idx--
  changeImage()
  resetInterval()
})

/* 視窗縮放時，保持圖片正確對齊 */
window.addEventListener('resize', changeImage)



const tabs = document.querySelectorAll('.license-tabs .tab');
const panels = document.querySelectorAll('.license-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 移除所有 active
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    // 加上目前點選的 active
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});