//your JS code here. If required.
function rr(){
let p = new Promise((resolve,reject)=>{
	setTimeOut(()=>{
		reslove('hello,world');
	},1000)
})
}
rr();