const todolist = [];
renderlist();

function addontodo() {

  const todoname = document.querySelector('.js-input');
     let name = todoname.value;
     todolist.push(name);
     todoname.value ='';
     renderlist();
}

function renderlist() {

  let totalhtml = '';

for (let i= 0;i< todolist.length;i++) {

  const todoname = todolist[i];
  let html = `<p>${todoname}</p>`;
  totalhtml += html;

}
document.querySelector('.js-list').innerHTML= totalhtml;
}