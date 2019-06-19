$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    mouseDrag: true,
    touchDrag: true,
    responsive:{
      0:{
        items:1
      }
    }
  });

  //Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится ыне контейнера слайдера
  let owl=$('.owl-carousel');
  owl.owlCarousel();
  //$(".next") - находим нашу кнопку
  $(".top-slider__next").click(function(){
    owl.trigger("next.owl.carousel");

    var links = document.getElementsByTagName("link");
    for (var cl in links)
    {
      var link = links[cl];
      if (link.rel === "stylesheet")
        link.href += "";
    }

  });
  $(".top-slider__prev").click(function(){
    owl.trigger("prev.owl.carousel");
  });

});