const view=(()=>{
   let domElements={
        task:`.task`,
        toDoTask:`#toDoTask`,
        progressTask:`#progressTask`,
        doneTask:`#doneTask`,
        input:`#input`,
        select:`#select`,
        submit:`.submit`,
        delete:`.delete`,
        paraf:`.paraf`,
        change:`.change`
    }


    return{
        getDomElement:()=>{
            return domElements;
        },
        getValue:{
            taskValue:()=>{
               return document.querySelector(domElements.input).value
            },
            priorityValue:()=>{
               return document.querySelector(domElements.select).value
            }
        },
        addTaskToView:(object)=>{
            let toDo=document.querySelector(domElements.toDoTask);
            let html=`
            <p data-id="${object.id}" class="${object.priority} paraf" draggable="true">${object.value}</p>
            `;
            toDo.innerHTML+=html;
        },




    }
})();
export default view;