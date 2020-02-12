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
    //console.log("hola mundo mundial");
    //console.log(title, description)

//console.log(localStorage.setItem('tasks',task))
