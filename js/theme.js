// 获取切换按钮和 body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 初始化图标和模式
let isDarkMode = false;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    isDarkMode = savedTheme === 'dark-mode';
    themeToggle.innerHTML = isDarkMode ? '🌙' : '🌞';
}

// 切换模式
themeToggle.addEventListener('click', () => {
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '🌞';  // 切换到白天图标
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '🌙';  // 切换到黑夜图标
        localStorage.setItem('theme', 'dark-mode');
    }
    isDarkMode = !isDarkMode;
});
