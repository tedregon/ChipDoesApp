// Navigation — Figma node 166:901
// Home = intro. Train = mentorship + portfolio reviewer. Portfolio = portfolio hub.

(function () {
    'use strict';

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

    function getActiveNavKey() {
        var path = window.location.pathname
            .replace(/\/index\.html?$/i, '')
            .replace(/\/$/, '') || '/';
        var segments = path.split('/').filter(Boolean);
        if (segments.length === 0) return 'home';
        var first = segments[0];
        if (first === 'train') return 'train';
        if (first === 'portfolio') return 'portfolio';
        if (first === 'make') return 'portfolio';
        if (first === 'portfolioreviewer') return 'train';
        if (first === 'hire') return 'hire';
        if (first === 'talk') return 'talk';
        if (first === 'about') return 'about';
        return null;
    }

    function linkAttrs(key, activeKey) {
        var cls = 'navbar-link';
        if (activeKey === key) cls += ' navbar-link--active';
        var attrs = 'class="' + cls + '"';
        if (activeKey === key) attrs += ' aria-current="page"';
        return attrs;
    }

    function generateNav() {
        var prefix = getPathPrefix();
        var homeLink = prefix ? prefix + 'index.html' : 'index.html';
        var trainLink = prefix + 'train/';
        var portfolioLink = prefix + 'portfolio/';
        var hireLink = prefix + 'hire/';
        var talkLink = prefix + 'talk/';
        var aboutLink = prefix + 'about/';
        var imgPath = prefix + 'img/ArrowUpRight.svg';
        var active = getActiveNavKey();

        return (
            '<nav class="navbar" aria-label="Main">' +
            '  <div class="navbar-container">' +
            '    <a href="' +
            homeLink +
            '" class="navbar-brand">design with chip</a>' +
            '    <ul class="navbar-nav">' +
            '      <li><a href="' +
            trainLink +
            '" ' +
            linkAttrs('train', active) +
            ' data-nav="train">Train</a></li>' +
            '      <li><a href="' +
            // hireLink +
            // '" ' +
            // linkAttrs('hire', active) +
            // ' data-nav="hire">Hire</a></li>' +
            // '      <li><a href="' +
            portfolioLink +
            '" ' +
            linkAttrs('portfolio', active) +
            ' data-nav="portfolio">Portfolio</a></li>' +
            '      <li><a href="' +
            // talkLink +
            // '" ' +
            // linkAttrs('talk', active) +
            // ' data-nav="talk">Talk</a></li>' +
            // '      <li><a href="' +
            aboutLink +
            '" ' +
            linkAttrs('about', active) +
            ' data-nav="about">About</a></li>' +
            '    </ul>' +
            '    <div class="navbar-cta-wrap">' +
            '      <a href="https://www.linkedin.com/in/chip-rian/" target="_blank" rel="noopener noreferrer" class="navbar-link navbar-link--external">Get in contact <img src="' +
            imgPath +
            '" alt="" class="navbar-link-icon" width="20" height="20"></a>' +
            '    </div>' +
            '  </div>' +
            '</nav>'
        );
    }

    function initNav() {
        var navPlaceholder = document.getElementById('nav-placeholder');
        if (navPlaceholder) {
            navPlaceholder.innerHTML = generateNav();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNav);
    } else {
        initNav();
    }
})();
