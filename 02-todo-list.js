const todolist = [];
 
  renderlist();

function addontodo() {

  const inputduedate = document.querySelector('.js-duedate');
  let duedate = inputduedate.value;
  const inputtodoname = document.querySelector('.js-input');
     let name = inputtodoname.value;
    
     todolist.push({name : name,duedate: duedate});
     inputtodoname.value ='';
     inputduedate.value ='';
     
     renderlist();
}

function renderlist() {

  let totalhtml = '';

for (let i= 0;i< todolist.length;i++) {

  const todoobject = todolist[i];
  const name = todoobject.name;
  const duedate = todoobject.duedate;
  let html = `<div>${name}</div><div> ${duedate}</div> 
  <button class="delete-button" onclick="
     todolist.splice(${i},1);
     renderlist();
  ">Delete</button>`;
  totalhtml += html;
  

}
document.querySelector('.js-list').innerHTML= totalhtml;

}

