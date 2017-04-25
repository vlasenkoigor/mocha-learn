export default {
    plus(a,b){
        return a+b;
    },

    save(callback){
        setTimeout(()=>{
            callback(true);
        }, 1000)
    }
}