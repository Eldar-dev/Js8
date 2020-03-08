class TwoExtendsClass extends BaseClass{
    constructor(firstName, lastName, years, national, club, position, grip, team){
      super(firstName, lastName, years, national, club, position);
      this.grip = grip;
      this.team = team;
      this.type = "hockeyplayer";
    }
  
    get grip(){
      return this._grip;
    }
    get team(){
      return this._team;
    }
  
    set grip(value){
      if(value.length == " "){
        alert("Введите grip");
      }
      this._grip = value;
    }
    set team(value){
      if(value.length == " "){
        alert("Введите team");
      }
      this._team = value;
    }

   
  
  }

  let bandit3 = new TwoExtendsClass("John12", "Yung", "20", "Bra", "Milan", "Defender", "Left", "Fourth");
arrBandits.push(bandit3);
let bandit4 = new TwoExtendsClass("John12", "Yung", "20", "Bra", "Milan", "Defender", "Left", "Second");
arrBandits.push(bandit4);
display("information");
printInfo(arrBandits);