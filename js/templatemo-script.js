const initBg = (autoplay = true) => {
    const bgImgsNames = ['BLM1.jpg', 'BLM2.jpg', 'BLM3.jpg', 'BLM4.jpg', 'BLM5.jpg', 'BLM6.jpg', 'BLM7.jpg', 'BLM8.jpg', 'BLM9.jpg', 'BLM10.jpg', 'BLM11.jpg', 'BLM12.jpg', 'BLM13.jpg', 'BLM14.jpg', 'BLM15.jpg', 'BLM16.jpg', 'BLM17.jpg', 'BLM18.jpg'];
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    $.backstretch(bgImgs, {duration: 4000, fade: 750});

    if(!autoplay) {
      $.backstretch('pause');  
    }    
}

const setBg = id => {
    $.backstretch('show', id);
}

const setBgOverlay = () => {
    const windowWidth = window.innerWidth;
    const bgHeight = $('body').height();
    const tmBgLeft = $('.tm-bg-left');

    $('.tm-bg').height(bgHeight);

    if(windowWidth > 768) {
        tmBgLeft.css('border-left', `0`)
                .css('border-top', `${bgHeight}px solid transparent`);                
    } else {
        tmBgLeft.css('border-left', `${windowWidth}px solid transparent`)
                .css('border-top', `0`);
    }
}

$(document).ready(function () {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(autoplayBg);    
    setBgOverlay();

    const bgControl = $('.tm-bg-control');            
    bgControl.click(function() {
        bgControl.removeClass('active');
        $(this).addClass('active');
        const id = $(this).data('id');                
        setBg(id);
    });

    $(window).on("backstretch.after", function (e, instance, index) {        
        const bgControl = $('.tm-bg-control');
        bgControl.removeClass('active');
        const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`);        
        current.addClass('active');
    });

    $(window).resize(function() {
        setBgOverlay();
    });
});