(function () {
  var path = window.location.pathname;
  var isIndex =
    path === '/chosen-club/' ||
    path === '/chosen-club' ||
    path === '/chosen-club/index.html' ||
    path === '/';
  if (isIndex && !sessionStorage.getItem('cc-splash-shown')) {
    window.location.replace('/chosen-club/static/welcome.html');
  }
})();
