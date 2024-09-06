// 获取切换按钮和 body
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 从 localStorage 检查用户之前的主题偏好
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

// 点击按钮切换主题
themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode'); // 存储为白天模式
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // 存储为黑夜模式
    }
});
