export default function removeTask(key, db){
    const transaction = db.transaction("todoList", "readwrite")
    .objectStore("todoList")
    .delete(key);
  }