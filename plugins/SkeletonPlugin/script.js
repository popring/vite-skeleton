const wrapId = 'skeleton-overlay';

function showSkeleton(content) {
  if (document.getElementById(wrapId)) {
    return
  }
  document.body.innerHTML += content
}

function removeSkeleton() {
  const skeletonDom = document.getElementById(wrapId);
  if (skeletonDom) {
    skeletonDom.style.display = 'none';
  }
}

function matchPathname() {
  var pathname = window.location.pathname;
  var target = map[pathname];
  var content = (target && target.html) || '';
  return content;
}

// 辅助函数，用于检查节点或其子节点是否包含指定类名
function hasClassName(node, className) {
  if (node.classList.contains(className)) {
    return true;
  }
  for (const child of node.children) {
    if (hasClassName(child, className)) {
      return true;
    }
  }
  return false;
}

function observeDOMChangesForClassName(targetNode, targetClassName, callback) {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const addedNode of mutation.addedNodes) {
        if (addedNode.nodeType === 1) {
          // 检查当前节点及其子节点是否包含指定类名
          if (hasClassName(addedNode, targetClassName)) {
            callback(addedNode);
            observer.disconnect();
            return;
          }
        }
      }
    }
  });

  observer.observe(targetNode, { childList: true, subtree: true });
}

function startCheck() {
  const content = matchPathname();
  if (content) {
    showSkeleton(content);
    observeDOMChangesForClassName(document.body, 'product-list', () => {
      console.log('hidden showSkeleton');
      removeSkeleton();
    });
  }
}

startCheck();
