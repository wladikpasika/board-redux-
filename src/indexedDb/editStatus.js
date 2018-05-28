export default function editStatus( status, keyTask, db){

    const request = db
    .transaction(["todoList"],'readwrite')
    .objectStore("todoList")
    .openCursor();// create loop, onsuccess receive object with result  

    request.onerror = function(event) {
      console.log('request.onerror');
    };
  
    request.onsuccess = function(event) {
      const cursor = event.target.result;
      
      if (cursor) {
        const { key } = cursor;
        let updateData;

        if(key === keyTask)
            {
              updateData = {...cursor.value};
              updateData.status = status;
              const request = cursor.update(updateData);
              request.onsuccess = () => {
                console.log('status updated');
              };
            }
        cursor.continue();
      }  
    };
    
  }