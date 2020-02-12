document.getElementById('formTask').addEventListener('submit', guardarTarea);
    
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
        
        e.preventDefault();  
    }
    function getTask(){
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        let tasksView = document.getElementById('tasks')


        for (i=0;i<tasks.length;i++){
            tasksView.innerHTML += `<div class="card">
                <div class="body-card">
                   <p> ${tasks[i].title} - ${tasks[i].description} </p>
                   <a class="btn btn-block btn btn-danger "> Tarea realizada </a>
                </div>
                </div>`
        }
    }
    //console.log("hola mundo mundial");
    //console.log(title, description)

//console.log(localStorage.setItem('tasks',task))
getTask();