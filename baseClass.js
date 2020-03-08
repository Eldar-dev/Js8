
class BaseClass{
    constructor(firstName, lastName, years, national, club, position){
      this.firstName = firstName;
      this.lastName = lastName;
      this.years = years;
      this.national = national;
      this.club = club;
      this.position = position;
    }
  
    get firstName(){
      return this._firstName;
    }
    get lastName(){
      return this._lastName;
    }
    get years(){
      return this._years;
    }
    get national(){
      return this._national;
    }
    get club(){
      return this._club;
    }
    get position(){
      return this._position;
    }
   
  
   
  
    set firstName(value){
      if(value.length == " "){
        alert("Введите firstName");
      }
      this._firstName = value;
    }
    set lastName(value){
      if(value.length == " "){
        alert("Введите lastName");
      }
      this._lastName = value;
    }
  
    set years(value){
      if(value.length == " "){
        alert("Введите years");
      }
      this._years = value;
    }
    set national(value){
      if(value.length == " "){
        alert("Введите national");
      }
      this._national = value;
    }
    set club(value){
      if(value.length == " "){
        alert("Введите club");
      }
      this._club = value;
    }
    set position(value){
      if(value.length == " "){
        alert("Введите position");
      }
      this._position = value;
    }
  
  }
