function editBandit(i){
    display("create_person");
    document.getElementById("textFirstName").value=  arrBandits[i].firstName;
    document.getElementById("textLastName").value=  arrBandits[i].lastName;
    document.getElementById("textYears").value=  arrBandits[i].years;
    document.getElementById("textNational").value=  arrBandits[i].national;
    document.getElementById("textClub").value=  arrBandits[i].club;
    document.getElementById("textPosition").value=  arrBandits[i].position;
    document.getElementById("textParameters").value=  arrBandits[i].parameters;
    document.getElementById("textFoot").value=  arrBandits[i].foot;
    document.getElementById("textGrip").value=  arrBandits[i].grip;
    document.getElementById("textTeam").value=  arrBandits[i].team;
    document.getElementById("mainMenu").style.display="none";
    document.getElementById("newSave").style.display="";
  }
  
  
  function saveBandit(i){
    display("create_person");
    document.getElementById("textFirstName").value=  arrBandits[i].firstName;
    document.getElementById("textLastName").value=  arrBandits[i].lastName;
    document.getElementById("textYears").value=  arrBandits[i].years;
    document.getElementById("textNational").value=  arrBandits[i].national;
    document.getElementById("textClub").value=  arrBandits[i].club;
    document.getElementById("textPosition").value=  arrBandits[i].position;
    document.getElementById("textParameters").value=  arrBandits[i].parameters;
    document.getElementById("textFoot").value=  arrBandits[i].foot;
    document.getElementById("textGrip").value=  arrBandits[i].grip;
    document.getElementById("textTeam").value=  arrBandits[i].team;
    deleteBandit(i,arrBandits);
    document.getElementById("createPerson").style.display="none";
    document.getElementById("mainMenu").style.display="none";
    document.getElementById("newSave").style.display="";
  }
  
  function deleteBandit(i,arrBandits) {
    arrBandits.splice(i,1);
    printInfo(arrBandits);
    let request = new XMLHttpRequest();
    let url = "http://localhost:3000/posts" + arrBandits[i].id;
    console.log(url);
    request.open('DELETE', url);
    request.setRequestHeader('Content-Type', 'application/x-www-form-url');
    request.addEventListener("readystatechange", () => {
    if (request.readyState == 4 && request.status == 200){
            printInfo();
      }
      else
        {
            console.error("Error: " + request.status);
        }
    });
    request.send();
  }
  
  
  function printDetailedInfo(i){
    let form = document.getElementById("all_info").getElementsByTagName("form");
    
    form[0].innerHTML+='<div class="detailInfo">'
    form[0].innerHTML+='<div class="details">'+
          '<div class="elem">Имя</div>'+
        '</div>'+
        '<div class="details">'+
          '<div class="elem">'+arrBandits[i].firstName+'</div>'+
        '</div><br>'
    form[0].innerHTML+=
    '<div class="detail">'+
          '<div class="elem">Фамилия</div>'+
        '</div>'+
        '<div class="detail">'+
          '<div class="elem">'+arrBandits[i].lastName+'</div>'+
        '</div><br>'
    form[0].innerHTML+=
        '<div class="detailis">'+
              '<div class="elem">Возраст</div>'+
            '</div>'+
            '<div class="detailis">'+
              '<div class="elem">'+arrBandits[i].years+'</div>'+
            '</div><br>'
    form[0].innerHTML+=
        '<div class="detailus">'+
            '<div class="elem">Национальность</div>'+
            '</div>'+
            '<div class="detailus">'+
            '<div class="elem">'+arrBandits[i].national+'</div>'+
            '</div><br>'
     form[0].innerHTML+=
        '<div class="detailes">'+
          '<div class="elem">Клуб</div>'+
          '</div>'+
          '<div class="detailes">'+
          '<div class="elem">'+arrBandits[i].club+'</div>'+
          '</div><br>' 
     form[0].innerHTML+=
      '<div class="detailos">'+
        '<div class="elem">Позиция</div>'+
        '</div>'+
        '<div class="detailos">'+
        '<div class="elem">'+arrBandits[i].position+'</div>'+
        '</div><br>' 
        form[0].innerHTML+=
      '<div class="detailas">'+
        '<div class="elem">Параметры</div>'+
        '</div>'+
        '<div class="detailas">'+
        '<div class="elem">'+arrBandits[i].parameters+'</div>'+
        '</div><br>'     
        form[0].innerHTML+=
        '<div class="detailys">'+
          '<div class="elem">Ударная нога</div>'+
          '</div>'+
          '<div class="detailys">'+
          '<div class="elem">'+arrBandits[i].foot+'</div>'+
          '</div><br>'    
          form[0].innerHTML+=
          '<div class="detaile">'+
            '<div class="elem">Хват клюшки</div>'+
            '</div>'+
            '<div class="detaile">'+
            '<div class="elem">'+arrBandits[i].grip+'</div>'+
            '</div><br>'    
            form[0].innerHTML+=
        '<div class="detaily">'+
          '<div class="elem">Звено команды</div>'+
          '</div>'+
          '<div class="detaily">'+
          '<div class="elem">'+arrBandits[i].team+'</div>'+
          '</div><br>'                
      form[0].innerHTML+='</div><br>'
      form[0].innerHTML+='<br>'+
      '<input type="button" class="buttons" id="mainMenu2" value="Главное меню">';
  
      
      
  
    document.getElementById("mainMenu2").addEventListener("click",function() {
      display("information");
    });
  }
  
  function printInfo(arrBandits) {
    let request = new XMLHttpRequest();
  let url = "http://localhost:3000/posts";
  request.open('GET', url);
  request.setRequestHeader('Content-Type', 'application/x-www-form-url');
  request.addEventListener("readystatechange", () => {
if (request.readyState === 4 && request.status === 200) {
      arrBandits = JSON.parse(request.responseText);


    let form = document.getElementById("information").getElementsByTagName("form");
    form[0].innerHTML='<br>';
    form[0].innerHTML+='<div class="text_description">'+
      '<div class="text_name strong">Имя</div>'+
      '<div class="text_name strong">Фамилия</div>'+
      '<div class="text_name strong">Возраст</div>'+
      '<div class="text_name strong">Национальность</div>'+
      '<div class="text_name strong">Клуб</div>'+
      '<div class="text_name strong">Позиция</div>'+
      '<div class="text_name strong">Параметры</div>'+
      '<div class="text_name strong">Ударная нога</div>'+
      '<div class="text_name strong">Хват клюшки</div>'+
      '<div class="text_name strong">Звено команды</div>'
      form[0].innerHTML+='</div>';
  
    for (let i=0; i<arrBandits.length; i++) {
      
      if('+i+' == undefined){
          form[0].innerHTML+='<div class="text_description">'+
        '<div class="text_name " id="details'+i+'">'+arrBandits[i].firstName+'</div>'+
        '<div class="text_name " id="detail'+i+'">'+arrBandits[i].lastName+'</div>'+
        '<div class="text_name " id="detailis'+i+'">'+arrBandits[i].years+'</div>'+
        '<div class="text_name " id="detailus'+i+'">'+arrBandits[i].national+'</div>'+
        '<div class="text_name " id="detailes'+i+'">'+arrBandits[i].club+'</div>'+
        '<div class="text_name " id="detailos'+i+'">'+arrBandits[i].position+'</div>'+
        '<div class="text_name " id="detailas'+i+'">'+ +'</div>'+
        '<div class="text_name " id="detailys'+i+'">'+arrBandits[i].foot+'</div>'+
        '<div class="text_name " id="detaile'+i+'">'+arrBandits[i].grip+'</div>'+
        '<div class="text_name " id="detaily'+i+'">'+arrBandits[i].team+'</div>'+
        '<div class="text_name " id="edit'+i+'">Редактировать</div>'+
        '<div class="text_name " id="remove'+i+'">Удалить</div>'+
        '</div>';
        }
        else{
  
      form[0].innerHTML+='<div class="text_description">'+
        '<div class="text_name " id="details'+i+'">'+arrBandits[i].firstName+'</div>'+
        '<div class="text_name " id="detail'+i+'">'+arrBandits[i].lastName+'</div>'+
        '<div class="text_name " id="detailis'+i+'">'+arrBandits[i].years+'</div>'+
        '<div class="text_name " id="detailus'+i+'">'+arrBandits[i].national+'</div>'+
        '<div class="text_name " id="detailes'+i+'">'+arrBandits[i].club+'</div>'+
        '<div class="text_name " id="detailos'+i+'">'+arrBandits[i].position+'</div>'+
        '<div class="text_name " id="detailas'+i+'">'+arrBandits[i].parameters+'</div>'+
        '<div class="text_name " id="detailys'+i+'">'+arrBandits[i].foot+'</div>'+
        '<div class="text_name " id="detaile'+i+'">'+arrBandits[i].grip+'</div>'+
        '<div class="text_name " id="detaily'+i+'">'+arrBandits[i].team+'</div>'+
        '<div class="text_name " id="edit'+i+'">Редактировать</div>'+
        '<div class="text_name " id="remove'+i+'">Удалить</div>'+
        '</div>';}
  
        
    }
  
    
    
    form[0].innerHTML+='<br>'+
    '<input type="button" id="newBanditButton" class="buttons" value="Добавить нового игрока">';
    
  
    for (let i=0;i<arrBandits.length;i++){
      let edit='edit'+i;
      let remove='remove'+i;
      let details='details'+i;
      let detail='detail'+i;
      let detailis='detailis'+i;
      let detailus='detailus'+i;
      let detailes='detailes'+i;
      let detailos='detailos'+i;
      let detailas='detailas'+i;
      let detailys='detailys'+i;
      let detaile='detaile'+i;
      let detaily='detaily'+i;
      document.getElementById(edit).style.color="blue";
      document.getElementById(remove).style.color="red";
      document.getElementById(details).style.color="green";
      document.getElementById(detail).style.color="purple";
      document.getElementById(detailis).style.color="pink";
      document.getElementById(detailus).style.color="brown";
      document.getElementById(detailes).style.color="orange";
      document.getElementById(detailos).style.color="crimson";
      document.getElementById(detailas).style.color="indigo";
      document.getElementById(detailys).style.color="teal";
      document.getElementById(detaile).style.color="plum";
      document.getElementById(detaily).style.color="cyan";
  
  
  
  
      document.getElementById(details).addEventListener("click",function(){
        printDetailedInfo(i,arrBandits);
        display("all_info");
      });
  
      document.getElementById(detail).addEventListener("click",function(){
        printDetailedInfo(i,arrBandits);
        display("all_info");
      });
  
      document.getElementById(detailis).addEventListener("click",function(){
        printDetailedInfo(i,arrBandits);
        display("all_info");
      });
  
      document.getElementById(detailus).addEventListener("click",function(){
        printDetailedInfo(i,arrBandits);
        display("all_info");
      });
  
      document.getElementById(detailes).addEventListener("click",function(){
        printDetailedInfo(i,arrBandits);
        display("all_info");
      });
  
      document.getElementById(detailos).addEventListener("click",function(){
        printDetailedInfo(i,arrBandits);
        display("all_info");
      });
  
      document.getElementById(detailas).addEventListener("click",function(){
        printDetailedInfo(i,arrBandits);
        display("all_info");
      });
      
      document.getElementById(detailys).addEventListener("click",function(){
        printDetailedInfo(i,arrBandits);
        display("all_info");
      });
  
      document.getElementById(detaile).addEventListener("click",function(){
        printDetailedInfo(i,arrBandits);
        display("all_info");
      });
  
      document.getElementById(detaily).addEventListener("click",function(){
        printDetailedInfo(i,arrBandits);
        display("all_info");
      });
      
      
      document.getElementById(edit).addEventListener("click",function(){
        saveBandit(i);
  
      });
      document.getElementById(remove).addEventListener("click",function(){
        if (confirm("Вы уверены, что хотите удалить инофрмацию об игроке " +
        arrBandits[i].firstName + " " +arrBandits[i].lastName+"?")) {
            deleteBandit(i,arrBandits);
        } else {
  
        }
  
      });
    }
  
    document.getElementById("newBanditButton").addEventListener("click",function(){
      display("create_person");
      document.getElementById("createPerson").style.display="";
      document.getElementById("newSave").style.display="none";
    });
  }
  else
  {
      
  }
  });
  request.send();
  
  
  }
  
  function display(visibleId) {
  
    switch (visibleId) {
    case "create_person":
    document.getElementById("information").style.display="none";
    document.getElementById("all_info").style.display="none";
    document.getElementById("create_person").style.display="block";
    break;
    case "all_info":
    document.getElementById("information").style.display="none";
    document.getElementById("all_info").style.display="block";
    document.getElementById("create_person").style.display="none";
    break;
    case "information":
    default :
    document.getElementById("information").style.display="block";
    document.getElementById("all_info").style.display="none";
    document.getElementById("create_person").style.display="none";
    }
  }
  
  
  function checkRadio() {
      var radio=document.getElementsByName('radioExt');
      for (var i=0;i<radio.length; i++) {
          if (radio[i].checked) {
              return(radio[i].value);
          }
      }
  }
  
  document.getElementById("radio_ext1").addEventListener("click", ()=>{
    document.getElementById("base").style.display = "";
    document.getElementById("oneExtends").style.display = "";
    document.getElementById("twoExtends").style.display = "none";
  });
  
  document.getElementById("radio_ext2").addEventListener("click", ()=>{
    document.getElementById("base").style.display = "";
    document.getElementById("oneExtends").style.display = "none";
    document.getElementById("twoExtends").style.display = "";
  });
  
  
  let arrBandits = []; 
  alert(arrBandits);


  
  
  document.getElementById("createPerson").addEventListener("click", function() {
    document.getElementById("mainMenu").style.display="";
    let request = new XMLHttpRequest();
  let url = "http://localhost:3000/posts/posts";
  request.open('POST', url);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4 && request.status == 200 || request.status == 500){
      printInfo(arrBandits);
      display("information");
        }
        else{
          alert("false");
            console.log("Error:  " + request.status);
        }
    });


    
    let firstName = document.getElementById("textFirstName").value;
    let lastName = document.getElementById("textLastName").value;
    let years = document.getElementById("textYears").value;
    let national = document.getElementById("textNational").value;
    let club = document.getElementById("textClub").value;
    let position = document.getElementById("textPosition").value;
    let parameters = document.getElementById("textParameters").value;
    let foot = document.getElementById("textFoot").value;
    let grip = document.getElementById("textGrip").value;
    let team = document.getElementById("textTeam").value;
    let type = checkRadio();
    switch (type) {
      case "footballplayer":
        arrBandits[arrBandits.length] = new OneExtendsClass(firstName, lastName, years, national, club, position, parameters, foot);
        arrBandits = JSON.stringify(arrBandits);
        console.log(arrBandits);
        printInfo(arrBandits);
        display("information");
        alert("Добавил нового");
        request.send(arrBandits);
      break;
      case "hockeyplayer":
        arrBandits[arrBandits.length] = new TwoExtendsClass(firstName, lastName, years, national, club, position, grip, team);
        arrBandits = JSON.stringify(arrBandits);
        console.log(arrBandits);
        printInfo(arrBandits);
       display("information");
        alert("Добавил нового");
        request.send(arrBandits);
        break;
      default :
        arrBandits[arrBandits.length] = new BaseClass(firstName, lastName, years, national, club, position);
        arrBandits = JSON.stringify(arrBandits);
        console.log(arrBandits);
        printInfo(arrBandits);
        display("information");
        alert("Добавил нового");
        request.send(arrBandits);
    }
  });
  
  
  
      document.getElementById("mainMenu").addEventListener("click",function() {
    display("information");
  });
  
  
  document.getElementById("newSave").addEventListener("click", function() {
      document.getElementById("mainMenu").style.display="";
      let firstName = document.getElementById("textFirstName").value;
      let lastName = document.getElementById("textLastName").value;
      let years = document.getElementById("textYears").value;
      let national = document.getElementById("textNational").value;
      let club = document.getElementById("textClub").value;
      let position = document.getElementById("textPosition").value;
      let parameters = document.getElementById("textParameters").value;
      let foot = document.getElementById("textFoot").value;
      let grip = document.getElementById("textGrip").value;
      let team = document.getElementById("textTeam").value;
      let type = checkRadio();
      switch (type) {
        case "footballplayer":
          arrBandits[arrBandits.length] = new OneExtendsClass(firstName, lastName, years, national, club, position, parameters, foot);
          /*printInfo(arrBandits);*/
          
          display("information");
          alert("Изменение сохранено");
        break;
        case "hockeyplayer":
          arrBandits[arrBandits.length] = new TwoExtendsClass(firstName, lastName, years, national, club, position, grip, team);
         printInfo(arrBandits);
         display("information");
          alert("Изменение сохранено");
          break;
        default :
          arrBandits[arrBandits.length] = new BaseClass(firstName, lastName, years, national, club, position);
          printInfo(arrBandits);
          display("information");
          alert("Изменение сохранено");
      }
    });
  