const tatie = document.querySelector("#MaiotoTatie");
const tatieback = document.querySelector("#TatieBackground");
const nameplateName = document.querySelector("#MaiotoName")
const maiotoInfo = document.querySelector("#Maiotoinfo")

const tatieKey = {	//立ち絵
	opacity: [0, 1],
	translate: ["300px 0", 0],
};
const AnimateOption = {
	duration: 1000,
	easing: "ease-out",
	fill: "forwards",
}

const tatieBackKey = {	//立ち絵背景
	opacity: [0, 1],
	translate: ["500px 0", 0],
};
const AnimateOptionDelay = {
	duration: 1000,
	easing: "ease-out",
	delay: 300,
	fill: "forwards",
}

const infokey = {	//立ち絵背景
	opacity: [0, 1],
	translate: ["-500px 0", 0],
};
const AnimateOption2Delay = {
	duration: 1000,
	easing: "ease-out",
	delay: 600,
	fill: "forwards",
}

tatie.animate(tatieKey, AnimateOption);
nameplateName.animate(tatieBackKey, AnimateOptionDelay);
tatieback.animate(tatieBackKey, AnimateOptionDelay);
maiotoInfo.animate(infokey, AnimateOption2Delay);

window.scrollBy(0, window.innerHeight);//１ページ分下にスクロールする。
scrollBy(0,window.innerHeight);//scrollByだけでも動作します。