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
  function initMotion() {
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var progress = document.createElement('div');
    progress.className = 'scroll-progress';
    progress.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progress);

    var updateProgress = function () {
      var distance = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = distance > 0 ? Math.min(1, window.scrollY / distance) : 0;
      progress.style.transform = 'scaleX(' + ratio + ')';
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    if (reducedMotion) return;

    document.documentElement.classList.add('motion-ready');
    var revealItems = Array.prototype.slice.call(document.querySelectorAll('.home-section, .proof-strip, .home-cta, .contact-banner, .page-intro, .about-highlights, .post-item, .project-grid-wide .project-card'));
    revealItems.forEach(function (item, index) {
      item.classList.add('reveal-item');
      item.style.setProperty('--reveal-delay', Math.min(index % 4, 3) * 70 + 'ms');
    });
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px' });
    revealItems.forEach(function (item) { revealObserver.observe(item); });

    var finePointer = window.matchMedia('(pointer: fine)').matches;
    var hero = document.querySelector('.home-hero');
    if (hero && finePointer) {
      hero.addEventListener('pointermove', function (event) {
        var rect = hero.getBoundingClientRect();
        hero.style.setProperty('--pointer-x', ((event.clientX - rect.left) / rect.width * 100).toFixed(1) + '%');
        hero.style.setProperty('--pointer-y', ((event.clientY - rect.top) / rect.height * 100).toFixed(1) + '%');
      });
    }

    if (finePointer) {
      document.querySelectorAll('.profile-card, .capability-card, .project-card-rich').forEach(function (card) {
        card.classList.add('motion-tilt');
        card.addEventListener('pointermove', function (event) {
          var rect = card.getBoundingClientRect();
          var x = (event.clientX - rect.left) / rect.width;
          var y = (event.clientY - rect.top) / rect.height;
          card.style.setProperty('--tilt-x', ((.5 - y) * 5).toFixed(2) + 'deg');
          card.style.setProperty('--tilt-y', ((x - .5) * 6).toFixed(2) + 'deg');
          card.style.setProperty('--spot-x', (x * 100).toFixed(1) + '%');
          card.style.setProperty('--spot-y', (y * 100).toFixed(1) + '%');
        });
        card.addEventListener('pointerleave', function () {
          card.style.setProperty('--tilt-x', '0deg');
          card.style.setProperty('--tilt-y', '0deg');
        });
      });
    }

    var counters = document.querySelectorAll('[data-count]');
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var element = entry.target;
        var target = Number(element.dataset.count);
        var decimals = Number(element.dataset.decimals || 0);
        var suffix = element.dataset.suffix || '';
        var start = performance.now();
        var duration = 900;
        var tick = function (now) {
          var value = Math.min(1, (now - start) / duration);
          var eased = 1 - Math.pow(1 - value, 3);
          element.textContent = (target * eased).toFixed(decimals) + suffix;
          if (value < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterObserver.unobserve(element);
      });
    }, { threshold: .65 });
    counters.forEach(function (counter) { counterObserver.observe(counter); });
  }

  function init() {
    applyTheme(getTheme());

    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }

    initMotion();

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
