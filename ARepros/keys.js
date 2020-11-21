$(document).keydown(function(event) {
    if (event.keyCode == 123) {
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        return false;
    }
});
document.onkeydown = function(e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 83 ||
            e.keyCode === 85 ||
            e.keyCode === 86 ||
            e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};
$(document).keypress("u", function(e) {
    if (e.ctrlKey) {
        return false;
    } else {
        return true;
    }
});
document.onkeypress = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        //alert('No F-12');
        return false;
    }
}
document.onmousedown = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        //alert('No F-keys');
        return false;
    }
}
document.onkeydown = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        //alert('No F-keys');
        return false;
    }
}
$(document).keydown(function(e) {
        return 123 != e.keyCode && !e.ctrlKey && !e.shiftKey && void 0
    }), $(document).on("contextmenu", function(e) {
        e.preventDefault()
    }),
    function e() {
        try {
            ! function e(t) {
                1 === ("" + t / t).length && t % 20 != 0 || function() {}.constructor("debugger")(), e(++t)
            }(0)
        } catch (t) {
            setTimeout(e, 1e3)
        }
    }();