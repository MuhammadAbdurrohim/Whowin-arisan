// Sound Effect from Pixabay

const App = Vue.createApp({   
    data() {
       return{
          state : true,
          inputName : '',
          namesList : [],
          errorMessage : '',
          showError : false,
          result : 'test',
       }
    },
    computed: {
       isReady() {return this.namesList.length > 1;} 
    },
    methods: {
       addNameToList(){
          const getUserName = this.inputName;
          console.log(getUserName);
          if(this.validate(getUserName)) {
             this.namesList.push(getUserName);
             this.inputName = '';
          } else {
             this.showError = true;
          }
       },
       validate(value) {
          if (value === "") {
             this.errorMessage = "Can't left them empty"
             return false;
          }
          if (this.namesList.includes(value)) {
             this.errorMessage = "Name has already been added"
             return false;
          }
          return true;
       },
       removeName(index){
          this.namesList.splice(index, 1);
       },
       showResult() {
          this.generateResult();
          this.state = false;
        },
        getWinnerName(){
          
          return this.namesList[Math.floor(Math.random() * this.namesList.length)];
        },
        generateResult() {
          let winnerName = this.getWinnerName();
 
          if (this.result !== "") {
            while (winnerName === this.result) {
              winnerName = this.getWinnerName();
            }
          }
          this.result = winnerName;
        },
        resetApp() {
          this.state = true;
          this.inputName = "";
          this.names = [];
          this.error = "";
          this.showError = false;
          this.result = "";
        },
        getNewResult() {
          this.generateResult();
       },
       playSound (sound) {
          if(sound) {
            var audio = new Audio(sound);
            audio.play();
          }
        }
    },
 }).mount("#app");