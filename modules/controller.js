const controller=(view,model)=>{
    let setUpListeners=()=>{
        document.querySelector(view.getDomElement().submit).addEventListener(`click`,Submit);
        document.querySelector(view.getDomElement().delete).addEventListener(`click`,DeleteTask)
    }
    
    
    function Submit(){
        let object=model.addTask();
        view.addTaskToView(object);
        document.querySelectorAll(view.getDomElement().paraf).forEach(e=>{
            e.addEventListener(`click`,selectTask);
        })
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
        
    }





    return {
        init:()=>{
            setUpListeners()
        }
    }
};
export default controller;