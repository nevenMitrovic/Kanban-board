import view from "./view.js";

const model=(()=>{
    let data={
        objects:[]
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
            if(data.objects.length==0){
                id=1;
            }else{
                id=data.objects.length+1;
            }
            let obj=new Task(value,priority,id);
            data.objects.push(obj);
            return obj;
        }
    }
})();
export default model;