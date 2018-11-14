setInterval(function () {$('html').scrollTop(20);$('html').scrollTop(100000);}, 1000);
setInterval(function () {
    var count = $('.mn-discovery-entity-card').length;
    console.log("Count "+count);
    if (count > 50) {
        $('.mn-discovery-entity-card').each(function (index, value) {
            count--;
            if (count > 20) {
                $(value).find(".js-mn-discovery-person-card__action-btn")[0].click();
            }
        });
    }
}, 10000);
