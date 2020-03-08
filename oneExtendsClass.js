class OneExtendsClass extends BaseClass{
    constructor(firstName, lastName, years, national, club, position, parameters, foot){
      super(firstName, lastName, years, national, club, position);
      this.parameters = parameters;
      this.foot = foot;
      this.type = "footballplayer";
    }
  
    get parameters(){
      return this._parameters;
    }
    get foot(){
      return this._foot;
    }
  
    set parameters(value){
      if(value.length == " "){
        alert("Введите parameters");
      }
      this._parameters = value;
    }
    set foot(value){
      if(value.length == " "){
        alert("Введите foot");
      }
      this._foot = value;
    }
  
  }

  let bandit1 = new OneExtendsClass("John", "Yung", "32", "Arg", "Real M", "Forward", "Pass", "Right");
arrBandits.push(bandit1);
let bandit2 = new OneExtendsClass("John123123", "Yung", "21", "Fra", "PSG", "Goalkeeper", "Endurance", "Left");
arrBandits.push(bandit2);
display("information");
printInfo(arrBandits);