let todoList = [];

const addTodo = ()=>{
    let todoElement = document.querySelector('#todo-item');
    let todoDate = document.querySelector('#date');
    todoList.push({item: todoElement.value, date:todoDate.value});
    
    todoElement.value = '';
    todoDate.value = '';
    displayItems();
};

const displayItems = ()=>{
    let todoElement = document.querySelector('.results');
    let newHtml ='';

    for(let i = 0; i<todoList.length;i++)
    {
        let {item,date} = todoList[i];
        newHtml+= `
        
            <span>${item}</span> 
            <span>${date}</span>
            <button class= "btn" onclick ="todoList.splice(${i},1);
            displayItems();">Delete</button>
       
        `;
    }
    todoElement.innerHTML = newHtml;
};

displayItems();

