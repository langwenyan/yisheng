var banner=document.querySelector("#banner");
var bannerSlide=document.querySelector(".bannerSlide");
var items=banner.querySelectorAll("li");
var startX=0,endX=0;
banner.addEventListener('touchstart',function(e){
	var touch=e.touches[0];
	startX=touch.pageX;
	endX=startX;
},false)

banner.addEventListener('touchmove',function(e){
	var touch=e.touches[0];
	endX=touch.pageX;
},false)

banner.addEventListener('touchend',function(e){
	var index=getIndex(bannerSlide.querySelector("li.on"));
	if(startX-endX<0){
		index--;
		index=index<=0?0:index;
	}else if(startX-endX>0){
		index++;
		index=index>=items.length?items.length-1:index;
	}
	poPage(index)
},false)

function getIndex(child){
	var index=0;
	var parent=child.parentNode,
		childList=parent.querySelectorAll("li");
	for(var i=0;i<childList.length;i++){
		if(childList[i]==child){
			index=i;
		}
	}
	return index;
}

function poPage(index){
	bannerSlide.style["-webkit-transition"]="all .6s"
	bannerSlide.style["-webkit-transform"]="translateX(-"+index*100+"%)";
	for(var i=0;i<items.length;i++){
		items[i].className=""
	}
	items[index].className="on"
}




