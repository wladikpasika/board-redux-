export default function putTasks(data, db){
    const transaction = db.transaction("todoList", "readwrite");
    const store = transaction.objectStore("todoList");
  
    Object.keys(data).forEach((key)=>{
      store.put(data[key], key);
      transaction.onerror = function(event) {
        console.log(event, 'Error')
      };
    });
  }