window.addEventListener('scroll',()=>{
    let currentScroll = window.pageYOffset;
    if(currentScroll >= 60){
        document.querySelector('.search-box').style.display = 'flex';
    }else{
        document.querySelector('.search-box').style.display = 'none';
    }
})