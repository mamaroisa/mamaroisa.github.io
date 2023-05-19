const sliderRendering = Vue.createApp({
	data() {
		return {
			
			images: [
				{ id: 1, src: "./pic/loc1.jpg", title: "Экошатер", class: "" }, //class: "up"/"down" на случай, если нужно поднять картинку выше/ниже, !! в css нужно добавить этот класс
				{ id: 2, src: "./pic/loc2.png", title: "Геокупол"},
				{ id: 3, src: "./pic/loc3.jpg", title: "Палатки", class: "up" },
				{ id: 4, src: "./pic/loc4.jpg", title: "Домики", class: "" },
				{ id: 5, src: "./pic/loc5.jpg", title: "Юрты", class: "" },
			],

			//изменяемые параметры
			timeforslide: 2000, // 3000 = 3 sec - время остановки для одного слайда
			timefornextslide: 1, // 1 sec - время за которое один слайд переключается на следующий
			intervalimageslide: 410, // px - расстояние между слайдами, на случай если нужно сделать больше размер одного слайда, так же в css по пути - "#slider-rendering .slide-for-img .slider-img .slider-img-in img "
			animationcss: "ease-in-out", //ease , ease-in , ease-out , ease-in-out , linear - список всех анимаций css

			//неизменяемые параметры
			current: 1,
			x: 0,

			animation: null,
			startint: null,
			slideright: null,
			slideright1: null,
		};
	},

	

	//автоматическая прокрутка слайдов

	mounted() {
		this.startint = setInterval(() => {
			this.x = -this.intervalimageslide;
			this.animation =
				"transform: translateX(" +
				this.x +
				"px); transition: transform " +
				this.timefornextslide +
				"s " +
				this.animationcss;
			this.current += 1;

			this.slideright = setInterval(() => {
				this.animation = null;
				clearInterval(this.slideright);
				this.images.unshift(...this.images.splice(1, this.images.length - 1));
			}, this.timefornextslide * 1000);

			if (this.current > this.images.length) {
				this.current = 1;
				this.x *= 0;
			}
		}, this.timeforslide);
	},
});

sliderRendering.mount("body");
