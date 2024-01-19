import view from "./view.js";

const model=(()=>{
    let data={
        toDo:[],
        progress:[],
        done:[]
    }


    let Task=function (value,priority,id){
        this.value=value;
        this.priority=priority;
        this.id=id;
    };

    return {
        addTask:()=>{
            let id;
            let value=view.getValue.taskValue();
            let priority=view.getValue.priorityValue();
            if(data.toDo.length==0){
                id=1;
            }else{
                id=data.toDo.length+1;
            }
            let obj=new Task(value,priority,id);
            data.toDo.push(obj);
            return obj;
        }
    }
})();
export default model;