setInterval(function () {$('html').scrollTop(20);$('html').scrollTop(100000);}, 1000);
setInterval(function () {
    var count = $('.discover-person-card').length;
    console.log("Count "+count);
    if (count > 50) {
        $('.discover-person-card').each(function (index, value) {
            count--;
            if (count > 20) {
                $(value).find(".js-discover-person-card__action-btn")[0].click();
            }
        });
    }
}, 10000);
