/**
 * Created by 波仔~ on 2018/1/6.
 */
//轮播图动态更改加载图片
$(function(){
    var $imgs = $('.wjs-banner .carousel .carousel-inner img');
    $(window).on('resize',function(){
        var width = $(window).width();
        $imgs.each(function(){
            $(this).attr('src',width > 640?$(this).data('psrc'):$(this).data('msrc'));
        })
    }).trigger('resize');
});


//轮播图滑动切换页面

$(function(){
    var startX;
    var target = $('.wjs-banner .carousel .carousel-inner');


    target.on('touchstart',function(e){
        startX = e.originalEvent.changedTouches[0].clientX;
    })

    target.on('touchend',function(e){
        var result = e.originalEvent.changedTouches[0].clientX - startX;

        if(Math.abs(result) > 100){
            if(result > 0){
                $('.carousel').carousel('prev');
            }
            if(result < 0){
                $('.carousel').carousel('next');
            }
        }
    })

})


//产品导航宽度自适应

$(function(){
    var $ul = $('.wjs-product .nav-tabs');
    var $lis = $ul.find('li');

    var width = 0;
    $lis.each(function(){
        width += $(this).outerWidth();
    })

    $ul.width(width);


    //添加页面内滑动效果

    new IScroll('.nav-wrapper',{
        scrollX:true,
        scrollY:false
    });
})