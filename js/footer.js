// Reusable footer component (injected into #footer-placeholder).
(function () {
  'use strict';

  var ICONS = [
    { label: 'LinkedIn', file: 'icon-linkedin.svg' },
    { label: 'X', file: 'icon-x.svg' },
  ];

  function getPathDepth() {
    var path = window.location.pathname;
    var parts = path.replace(/^\/|\/$/g, '').split('/');
    var filtered = parts.filter(function (p) {
      return p && !/\.html$/i.test(p);
    });
    return filtered.length;
  }

  function getPathPrefix() {
    var depth = getPathDepth();
    return depth > 0 ? '../'.repeat(depth) : '';
  }

  function generateIcon(icon, prefix) {
    var url = prefix + 'img/footer/' + icon.file;
    return (
      '<span class="site-footer-social-icon" aria-hidden="true" style="--icon-url: url(\'' +
      url +
      '\')"></span>'
    );
  }

  function generateFooterHtml() {
    var prefix = getPathPrefix();
    var buttons = ICONS.map(function (icon) {
      return (
        '<button type="button" class="site-footer-social-btn" aria-label="' +
        icon.label +
        '">' +
        generateIcon(icon, prefix) +
        '</button>'
      );
    }).join('');

    return (
      '<footer class="site-footer" aria-label="Footer">' +
      '<div class="site-footer-inner">' +
      '<div class="site-footer-brand">design with chip</div>' +
      '<nav class="site-footer-social" aria-label="Social links">' +
      buttons +
      '</nav>' +
      '</div>' +
      '</footer>'
    );
  }

  function initFooter() {
    var placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;
    placeholder.innerHTML = generateFooterHtml();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
  } else {
    initFooter();
  }
})();
