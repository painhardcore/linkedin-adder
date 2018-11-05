setInterval(function () {$('html').scrollTop(20);$('html').scrollTop(100000);}, 500);
setInterval(function () {
    var count = $('.mn-pymk-list__card').length;
    console.log("Count"+count);
    if (count > 50) {
        $('.mn-pymk-list__card').each(function (index, value) {
            count--;
            if (count > 20) {
                $(value).find(".pymk-card__close-btn")[0].click();
            }
        });
    }
}, 5000);
