// ==UserScript==

// 递归生成骨架图
function processElement(el, skeletonOverlay, bodyRect) {
  const children = el.children;

  if (children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      processElement(children[i], skeletonOverlay, bodyRect);
    }
  } else {
    const rect = el.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const skeletonElement = document.createElement('div');
      skeletonElement.className = 'skeleton-box';
      skeletonElement.style.position = 'absolute';
      skeletonElement.style.top = rect.top - bodyRect.top + 'px';
      skeletonElement.style.left = rect.left - bodyRect.left + 'px';
      skeletonElement.style.width = rect.width + 'px';
      skeletonElement.style.height = rect.height + 'px';
      skeletonOverlay.appendChild(skeletonElement);
    }
  }
}

// 覆盖页面并生成骨架图
function generateSkeleton() {
  if (document.getElementById('skeleton-overlay')) return;

  const skeletonOverlay = document.createElement('div');
  skeletonOverlay.id = 'skeleton-overlay';
  skeletonOverlay.style.position = 'fixed';
  skeletonOverlay.style.top = 0;
  skeletonOverlay.style.left = 0;
  skeletonOverlay.style.width = '100%';
  skeletonOverlay.style.height = '100%';
  skeletonOverlay.style.zIndex = 9999;
  skeletonOverlay.style.backgroundColor = 'rgba(255, 255, 255, 1)';

  const bodyRect = document.body.getBoundingClientRect();

  document
    .querySelectorAll('div, p, h1, h2, h3, h4, h5, h6, a, img, span, em')
    .forEach((el) => {
      processElement(el, skeletonOverlay, bodyRect);
    });

  insertSkeletonStyles(skeletonOverlay);
  document.body.appendChild(skeletonOverlay);
}

// 骨架图样式函数
function insertSkeletonStyles(skeletonOverlay) {
  const skeletonStyles = `
    .skeleton-box {
      background-color: #f0f0f0;
      animation: skeleton-loading 1.5s infinite;
      border-radius: 4px;
    }
    @keyframes skeleton-loading {
      0% {
        background-color: #f0f0f0;
      }
      50% {
        background-color: #e0e0e0;
      }
      100% {
        background-color: #f0f0f0;
      }
    }
  `;

  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerHTML = skeletonStyles;
  console.log('%c [ styleSheet ]-78', 'font-size:13px; background:#1d9520; color:#61d964;', styleSheet)
  skeletonOverlay.appendChild(styleSheet);
}

// 切换骨架图的显示和隐藏
function toggleSkeleton() {
  const skeletonOverlay = document.getElementById('skeleton-overlay');
  if (skeletonOverlay) {
    skeletonOverlay.style.display =
      skeletonOverlay.style.display === 'none' ? 'block' : 'none';
  } else {
    generateSkeleton();
  }
}

// 将核心函数绑定到 window 对象上
window.generateSkeleton = generateSkeleton;
window.toggleSkeleton = toggleSkeleton;
