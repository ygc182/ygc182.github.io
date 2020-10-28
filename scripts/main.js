function clickH1() {
    let myHeading = document.querySelector('h1')
    myHeading.textContent = 'Hello world!'

    let img = document.querySelector('img')
    img.setAttribute('src', 'images/firefox-logo2.png')
}

function login() {
    let name = prompt('请输入你的名字:')
    if (!name) {
        alert('无效输入')
    } else {
        localStorage.setItem('name', name)
        document.querySelector('h1').textContent = 'hello, ' + name
    }
}

if (!localStorage.getItem('name')) {
    login()
} else {
    let cacheName = localStorage.getItem('name')
    document.querySelector('h1').textContent = '欢迎回来, ' + cacheName
}

function helloFix() {
    alert('火狐，你好')
}