/* Graphic credit to freepik.com*/
TweenMax.fromTo('#cloud-1, #cloud-2', 2, {x:2.5}, {x:-2.5,repeat:-1,ease:Power2.easeInOut, yoyo:true});
TweenMax.fromTo('#wind-1, #wind-2', 3, {x:-3.5}, {x:3.5,repeat:-1,ease:Power2.easeInOut, yoyo:true});
TweenMax.to('#planet', 5, {y:-20,repeat:-1,ease:Power2.easeInOut, yoyo:true});

$('.svg-animation').hover(function(){
  var stars = $('#star-1, #star-2, #star-3, #star-4, #star-5');
  TweenMax.fromTo('#rocket', 2, {rotation:-1,transformOrigin:'50% 50%'},{rotation:1,transformOrigin:'50% 50%',ease:Elastic.easeOut, yoyo:true});
  TweenMax.fromTo(stars, 2, {scale:0.9,transformOrigin:'50% 50%'},{scale:1.1,transformOrigin:'50% 50%',ease:Elastic.easeOut, yoyo:true});
}, function(){
  TweenMax.killTweensOf('#rocket');
  TweenMax.killTweensOf(stars);
});

$('#codepen').click(function(){
  window.open('https://codepen.io/qingliwebsite/', '_blank');
});

$('#instagram').click(function(){
  window.open('https://www.instagram.com/qinglidesign/', '_blank');
});


Resources