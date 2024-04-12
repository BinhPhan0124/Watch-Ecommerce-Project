
document.getElementById('slider-control-next').onclick = function() {
    const widthCard = document.querySelector('.blog-card').offsetWidth;
    document.querySelector('.slider-container').scrollLeft += widthCard;
    
}

document.getElementById('slider-control-prev').onclick = function() {
    const widthCard = document.querySelector('.blog-card').offsetWidth;
    document.querySelector('.slider-container').scrollLeft -= widthCard;
}

