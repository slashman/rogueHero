export default {
	n: (a: number, b: number) => {
		return Math.floor(Math.random() * (b - a + 1)) + a;
	},
	from: function(array){
		return array[this.n(0, array.length-1)];
	},
}