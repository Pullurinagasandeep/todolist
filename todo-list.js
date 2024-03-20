const todolist = [];


function addontodo() {

  const todoname = document.querySelector('.js-input');

   
      let name = todoname.value;
     todolist.push(name);
     todoname.value ='';
     console.log(todolist);
}


