const view=(()=>{
    domElements={
        toDoTask:`#toDoTask`,
        progressTask:`#progressTask`,
        doneTask:`#doneTask`,
        input:`#input`,
        select:`#select`,
        submit:`.submit`,
        delete:`.delete`
    }
    return{
        getDomElement:()=>{
            return domElements;
        },
        
    }
})();