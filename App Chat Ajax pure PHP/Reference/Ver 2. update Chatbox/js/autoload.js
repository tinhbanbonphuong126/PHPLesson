$.ajaxSetup({cache:false});
// Thiết lập thời gian thực vòng lặp 1 giây
setInterval(function() {
    $('.main-chat').load('msglog.php');

    window.scrollBy(0, $(document).height());
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        window.scrollBy(0, $(document).height());
    } else {
        window.scrollBy($(document).height(), $(document).height());
    }

    }, 1000);
