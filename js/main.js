$(function () {
    $('.main_slide').slick({
        arrows: false,
        // fade: true,
        // vertical:true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .dots li').on('mouseenter', function () {
        //내가 클릭한 요소의 번호를 알려주는 것
        let idx = $(this).index();
        console.log(idx);
        $('.main_slide').slick('slickGoTo', idx, true);
    });

    //아이콘으로 이전, 다음 버튼 만들기
    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });
});