var scrollIndicator = document.getElementById('scrollIndicator');
var lastScrollPosition = 0;

function adjustScrollIndicatorVisibility() {
    var currentScrollPosition = window.scrollY || window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        scrollIndicator.style.opacity = 0;
    } else {
        scrollIndicator.style.opacity = 1;
    }

    lastScrollPosition = currentScrollPosition;
}
window.addEventListener('scroll', adjustScrollIndicatorVisibility);

document.addEventListener('DOMContentLoaded', adjustScrollIndicatorVisibility);
