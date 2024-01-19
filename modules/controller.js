const controller=(view,model)=>{
    let setUpListeners=()=>{
        document.querySelector(view.getDomElement().submit).addEventListener(`click`,Submit);
        document.querySelector(view.getDomElement().delete).addEventListener(`click`,DeleteTask)
    }
    
    
    function Submit(){
        let object=model.addTask();
        view.addTaskToView(object);
        dragAndDrop();

    }

    function selectTask(){
        if(document.querySelectorAll(`p`)){
            document.querySelectorAll(`p`).forEach(e=>{
                e.classList.remove(`selectedp`)
            })
        }
        this.classList.add(`selectedp`);
    }

    function DeleteTask(){
        if(document.querySelector(`.selectedp`)){
            document.querySelector(`.selectedp`).remove()
        }else{
            alert(`Select task!`)
        }
    }

    function dragAndDrop(){

        let toDo=document.querySelector(view.getDomElement().toDoTask);
        let progress=document.querySelector(view.getDomElement().progressTask);
        let done=document.querySelector(view.getDomElement().doneTask);
        let task=document.querySelectorAll(view.getDomElement().task);
        document.querySelectorAll(view.getDomElement().paraf).forEach(e=>{
            e.addEventListener(`click`,selectTask);
            e.addEventListener(`dragstart`,(e)=>{
                let selected=e.target;
                task.forEach(e=>{
                    e.addEventListener(`dragover`,(e)=>{
                        e.preventDefault();
                    })
                });
                progress.addEventListener(`drop`,(e)=>{
                    if(selected!=null){
                        e.preventDefault();
                        progress.appendChild(selected);
                        selected=null;
                    }
                });
                done.addEventListener(`drop`,(e)=>{
                    if(selected!=null){
                        e.preventDefault();
                        done.appendChild(selected);
                        selected=null;
                    }
                });
                toDo.addEventListener(`drop`,(e)=>{
                    if(selected!=null){
                        e.preventDefault();
                        toDo.appendChild(selected);
                        selected=null;
                    }
                })
            });
        });
    }





    return {
        init:()=>{
            setUpListeners()
        }
    }
};
export default controller;