//this keyword
//omssnamahl(30-01-2025)
    
let laptop2 ={
    cpu:'i7',
    ram:16,
    brand:'Apple',
    getConfig:function(){
        console.log(this.cpu);
    }
}

let laptop1 ={
    cpu:'i5',
    ram:17,
    brand:'lenovo',
    compare:function(other){
        if(this.cpu > other.cpu)
            console.log(this);
        else
            console.log(other);
    },
    getConfig: function(){
        console.log(this.cpu);
    }
}
    laptop1.compare(laptop2);

