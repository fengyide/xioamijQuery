/*
* @Author: 123
* @Date:   2018-09-03 17:47:52
* @Last Modified by:   123
* @Last Modified time: 2018-09-06 10:36:45
*/
window.onload=function(){
	//轮播图
let imgs=document.querySelectorAll('.bannerimg');
	let dots=document.querySelectorAll('.dot');
	let banner=document.querySelectorAll('.banner')[0];
	let Lbtn=document.querySelector('.leftBtn');
	let Rbtn=document.querySelector('.rightBtn');
	let widths=parseInt(getComputedStyle(imgs[0],null).width);
	// console.log(imgs,dots,banner,Lbtn,Rbtn,widths);
	let now=next=0;
	imgs[0].style.left=0;
	dots[0].classList.add("active");
	let t=setInterval(move,2000);
	let flag=true;
	function move(){
		next++;
		if(next==5){
			next=0;
		}
		imgs[next].style.left=widths+"px";
		animate(imgs[now],{left:-widths});
		animate(imgs[next],{left:0},function(){
			flag=true;
		});
		dots[now].classList.remove("active");
		dots[next].classList.add("active");
		now=next;
	} 
	function moveL(){
		next--;
		if(next<0){
			next=dots.length-1;
		}
		imgs[next].style.left=-widths+"px";
		animate(imgs[now],{left:widths});
		animate(imgs[next],{left:0},function(){
			flag=true;
		});
		dots[now].classList.remove("active");
		dots[next].classList.add("active");
		now=next;
	}     
	 
	 Lbtn.onclick=function(){
	 	 if(!flag){
            return;
        }
   //      if(next==0){
	 	// 	return;
	 	// }
        flag=false;
	 	moveL();
	 	
	 }
	 Rbtn.onclick=function(){
	 	 if(!flag){
            return;
        }
   //      if(next==imgs.length-1){
	 	// 	return;
	 	// }
        flag=false;
	 	move();
	 	
	 }
	 banner.onmouseenter=function(){
	 	clearInterval(t);
	 }
	 banner.onmouseleave=function(){
	 	t=setInterval(move,2000);
	 }

	 for(let i=0;i<dots.length;i++){
	 	dots[i].onclick=function(){
	 		if(now==i){
	 			return;
	 		}else if(now<i){
	 			imgs[i].style.left=widths+"px";
	 			animate(imgs[now],{left:-widths});
	 			animate(imgs[i],{left:0});
	 			dots[now].classList.remove("active");
	 			dots[i].classList.add("active");
	 		}else if(now>i){
	 			imgs[i].style.left=-widths+"px";
	 			animate(imgs[now],{left:widths});
	 			animate(imgs[i],{left:0});
	 			dots[now].classList.remove("active");
	 			dots[i].classList.add("active");
	 		}
	 		next=now=i;
	 
	 	}
	 }
	 //轮播图结束
	 //
	 //第一块开始
	let ydbox=document.querySelectorAll(".yd");
	let leftbtn=document.querySelectorAll(".leftBtna")[0];
	let rightbtn=document.querySelectorAll(".rightBtna")[0];
	let dots1=document.querySelectorAll(".fourr");
	let width1=parseInt(getComputedStyle(ydbox[0],null).width);
	console.log(dots1);
	let flag1=true;
	ydbox[0].style.left=0;
	dots1[0].classList.add("onr");
	let now1=next1=0;
	function move1(){
		next1++;
		if(next1==3){
			next1=0;
		}
		ydbox[next1].style.left=width1+"px";
		animate(ydbox[now1],{left:-width1});
		animate(ydbox[next1],{left:0},function(){
			flag1=true;
		});
		dots1[now1].classList.remove("onr");
		dots1[next1].classList.add("onr");
		now1=next1;
	}
	function move1L(){
		next1--;
		if(next1<0){
			next1=dots1.length-1;
		}
		ydbox[next1].style.left=-width1+"px";
		animate(ydbox[now1],{left:width1});
		animate(ydbox[next1],{left:0},function(){
			flag1=true;
		});
		dots1[now1].classList.remove("onr");
		dots1[next1].classList.add("onr");
		now1=next1;
	}
	leftbtn.onclick=function(){
		if(next1==0){
			return;
		}
		if(!flag1){
			return;
		}
		flag1=false;
		move1L();
	}
	rightbtn.onclick=function(){
		if(next1==dots1.length-1){
			return;
		}
		if(!flag1){
			return;
		}
		flag1=false;
		move1();
	}
	for(let a=0;a<dots1.length;a++){
		dots1[a].onclick=function(){
		if(now1==a){
			return;
		}
		else if(now1<a){
			ydbox[a].style.left=width1+"px";
			animate(ydbox[now1],{left:-width1});
			animate(ydbox[a],{left:0});
			dots1[now1].classList.remove("onr");
			dots1[a].classList.add("onr");
		}
		else if(now1>a){
			ydbox[a].style.left=-width1+"px";
			animate(ydbox[now1],{left:width1});
			animate(ydbox[a],{left:0});
			dots1[now1].classList.remove("onr");
			dots1[a].classList.add("onr");
		}
		next1=now1=a;
	}
	}
	 //第一块结束
	 //第二块开始
	let ydbox1=document.querySelectorAll(".yd1");
	console.log(ydbox1);
	let leftbtn1=document.querySelectorAll(".leftBtna")[1];
	let rightbtn1=document.querySelectorAll(".rightBtna")[1];
	let dots2=document.querySelectorAll(".five1");
	let width2=parseInt(getComputedStyle(ydbox1[0],null).width);
	console.log(dots2);
	let flag2=true;
	ydbox1[0].style.left=0;
	dots2[0].classList.add("onr");
	let now2=next2=0;
	function move2(){
		next2++;
		if(next2==4){
			next2=0;
		}
		ydbox1[next2].style.left=width2+"px";
		animate(ydbox1[now2],{left:-width2});
		animate(ydbox1[next2],{left:0},function(){
			flag2=true;
		});
		dots2[now2].classList.remove("onr");
		dots2[next2].classList.add("onr");
		now2=next2;
	}
	function moveL2(){
		next2--;
		if(next2<0){
			next2=dots2.length-1;
		}
		ydbox1[next2].style.left=-width2+"px";
		animate(ydbox1[now2],{left:width2});
		animate(ydbox1[next2],{left:0},function(){
			flag2=true;
		});
		dots2[now2].classList.remove("onr");
		dots2[next2].classList.add("onr");
		now2=next2;
	}
	leftbtn1.onclick=function(){
		if(next2==0){
			return;
		}
		if(!flag2){
			return;
		}
		flag2=false;
		moveL2();
	}
	rightbtn1.onclick=function(){
		if(next2==dots2.length-1){
			return;
		}
		if(!flag2){
			return;
		}
		flag2=false;
		move2();
	}
	for(let b=0;b<dots2.length;b++){
		dots2[b].onclick=function(){
		if(now2==b){
			return;
		}
		else if(now2<b){
			ydbox1[b].style.left=width2+"px";
			animate(ydbox1[now2],{left:-width2});
			animate(ydbox1[b],{left:0});
			dots2[now2].classList.remove("onr");
			dots2[b].classList.add("onr");
		}
		else if(now2>b){
			ydbox1[b].style.left=-width2+"px";
			animate(ydbox1[now2],{left:width2});
			animate(ydbox1[b],{left:0});
			dots2[now2].classList.remove("onr");
			dots2[b].classList.add("onr");
		}
		next2=now2=b;
		}
	}
	// 第三块开始
	let ydbox2=document.querySelectorAll(".yd2");
	console.log(ydbox2);
	let leftbtn2=document.querySelectorAll(".leftBtna")[2];
	let rightbtn2=document.querySelectorAll(".rightBtna")[2];
	let dots3=document.querySelectorAll(".six1");
	let width3=parseInt(getComputedStyle(ydbox2[0],null).width);
	console.log(dots3);
	let flag3=true;
	ydbox2[0].style.left=0;
	dots3[0].classList.add("onr");
	let now3=next3=0;
	function move3(){
		next3++;
		if(next3==4){
			next3=0;
		}
		ydbox2[next3].style.left=width3+"px";
		animate(ydbox2[now3],{left:-width3});
		animate(ydbox2[next3],{left:0},function(){
			flag3=true;
		});
		dots3[now3].classList.remove("onr");
		dots3[next3].classList.add("onr");
		now3=next3;
	}
	function moveL3(){
		next3--;
		if(next3<0){
			next3=dots3.length-1;
		}
		ydbox2[next3].style.left=-width3+"px";
		animate(ydbox2[now3],{left:width3});
		animate(ydbox2[next3],{left:0},function(){
			flag3=true;
		});
		dots3[now3].classList.remove("onr");
		dots3[next3].classList.add("onr");
		now3=next3;
	}
	leftbtn2.onclick=function(){
		if(next3==0){
			return;
		}
		if(!flag3){
			return;
		}
		flag3=false;
		moveL3();
	}
	rightbtn2.onclick=function(){
		if(next3==dots3.length-1){
			return;
		}
		if(!flag3){
			return;
		}
		flag3=false;
		move3();
	}
	for(let c=0;c<dots3.length;c++){
		dots3[c].onclick=function(){
		if(now3==c){
			return;
		}
		else if(now3<c){
			ydbox2[c].style.left=width3+"px";
			animate(ydbox2[now3],{left:-width3});
			animate(ydbox2[c],{left:0});
			dots3[now3].classList.remove("onr");
			dots3[c].classList.add("onr");
		}
		else if(now3>c){
			ydbox1[c].style.left=-width3+"px";
			animate(ydbox2[now3],{left:width3});
			animate(ydbox3[c],{left:0});
			dots3[now3].classList.remove("onr");
			dots3[c].classList.add("onr");
		}
		next3=now3=c;
		}
	}
	//第三块结束
	//第四块开始
	let ydbox3=document.querySelectorAll(".yd3");
	console.log(ydbox3);
	let leftbtn3=document.querySelectorAll(".leftBtna")[3];
	let rightbtn3=document.querySelectorAll(".rightBtna")[3];
	let dots4=document.querySelectorAll(".seven");
	let width4=parseInt(getComputedStyle(ydbox3[0],null).width);
	console.log(dots4);
	let flag4=true;
	ydbox3[0].style.left=0;
	dots4[0].classList.add("onr");
	let now4=next4=0;
	function move4(){
		next4++;
		if(next4==4){
			next4=0;
		}
		ydbox3[next4].style.left=width4+"px";
		animate(ydbox3[now4],{left:-width4});
		animate(ydbox3[next4],{left:0},function(){
			flag4=true;
		});
		dots4[now4].classList.remove("onr");
		dots4[next4].classList.add("onr");
		now4=next4;
	}
	function moveL4(){
		next4--;
		if(next4<0){
			next4=dots4.length-1;
		}
		ydbox3[next4].style.left=-width4+"px";
		animate(ydbox3[now4],{left:width4});
		animate(ydbox3[next4],{left:0},function(){
			flag4=true;
		});
		dots4[now4].classList.remove("onr");
		dots4[next4].classList.add("onr");
		now4=next4;
	}
	leftbtn3.onclick=function(){
		if(next4==0){
			return;
		}
		if(!flag4){
			return;
		}
		flag4=false;
		moveL4();
	}
	rightbtn3.onclick=function(){
		if(next4==dots4.length-1){
			return;
		}
		if(!flag4){
			return;
		}
		flag4=false;
		move4();
	}
	for(let d=0;d<dots4.length;d++){
		dots4[d].onclick=function(){
		if(now4==d){
			return;
		}
		else if(now4<d){
			ydbox3[d].style.left=width4+"px";
			animate(ydbox3[now4],{left:-width4});
			animate(ydbox3[d],{left:0});
			dots4[now4].classList.remove("onr");
			dots4[d].classList.add("onr");
		}
		else if(now4>d){
			ydbox3[d].style.left=-width4+"px";
			animate(ydbox3[now4],{left:width4});
			animate(ydbox3[d],{left:0});
			dots4[now4].classList.remove("onr");
			dots4[d].classList.add("onr");
		}
		next4=now4=d;
		}
	}

	//为你推荐平移
	let leftbtn5=document.querySelector(".leftbtN");
	let rightbtn5=document.querySelector(".rightbtN");
	let ullength=document.querySelector(".ullength");
	let widths5=parseInt(getComputedStyle(ullength,null).width)/3;
	// console.log(leftbtn5,rightbtn5,ullength,widths5);

	let time5=0;
	leftbtn5.onclick=function(){
		time5++;
		if(time5==3){
			time5=2;
		}
		console.log(-widths5*time5);
		ullength.style.transform=`translate(${-(widths5*time5)}px)`;
	}
	rightbtn5.onclick=function(){
		time5--;
		if(time5==-1){
			time5=0;
		}
		ullength.style.transform=`translate(${-(widths5*time5)}px)`;
	}

	//小米闪购平移
	let leftbtn6=document.querySelector(".leftbtN1");
	let rightbtn6=document.querySelector(".rightbtN1");
	let movebox=document.querySelector(".movebox");
	let widths6=parseInt(getComputedStyle(movebox,null).width)/2;
	console.log(leftbtn6,rightbtn6,movebox,widths6);
	let time6=0;
	rightbtn6.onclick=function(){
		time6++;
		if(time6==2){
			time6=1;
		}
		movebox.style.transform=`translate(${-(widths6*time6)}px)`;
	}
	// leftbtn6.onclick=function(){
	// 	time6--;
	// 	if(time6==-1){
	// 		time6=0;
	// 	}
	// 	movebox.style.transform=`translate(${-(widths6*time6)}px)`;
	// }
	leftbtn6.onclick=function(){
		time6--;
		if(time6==-1){
			time6=0;
		}
		movebox.style.transform=`translate(${-(widths6*time6)}px)`;
	}


	//返回顶部
	
	let back=document.querySelector(".back");
	window.onscroll=function(){
		let hh=document.body.scrollTop||document.documentElement.scrollTop;
		// console.log(hh);
		if(hh>800){
			back.style.opacity=1;
		}else if(hh<800){
			back.style.opacity=0;
		}
		back.onclick=function(){
			animate(document.body,{scrollTop:0},600);
			animate(document.documentElement,{scrollTop:0},600);
		}
	}

	//顶部选项卡
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
	// }
	// for (let e=0;e<topText.length;e++){
	// 	topText[e].onmouseenter=function(){
	// 		for (let f=0;f<topBox.length;f++){
	// 			topBox[f].style.height="0";
	// 		}
	// 		topBox[e].style.height="200px";
	// 		// console.log(topBox[e]);
	// 	}
	// topText[e].onmouseleave=function(){
	// 	topBox[e].style.height="0";
	// 	}
	// }
	// 
	//  
	//  家电
	 let title=document.querySelectorAll(".all-title");
	 let twoBox=document.querySelectorAll(".two-box");
	 console.log(twoBox,title);
	 title[0].classList.add("active1");
	 twoBox[0].style.zIndex=600;
	 for(let f=0;f<title.length;f++){
	 	title[f].onmouseenter=function(){
	 		for(let g=0;g<title.length;g++){
	 			twoBox[g].style.zIndex=500;
	 			title[g].classList.remove("active1");
	 		}
	 		twoBox[f].style.zIndex=600;
	 		title[f].classList.add("active1");
	 	}
	 	// title[f].onmouseleave=function(){
	 	// 	twoBox[f].style.zIndex=500;
	 	// 	title[f].classList.remove("active1");
	 	// }
	 }

}