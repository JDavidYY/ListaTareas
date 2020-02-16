document.getElementById('formTask').addEventListener('submit', guardarTarea);
document.getElementById('formTask').addEventListener('submit', getTask);
    
    function guardarTarea(e){
        
        alert("Enviando formulario");
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        const task={
            title,
            description
        };
      //  localStorage.setItem('tasks',JSON.stringify(task))
       
        if(localStorage.getItem("tasks") === null){
            let tasks=[]
            tasks.push(task)
            localStorage.setItem('tasks',JSON.stringify(tasks))
            console.log("kha?")
        } else{
           let tasks =  JSON.parse(localStorage.getItem('tasks'))
           tasks.push(task)
           localStorage.setItem('tasks',JSON.stringify(tasks))
        }
        getTask();
        document.getElementById('tasks').reset();
        e.preventDefault();  
    }
    function getTask(){
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        let tasksView = document.getElementById('tasks')

        tasksView.innerHTML='';

        for (i=0;i<tasks.length;i++){
            tasksView.innerHTML += `<div class="card mb-3">
                <div class="body-card">
                   <p> ${tasks[i].title} - ${tasks[i].description} </p>
                   <a class="btn btn-block btn btn-danger" onclick="eliminarTarea('${tasks[i].title}')"> Elimminar tarea </a>
                </div>
                </div>`
        }
    }

    function eliminarTarea(a){
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        for (let i=0;i<tasks.length;i++){
            console.log(a)
           // console.log(tasks[i].title)
            //let title = tasks[i].title;
            //let description = tasks[i].description;
            if(tasks[i].title == a){
                console.log("Gaaa")
                tasks.splice(i,1);
            }
        
        }
        localStorage.setItem('tasks',JSON.stringify(tasks));
        getTask();
    }

    //console.log("hola mundo mundial");
    //console.log(title, description)

//console.log(localStorage.setItem('tasks',task))
getTask();