const container=document.querySelector(".container")
const form=document.querySelector("form")
const title=document.getElementById("title");
const description=document.getElementById("description")
const addbtn=document.getElementById("addbtn")

const tasks=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[];

addtask();

function addtask(){
    
    tasks.forEach((value,index)=>{
    const task=document.createElement("div");
    task.setAttribute("class","task");
    const taskchild=document.createElement("div");
   
    const p=document.createElement("p");
    p.innerText=value.title;
    taskchild.append(p);

    const span=document.createElement("span");
    span.innerText=value.description;
    taskchild.append(span);

    task.append(taskchild);
    const delbtn=document.createElement("button");
    delbtn.setAttribute("class","delbtn");
    delbtn.innerText="-";
    delbtn.addEventListener("click",()=>{
        removetask();
        tasks.splice(index,1);
        localStorage.setItem("task",JSON.stringify(tasks))
        addtask();
    })

    task.append(delbtn);
    
    container.append(task);
    });

}

function removetask(){
    tasks.forEach(()=>{
        const div=document.querySelector(".task");
        div.remove();
    });
    
}

form.addEventListener("submit",(e)=>{
e.preventDefault(e);

removetask();
tasks.push({
    title:title.value,
    description:description.value
},
);
console.log(tasks);
localStorage.setItem("task",JSON.stringify(tasks))
addtask();
});


