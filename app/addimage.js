function aaa(){
// addImage.js
let smallImg = document.createElement('img')
// 必须 require 进来
smallImg.src = require('../images/1.jpg')
document.body.appendChild(smallImg)

let bigImg = document.createElement('img')
bigImg.src = require('../images/2.jpg')
document.body.appendChild(bigImg)
}

export default aaa