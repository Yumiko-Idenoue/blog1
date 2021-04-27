// 'use strict'; {

   // ヘッダーの装飾
   const triger = document.querySelector('.container');
   triger.addEventListener('mouseover',()=>{
     triger.classList.add('active');
   });
   triger.addEventListener('mouseout',()=>{
     triger.classList.remove('active');
   });

   // ハンバーガーメニュー
   const open = document.getElementById('open');
   const hide = document.getElementById('hide');
   const hamburgerMenu = document.querySelector('.hamburger_menu');
   const overlay = document.querySelector('.overlay');

   open.addEventListener('click',() => {
     hamburgerMenu.classList.add('show');
     overlay.classList.add('cover')
   });

   hide.addEventListener('click',() => {
      hamburgerMenu.classList.remove('show');
      overlay.classList.remove('cover');
    });


    //topへボタン
 const pageTopBtn = document.querySelector('.to_top');
 console.log(pageTopBtn)
 window.addEventListener('scroll',()=>{
   if(window.scrollY > 300){
     pageTopBtn.classList.add('btn')
   } else {
     pageTopBtn.classList.remove('btn')
   } 
  });


pageTopBtn.addEventListener('click', function () {
 const me = arguments.callee;
 const nowY = window.pageYOffset;
 window.scrollTo(0, Math.floor(nowY * 0.9));
 if (nowY > 0) {
   window.setTimeout(me, 10);
 }
});

// モーダルウインドウ

const modal = document.querySelector('.modal');
const close_btn = document.querySelector('.modal_close_btn');

const close_text = document.querySelector('.close_text')


window.addEventListener('load',() =>{
  setTimeout(() => {
    modal.classList.add('modal_show')
  }, 5000);
});

close_btn.addEventListener('click',()=>{
  modal.classList.add('modal_hidden')
});

close_text.addEventListener('click',()=>{
  modal.classList.add('modal_hidden')
});


// }