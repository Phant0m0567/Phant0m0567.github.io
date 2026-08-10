
(function() {

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    }, { passive: false });

    document.addEventListener('keydown', function(event) {

        if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
            event.preventDefault();
            return false;
        }
    }, { passive: false, capture: false });
})();