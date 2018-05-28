export default function editTask( title = '', description = '', keyEditedTask, db){
    console.log(title, description, keyEditedTask);

    const request = db
    .transaction(["todoList"],'readwrite')
    .objectStore("todoList")
    .openCursor(); // create loop, onsuccess receive object with result  

    request.onerror = function(event) {
      console.log('request.onerror');
    };
  
    request.onsuccess = function(event) {
      const cursor = event.target.result;
      
      if (cursor) {
        const { key } = cursor;
        let updateData;

        if(key === keyEditedTask)
            {
              updateData = {...cursor.value};
              updateData.title = title;
              updateData.description = description;
              const request = cursor.update( updateData );
              request.onsuccess = () => {
                console.log('task updated');
              };
            }
        cursor.continue();
      }  
    };
    
  }