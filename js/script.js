// boilerplate Vuejs
const {createApp} = Vue;

createApp({
data(){
    return {
        // array dove pusheremo al suo interno le mail random
        randomMail: []
    }
},
mounted(){
    this.generateRandomMail()
},
methods:{
    // funzione che generi le mail
    generateRandomMail(){
        // ciclaggio delle mail
        for(let i=0; i<10; i++){
        // libreria axios con metodo get
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email)=>{
        this.randomMail.push(email.data.response)
        
        
        })}
    }
},

}).mount('#app')