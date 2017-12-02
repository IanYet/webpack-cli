/**
 * 填充html内容
 */

 import logo from 'logo'
 import './style.css'

 export default function fillHtml(parentNode){
    const contentBox = document.createElement('div')
    const slogan = document.createElement('h1')

    const img = new Image
    img.src = logo
    
    slogan.innerHTML = "webpack-cli"

    contentBox.appendChild(img)
    contentBox.appendChild(slogan)
    parentNode.appendChild(contentBox)
    contentBox.classList.add("logoBox")
 }