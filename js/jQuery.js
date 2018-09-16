/*
* @Author: 123
* @Date:   2018-09-13 16:39:22
* @Last Modified by:   123
* @Last Modified time: 2018-09-16 13:46:27
*/
$(function(){
	//购物车
	let shop=$(".shop");
	shop.mouseenter(function(){
		$(".xiala").clearQueue().slideDown();
	})
	shop.mouseleave(function(){
		$(".xiala").clearQueue().slideUp();
	})


	//轮播图
	let banner=$(".banner");
	let imgbox=$(".bannerimg");
	let dots=$(".dot");
	imgbox.eq(0).css("opacity","1");
	dots.eq(0).addClass('active');
	let t=setInterval(move,1000);
	let now=0;
	function move(){
		now++;
		if(now==5){
			now=0;
		}
		imgbox.css("opacity","0").eq(now).css("opacity","1");
		dots.removeClass("active").eq(now).addClass('active');
	}
	banner.mouseenter(function(){
		clearInterval(t);
	})
	banner.mouseleave(function(){
		t=setInterval(move,1000);
	});
	function moveL(){
		now--;
		if(now==-1){
			now=4;
		}
		imgbox.css("opacity","0").eq(now).css("opacity","1");
		dots.removeClass("active").eq(now).addClass('active');
	}
	let rightBtn=$(".rightBtn");
	let leftBtn=$(".leftBtn");
	// console.log(rightBtn,leftBtn);
	rightBtn.click(function(){
		move();
	})
	leftBtn.click(function(){
		moveL();
	})

	dots.click(function(){
		let i=$(this).index();
		dots.removeClass("active").eq(i).addClass('active');
		imgbox.css("opacity","0").eq(i).css("opacity","1");
	})


	//家电
	let title=$(".containter .title .title-center a");
	let moveBox=$(".two-box");
	console.log(title,moveBox);
	title.eq(0).addClass('active1');
	moveBox.eq(0).css("zIndex","99");
	// moveBox.eq(2).css("display","none");
	// moveBox.eq(3).css("display","none");
	title.mouseenter(function(){
		let i=$(this).index();
		moveBox.css("display","none").eq(i).css("display","flex");
		title.removeClass("active1").eq(i).addClass('active1');
	})

	//内容开始
	//第一块
	let content=$(".yd0");
	let dian=$(".dian1 .fourr");
	let width=content.width();
	let leftbtn=$(".leftBtnaa");
	let rightbtn=$(".rightBtnaa");
	// console.log(content,dian,width,leftbtn);
	content.eq(0).css("left","0");
	let next=now0=0;
	let flag=true;
	function moveRight(){
		next++;
		if(next==3){
			next=0;
		}
		content.eq(next).css("left","288.75px");
		content.eq(now0).animate({left:"-288.75px"},"slow",function(){});
		content.eq(next).animate({left:"0"},"slow",function(){
			flag=true;
		});
		dian.eq(now0).removeClass('onr');
		dian.eq(next).addClass('onr');
		now0=next;
	}
	function moveLeft(){
		next--;
		if(next<0){
			next=2;
		}
		content.eq(next).css("left","-288.75px");
		content.eq(now0).animate({left:"288.75px"},"slow");
		content.eq(next).animate({left:"0"},"slow",function(){
			flag=true;
		});
		dian.eq(now0).removeClass('onr');
		dian.eq(next).addClass('onr');
		now0=next;
	}
	leftbtn.click(function(){
		moveLeft();
		if(!flag){
			return;
		}
		flag=false;
		if(next<0){
			return;
		}
	})
	rightbtn.click(function(){
		moveRight();
		if(!flag){
			return;
		}
		flag=false;
		if(next==3){
			return;
		}
	})
	dian.click(function(){
		let i=$(this).index();
		if(now0==i){
			return;
		}
		else if(now0<i){
			content.eq(i).css("left","288.75px");
			content.eq(now0).animate({left:"-288.75px"},"slow");
			content.eq(i).animate({left:"0"},"slow");
			dian.eq(now0).removeClass('onr');
			dian.eq(i).addClass('onr');
		}
		else if(now0>i){
			content.eq(i).css("left","-288.75px");
			content.eq(now0).animate({left:"288.75px"},"slow");
			content.eq(i).animate({left:"0"},"slow");
			dian.eq(now0).removeClass('onr');
			dian.eq(i).addClass('onr');
		}
		now0=next=i;
	})
	//第一块结束
	//第二块开始
	let content1=$(".yd1");
	let dian1=$(".five1");
	let width1=content1.width();
	let leftbtn1=$(".leftBtnb");
	let rightbtn1=$(".rightBtnb");
	// console.log(content1,dian1,width1,leftbtn1);
	content1.eq(0).css("left","0");
	let next1=now1=0;
	let flag1=true;
	function moveRight1(){
		next1++;
		if(next1==4){
			next1=0;
		}
		content1.eq(next1).css("left","288.75px");
		content1.eq(now1).animate({left:"-288.75px"},"slow",function(){});
		content1.eq(next1).animate({left:"0"},"slow",function(){
			flag1=true;
		});
		dian1.eq(now1).removeClass('onr');
		dian1.eq(next1).addClass('onr');
		now1=next1;
	}
	function moveLeft1(){
		next1--;
		if(next1<0){
			next1=3;
		}
		content1.eq(next1).css("left","-288.75px");
		content1.eq(now1).animate({left:"288.75px"},"slow");
		content1.eq(next1).animate({left:"0"},"slow",function(){
			flag1=true;
		});
		dian1.eq(now1).removeClass('onr');
		dian1.eq(next1).addClass('onr');
		now1=next1;
	}
	leftbtn1.click(function(){
		moveLeft1();
		if(!flag1){
			return;
		}
		flag1=false;
		if(next1<0){
			return;
		}
	})
	rightbtn1.click(function(){
		moveRight1();
		if(!flag){
			return;
		}
		flag1=false;
		if(next==4){
			return;
		}
	})
	dian1.click(function(){
		let i=$(this).index();
		if(now1==i){
			return;
		}
		else if(now1<i){
			content1.eq(i).css("left","288.75px");
			content1.eq(now1).animate({left:"-288.75px"},"slow");
			content1.eq(i).animate({left:"0"},"slow");
			dian1.eq(now1).removeClass('onr');
			dian1.eq(i).addClass('onr');
		}
		else if(now1>i){
			content1.eq(i).css("left","-288.75px");
			content1.eq(now1).animate({left:"288.75px"},"slow");
			content1.eq(i).animate({left:"0"},"slow");
			dian1.eq(now1).removeClass('onr');
			dian1.eq(i).addClass('onr');
		}
		now1=nex1=i;
	})
	//第二块结束
	//第三块开始
	let content2=$(".yd2");
	let dian2=$(".six1");
	let leftbtn2=$(".leftBtnc");
	let rightbtn2=$(".rightBtnc");
	content2.eq(0).css("left","0");
	let next2=now2=0;
	let flag2=true;
	function moveRight2(){
		next2++;
		if(next2==4){
			next2=0;
		}
		content2.eq(next2).css("left","288.75px");
		content2.eq(now2).animate({left:"-288.75px"},"slow",function(){});
		content2.eq(next2).animate({left:"0"},"slow",function(){
			flag2=true;
		});
		dian2.eq(now2).removeClass('onr');
		dian2.eq(next2).addClass('onr');
		now2=next2;
	}
	function moveLeft2(){
		next2--;
		if(next2<0){
			next2=3;
		}
		content2.eq(next2).css("left","-288.75px");
		content2.eq(now2).animate({left:"288.75px"},"slow");
		content2.eq(next2).animate({left:"0"},"slow",function(){
			flag2=true;
		});
		dian2.eq(now2).removeClass('onr');
		dian2.eq(next2).addClass('onr');
		now2=next2;
	}
	leftbtn2.click(function(){
		moveLeft2();
		if(!flag2){
			return;
		}
		flag2=false;
		if(next2<0){
			return;
		}
	})
	rightbtn2.click(function(){
		moveRight2();
		if(!flag2){
			return;
		}
		flag2=false;
		if(next==4){
			return;
		}
	})
	dian2.click(function(){
		let i=$(this).index();
		if(now2==i){
			return;
		}
		else if(now2<i){
			content2.eq(i).css("left","288.75px");
			content2.eq(now2).animate({left:"-288.75px"},"slow");
			content2.eq(i).animate({left:"0"},"slow");
			dian2.eq(now2).removeClass('onr');
			dian2.eq(i).addClass('onr');
		}
		else if(now2>i){
			content2.eq(i).css("left","-288.75px");
			content2.eq(now2).animate({left:"288.75px"},"slow");
			content2.eq(i).animate({left:"0"},"slow");
			dian2.eq(now2).removeClass('onr');
			dian2.eq(i).addClass('onr');
		}
		now2=nex2=i;
	})
	//第三块结束
	//第四块开始
	let content3=$(".yd3");
	let dian3=$(".seven");
	let leftbtn3=$(".leftBtnd");
	let rightbtn3=$(".rightBtnd");
	console.log(content3,dian3,leftbtn3);
	content3.eq(0).css("left","0");
	let next3=now3=0;
	let flag3=true;
	function moveRight3(){
		next3++;
		if(next3==4){
			next3=0;
		}
		content3.eq(next3).css("left","288.75px");
		content3.eq(now3).animate({left:"-288.75px"},"slow",function(){});
		content3.eq(next3).animate({left:"0"},"slow",function(){
			flag3=true;
		});
		dian3.eq(now3).removeClass('onr');
		dian3.eq(next3).addClass('onr');
		now3=next3;
	}
	function moveLeft3(){
		next3--;
		if(next3<0){
			next3=3;
		}
		content3.eq(next3).css("left","-288.75px");
		content3.eq(now3).animate({left:"288.75px"},"slow");
		content3.eq(next3).animate({left:"0"},"slow",function(){
			flag3=true;
		});
		dian3.eq(now3).removeClass('onr');
		dian3.eq(next3).addClass('onr');
		now3=next3;
	}
	leftbtn3.click(function(){
		moveLeft3();
		if(!flag3){
			return;
		}
		flag3=false;
		if(next3<0){
			return;
		}
	})
	rightbtn3.click(function(){
		moveRight3();
		if(!flag3){
			return;
		}
		flag3=false;
		if(next==4){
			return;
		}
	})
	dian3.click(function(){
		let i=$(this).index();
		if(now3==i){
			return;
		}
		else if(now3<i){
			content3.eq(i).css("left","288.75px");
			content3.eq(now3).animate({left:"-288.75px"},"slow");
			content3.eq(i).animate({left:"0"},"slow");
			dian3.eq(now3).removeClass('onr');
			dian3.eq(i).addClass('onr');
		}
		else if(now3>i){
			content3.eq(i).css("left","-288.75px");
			content3.eq(now3).animate({left:"288.75px"},"slow");
			content3.eq(i).animate({left:"0"},"slow");
			dian3.eq(now3).removeClass('onr');
			dian3.eq(i).addClass('onr');
		}
		now3=nex3=i;
	})

	let topText=document.querySelectorAll(".top-text1");
	let topBox=document.querySelectorAll(".top-box");
	// let xiala=document.querySelector(".xiala1");
	// console.log(topText,topBox,xiala);
	// xiala.onmouseenter=function(){
		// xiala.style.height="250px";
		for (let e=0;e<topText.length;e++){
			topText[e].onmouseenter=function(){
				for (let f=0;f<topBox.length;f++){
					topBox[f].style.height=0;
				}
			topBox[e].style.height="250px";
				// console.log(topBox[e]);
			}
			topText[e].onmouseleave=function(){
				topBox[e].style.height="0";
			}
		}
	//小米闪购开始
	let content4=$(".movebox");
	let leftbtn4=$(".leftbtN1");
	let rightbtn4=$(".rightbtN1");
	let width2=(content4.width())/2;
	console.log(content4,leftbtn4,rightbtn4,width2);
	let time=0;
	rightbtn4.click(function(){
		time++;
		if(time==2){
			time=1;
		}
		content4.css("transform",`translate(${-(width2*time)}px)`);
	})
	leftbtn4.click(function(){
		time--;
		if(time==-1){
			time=0;
		}
		content4.css("transform",`translate(${-(width2*time)}px)`);
	})


	//为你推荐开始
	let content5=$(".ullength");
	let leftbtn5=$(".leftbtN");
	let rightbtn5=$(".rightbtN");
	let width3=content5.width()/3;
	// console.log(content5,leftbtn5,rightbtn5,width3);
	let time1=0;
	rightbtn5.click(function(){
		time1++;
		if(time1==3){
			time1=2;
		}
		content5.css("transform",`translate(${-(width3*time1)}px)`);
	})
	leftbtn5.click(function(){
		time1--;
		if(time1==-1){
			time1=0;
		}
		content5.css("transform",`translate(${-(width3*time1)}px)`);
	})




	//倒计时
	let box=document.querySelectorAll(".box1");
	 let tt=setInterval(fn9,1000);
	 function fn9(){
	 	let arr=times();
	 	box.forEach((e,i)=>{
	 		e.innerHTML=arr[i];
	 	})
	 }
	 fn9();
	 function times(){
	 let arr=[];
	 let date=new Date();
	 let day=new Date(2018,8,30);
	 let time=Math.floor((day.getTime()-date.getTime())/1000); 
	 let h=Math.floor((time%(60*60*24*30)%(60*60*24)/(60*60)));
	 arr.push(h);
	 let m=Math.floor((time%(60*60*24*30)%(60*60*24)%(60*60)/60));
	 arr.push(m);
	 let s=Math.floor((time%(60*60*24*30)%(60*60*24)%(60*60)%60));
	 arr.push(s);
	 // console.log(h,m,s,arr);
	 return arr;
	 }

})