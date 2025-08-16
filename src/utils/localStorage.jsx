 const employees =  [
    {
      "id": 101,
      "name":"Ayushi",
      "email": "rahul.mehta@company.com",
      "password": "123",
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
          "tastTitle":"Login Page",
          "taskCategry":"Development"
        },
        {
          "active": false,
          "completed": true,
          "taskDescription": "Fix API response delay issue",
          "taskDate": "2025-08-08",
          "tastTitle":"Fix API",
          "taskCategry":"Development",
          "failed": false,
          "newTask": false
        }
      ]
    },
    {
      "id": 102,
      "name":"Laxmi",
      "email": "ananya.gupta@company.com",
      "password": "123",
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
          "tastTitle":"Design UI",
          "taskCategry":"Design",
          "failed": false,
          "newTasks": true
        },
        {
          "active": false,
          "completed": true,
          "taskDescription": "Update color palette for mobile app",
          "taskDate": "2025-08-09",
          "tastTitle":"Update Color",
          "taskCategry":"Mobile Development",
          "failed": false,
          "newTasks": false
        }
      ]
    },
    {
      "id": 103,
      "name":"Sulekha",
      "email": "karan.singh@company.com",
      "password": "123",
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
          "tastTitle":"Test Case",
          "taskCategry":"DSA",
          "failed": false,
          "newTasks": true
        },
        {
          "active": false,
          "completed": false,
          "taskDescription": "Test payment gateway integration",
          "taskDate": "2025-08-07",
          "tastTitle":"Payment test",
          "taskCategry":"Development",
          "failed": true,
          "newTasks": false
        }
      ]
    },
    {
      "id": 104,
      "name":"Pragti",
      "email": "sneha.verma@company.com",
      "password": "123",
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
          "tastTitle":"Conduct Seddion",
          "taskCategry":"Development",
          "failed": false,
          "newTasks": false
        },
        {
          "active": true,
          "completed": false,
          "taskDescription": "Update HR policies document",
          "taskDate": "2025-08-12",
          "tastTitle":"Policies",
          "taskCategry":"Development",
          "failed": false,
          "newTasks": true
        }
      ]
    },
    {
      "id": 105,
      "name":"Saumya",
      "email": "amit.kumar@company.com",
      "password": "123",
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
          "tastTitle":"Login Page",
          "taskCategry":"Development",
          "failed": false,
          "newTasks": true
        },
        {
          "active": false,
          "completed": true,
          "taskDescription": "Post product updates on social media",
          "taskDate": "2025-08-09",
          "tastTitle":"Login Page",
          "taskCategry":"Development",
          "failed": false,
          "newTasks": false
        }
      ]
    }
  ]

   const admin = [{
    "id": 1,
    "email": "admin@company.com",
    "password": "123",
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
  
