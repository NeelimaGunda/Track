import{Observable}from'rxjs'
myobservable = new Observable((observer)=>{
observer.next('1');
});
ngOnInIt(){
this.myobservable.subscribe((val)=>{
console.log(val);
}
}

