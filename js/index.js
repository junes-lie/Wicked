$(document).ready(function () {
  
  let dial = $(".left-circle label:not(:last-of-type)");
  let lastdial = $(".left-circle label:last-of-type")
  let label = $(".right-circle label");
  let labels = $(".right-circle label span");

  let lyric = $(".right-circle .lyric");

  

  $(dial,label).click(function () {
    let idx = $(this).index();

    dial.eq(idx).addClass("active").siblings().removeClass("active");
    //문제1) dial 연속클릭시 클릭직후 모든 라벨이 보여야하는데 이전클릭,현재클릭 라벨만 나타남
    // labels.css({opacity:1});
    // labels.show();
    //문제2) fadeout이 js로 실행되지 않음
    // label.removeClass("active fadeout");
    // label.eq(idx).siblings("label").addClass("fadeout");
    // label.eq(idx).addClass("active").siblings().addClass("fadeout");
    label.eq(idx).addClass("active").siblings("label").removeClass("active");
    lyric.eq(idx).addClass("active").siblings("div").removeClass("active");

  });

  lastdial.click(function () {

    dial.removeClass("active");
    label.removeClass("active");
    lyric.removeClass("active");
    // $(dial,label,lyric).removeClass("active");
    
  })












  
});
