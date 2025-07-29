// 暗黑模式切换功能
document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitches = document.querySelectorAll('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');

  // 检查本地存储中是否已保存主题偏好
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    // 如果已经是暗黑模式，切换所有开关状态
    if (currentTheme === 'dark') {
      toggleSwitches.forEach(toggle => {
        toggle.checked = true;
      });
    }
  }

  // 监听开关变化
  function switchTheme(e) {
    const isDark = e.target.checked;

    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');

      // 同步所有开关状态
      toggleSwitches.forEach(toggle => {
        toggle.checked = true;
      });
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');

      // 同步所有开关状态
      toggleSwitches.forEach(toggle => {
        toggle.checked = false;
      });
    }
  }

  // 为所有开关添加事件监听
  toggleSwitches.forEach(toggleSwitch => {
    toggleSwitch.addEventListener('change', switchTheme, false);
  });
});
