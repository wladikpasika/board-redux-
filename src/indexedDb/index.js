import putTasks from './putTasks';
import removeTask from './removeTask';
import getAllTasks from './getAllTasks';

const dbName = "todos";
const request = indexedDB.open(dbName, 1);
let db = {};
let counter = 0;

if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
  } 

request.onupgradeneeded = (event) => {
  db = event.target.result;
      const objectStore = db.createObjectStore("todoList");
      objectStore.transaction.oncomplete = function(event) {
      const toodosObjectStore = db.transaction("todoList", "readwrite").objectStore("todoList");
    };
};

request.onerror = event => alert(event,'Ошибка');
request.onsuccess = event => db = event.target.result;

export function putTasksHandler (data){ console.log(data); putTasks(data, db) }; //db from closure let db;
export const removeTasksHandler = key => removeTask(key, db); //db from closure
export const getAllTasksHandler = () => getAllTasks(db); //db from closure

// window.addEventListener('click', () => {
//   counter += 1;

//   if(counter % 2){
//     putTasks(newTodosData, db);
//     getAllTasks(db);
//   }
//   else {
//     console.log('lol');
//     //removeTask('14', db);
//   }
// })




