export class todo{
    task: string;
    completed:boolean;
    ismodify:boolean=false;
    constructor(task:string,completed:boolean){
        this.task=task;
        this.completed=completed
    }
}