/**
 * main.js — 深色/浅色主题切换
 * 策略：
 *   1. 默认跟随系统 prefers-color-scheme
 *   2. 手动切换后写入 localStorage 持久化
 *   3. 页面加载时先读 localStorage，无记录则回退系统偏好
 */

(function () {
  'use strict';

  var html = document.documentElement;
  var toggleBtn = document.getElementById('theme-toggle');
  var STORAGE_KEY = 'theme';

  /* ================================================================
   * 获取当前生效主题
   * ============================================================ */
  function getTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  /* ================================================================
   * 应用主题到 <html>
   * ============================================================ */
  function applyTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  /* ================================================================
   * 持久化保存
   * ============================================================ */
  function saveTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
  }

  /* ================================================================
   * 切换逻辑
   * ============================================================ */
  function toggleTheme() {
    var current = html.classList.contains('dark') ? 'dark' : 'light';
    var next    = current === 'dark' ? 'light' : 'dark';
    saveTheme(next);
    applyTheme(next);
  }

  /* ================================================================
   * 初始化
   * ============================================================ */
  function init() {
    applyTheme(getTheme());

    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }

    /* 监听系统主题变化（当用户未手动设置时自动跟随） */
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (!stored || (stored !== 'dark' && stored !== 'light')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  /* 页面加载完成后初始化 */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
