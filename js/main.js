$(function(){
    //날씨 스크립트
    var swiper = new Swiper(".weather_swiper", {
        direction: "vertical",
        loop: true,
        autoplay: {
            delay: 3400,
          },    
      });

    //연합뉴스 스크립트
    var swiper = new Swiper(".issue_area.swiper", {
        direction: "vertical",
        loop: true,
        autoplay: {
            delay: 3400,
          },    
      });
})