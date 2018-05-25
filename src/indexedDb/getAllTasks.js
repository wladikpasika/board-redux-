export default function getAllTasks(db){

    const request = db
    .transaction(["todoList"])
    .objectStore("todoList")
    .openCursor();// create loop, onsuccess receive object with result  
  
    let tasks = {};
    
    request.onerror = function(event) {
      console.log('request.onerror');
    };
  
    request.onsuccess = function(event) {
      const cursor = event.target.result;
      if (cursor) {
        const { key, value } = cursor;
        tasks[key] = value;
        console.log(tasks);
        cursor.continue();
      }  
    };
  }