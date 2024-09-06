// 获取页面元素
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 检查本地存储中是否有模式设置
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

// 点击按钮切换模式
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // 将选择的模式保存到本地存储中
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});
