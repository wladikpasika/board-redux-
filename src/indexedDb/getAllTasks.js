export default function getAllTasks(){
  let db = {};
  let tasks = {};

  return new Promise((resolve, reject)=>{

    const request = indexedDB.open("todos");

      request.onsuccess = event => {
        db = event.target.result;
        const objectStore = db.transaction("todoList").objectStore("todoList");
        const request = objectStore.openCursor();
        
        request.onsuccess = event => {
            let cursor = event.target.result;
              if (cursor) {
                const { key, value } = cursor;
                tasks[ key ] = value;
                cursor.continue();
              }
              else {
                return resolve( tasks );
              }        
      };   
    };
    request.onerror = (err) => reject(err);
  })
}