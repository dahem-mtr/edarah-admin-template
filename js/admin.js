var screenWidth = window.innerWidth;

const addEventToBrowser = function (object, type, callback) {
  if (object == null || typeof (object) == 'undefined') return;
  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
    object.attachEvent("on" + type, callback);
  } else {
    object["on" + type] = callback;
  }
};

addEventToBrowser(window, "resize", function (event) {
  // when user change the browser size
  screenWidth = window.innerWidth;
});


var dirToggle = document.querySelector(".dir-toggle");
(dirToggle !== null && typeof (dirToggle) !== 'undefined') &&
  dirToggle.addEventListener("click", function () {
    var htmlDirAttr = document.getElementsByTagName("html")[0].getAttribute('dir');
    htmlDirAttr == null || htmlDirAttr == 'ltr' ?
      (() => { document.getElementsByTagName("html")[0].setAttribute("dir", 'rtl'); dirToggle.innerHTML = "LTR"; })()
      :
      (() => { document.getElementsByTagName("html")[0].setAttribute("dir", 'ltr'); dirToggle.innerHTML = "RTL"; })()
  });

var darkModeToggle = document.querySelector(".dark-mode-toggle");
(darkModeToggle !== null && typeof (darkModeToggle) !== 'undefined') &&
  darkModeToggle.addEventListener("click", function () {
    document.getElementsByTagName('body')[0].classList.toggle("dark-mode");
  });


var sidebarToggle = document.querySelector(".sidebar-toggle");
(sidebarToggle !== null && typeof (sidebarToggle) !== 'undefined') &&
  sidebarToggle.addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle(screenWidth >= 700 ? "collapsed" : "sidebar-mobile-open");
  });

var sidebarMobileOverlay = document.createElement("div");
sidebarMobileOverlay.classList.add('sidebar-mobile-overlay', 'sidebar-mobile-toggle');
var sidebar = document.querySelector(".sidebar");
if (sidebar !== null && typeof (sidebar) !== 'undefined') {
  sidebar.parentNode.insertBefore(sidebarMobileOverlay, sidebar.nextSibling);
}



var sidebarMobileToggle = document.querySelector(".sidebar-mobile-toggle");
if (sidebarMobileToggle !== null && typeof (sidebarMobileToggle) !== 'undefined') {
  sidebarMobileToggle.addEventListener("click", function () {
    var sidebar = document.querySelector(".sidebar");
    (sidebar !== null && typeof (sidebar) !== 'undefined') &&
      sidebar.classList.toggle("sidebar-mobile-open");
  });
}


var hasLinks = [].slice.call(document.querySelectorAll('.has-links'))
hasLinks.forEach(function (hasLink) {
  hasLink.addEventListener("click", function () {
    hasLink.classList.toggle("active");
  });
})

// hide sidebar when click link and screen size seme mobile size 
var links = [].slice.call(document.querySelectorAll('.link'))
links.forEach(function (link) {
  link.addEventListener("click", function () {

    if (! link.classList.contains('has-links')) {
      if (screenWidth <= 700)
      var sidebar = document.querySelector(".sidebar");
      (sidebar !== null && typeof (sidebar) !== 'undefined') &&
        sidebar.classList.toggle("sidebar-mobile-open");

    }
  });
})

// show all toast element has class toast-auto-show
var toasts = [].slice.call(document.querySelectorAll('.toast-auto-show'))
toasts.forEach(function (toast) {
  var t = new bootstrap.Toast(toast)
  t.show()

})


// modal = document.getElementById('exampleModal')
// var myModal = typeof(modal) != 'undefined' && modal != null ? new bootstrap.Modal(modal) : null;
// myModal && myModal.show();


