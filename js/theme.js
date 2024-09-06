// 获取切换按钮和 body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 检查本地存储中的主题模式
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark-mode' ? '🌙 切换模式' : '🌞 切换模式';
}

// 切换黑天白天模式
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '🌞 切换模式';  // 切换到白天模式图标
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '🌙 切换模式';  // 切换到黑夜模式图标
        localStorage.setItem('theme', 'dark-mode');
    }
});
