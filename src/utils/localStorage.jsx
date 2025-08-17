 const employees =  [
    {
      "id": 101,
      "name":"Laxmi",
      "email": "laxmi@me.com",
      "password": "123",
      "avtarUrl":"https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia&gender=female",
      "taskCount":{
          "active":2,
          "newTasks":3,
          "completed":2,
          "failed":0
      },
      "tasks": [
        {
          "active": true,
          "completed": false,
          "failed": false,
          "newTasks": true,
          "taskDescription": "Develop login authentication module",
          "taskDate": "2025-08-12",
          "taskTitle":"Login Page",
          "taskCategory":"Development"
        },
        {
          "active": false,
          "completed": true,
          "taskDescription": "Fix API response delay issue",
          "taskDate": "2025-08-08",
          "taskTitle":"Fix API",
          "taskCategory":"Development",
          "failed": false,
          "newTask": false
        }
      ]
    },
    {
      "id": 102,
      "name":"Sulekha",
      "email": "sulekha@me.com",
      "password": "123",
      "avtarUrl":"https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&gender=female",
      "taskCount":{
          "active":2,
          "newTasks":1,
          "completed":0,
          "failed":10,
      },
      "tasks": [
        {
          "active": true,
          "completed": false,
          "taskDescription": "Write automated test cases",
          "taskDate": "2025-08-12",
          "taskTitle":"Test Case",
          "taskCategory":"DSA",
          "failed": false,
          "newTasks": true
        },
        {
          "active": false,
          "completed": false,
          "taskDescription": "Test payment gateway integration",
          "taskDate": "2025-08-07",
          "taskTitle":"Payment test",
          "taskCategory":"Development",
          "failed": true,
          "newTasks": false
        }
      ]
    },
    {
      "id": 103,
      "name":"Shalu",
      "email": "shalu@me.com",
      "password": "123",
      "avtarUrl":"https://api.dicebear.com/7.x/avataaars/svg?seed=Ava&gender=female",
      "taskCount":{
          "active":2,
          "newTasks":1,
          "completed":3,
          "failed":0,
      },
      "tasks": [
        {
          "active": true,
          "completed": false,
          "taskDescription": "Design new dashboard UI",
          "taskDate": "2025-08-12",
          "taskTitle":"Design UI",
          "taskCategory":"Design",
          "failed": false,
          "newTasks": true
        },
        {
          "active": false,
          "completed": true,
          "taskDescription": "Update color palette for mobile app",
          "taskDate": "2025-08-09",
          "taskTitle":"Update Color",
          "taskCategory":"Mobile Development",
          "failed": false,
          "newTasks": false
        }
      ]
    },
    {
      "id": 104,
      "name":"Pragti",
      "email": "pragati@me.com",
      "password": "123",
      "avtarUrl":"https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella&gender=female",
      "taskCount":{
          "active":2,
          "newTasks":1,
          "completed":3,
          "failed":0,
      },
      "tasks": [
        {
          "active": false,
          "completed": true,
          "taskDescription": "Conduct employee onboarding session",
          "taskDate": "2025-08-10",
          "taskTitle":"Conduct Seddion",
          "taskCategory":"Development",
          "failed": false,
          "newTasks": false
        },
        {
          "active": true,
          "completed": false,
          "taskDescription": "Update HR policies document",
          "taskDate": "2025-08-12",
          "taskTitle":"Policies",
          "taskCategory":"Development",
          "failed": false,
          "newTasks": true
        }
      ]
    },
    {
      "id": 105,
      "name":"Saumya",
      "email": "saumya@me.com",
      "password": "123",
      "avtarUrl":"https://api.dicebear.com/7.x/avataaars/svg?seed=Mia&gender=female",
      "taskCount":{
          "active":2,
          "newTasks":1,
          "completed":3,
          "failed":2,
      },
      "tasks": [
        {
          "active": true,
          "completed": false,
          "taskDescription": "Prepare campaign report",
          "taskDate": "2025-08-12",
          "taskTitle":"Login Page",
          "taskCategory":"Development",
          "failed": false,
          "newTasks": true
        },
        {
          "active": false,
          "completed": true,
          "taskDescription": "Post product updates on social media",
          "taskDate": "2025-08-09",
          "taskTitle":"Login Page",
          "taskCategory":"Development",
          "failed": false,
          "newTasks": false
        }
      ]
    }
  ]

   const admin = [{
    "id": 1,
    "name":"Ayushi",
    "email": "admin@company.com",
    "password": "123",
    "avtarUrl":"https://api.dicebear.com/7.x/avataaars/svg?seed=Mia&gender=female",
  }];


  // jo data mila h usme set aur fet fun se manage krege

   const setLocalStorage = ()=>{

    if(!localStorage.getItem("employee")){
      localStorage.setItem("employee", JSON.stringify(employees));
    }
    if(!localStorage.getItem("admin")){
      localStorage.setItem("admin", JSON.stringify(admin));
    }
  } 

 const getLocalStorage = ()=>{
     const employees = JSON.parse(localStorage.getItem("employee")) || []
     const admin = JSON.parse(localStorage.getItem("admin")) || []
     
     return {employees,admin}
  }

  export {getLocalStorage,setLocalStorage}
  
