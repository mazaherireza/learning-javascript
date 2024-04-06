const tasks = [
  {
    id: "TSW_1000",
    title: "Design and Implementation of landing page",
    owner: {
      id: "EMP_10013",
      firstName: "Reza",
      lastName: "Mazaheri",
      personnelCode: "99001088",
      position: "Frontend",
    },
  },
];

const employees = [
  {
    id: "EMP_10013",
    firstName: "Reza",
    lastName: "Mazaheri",
    personnelCode: "99001088",
    position: "Frontend",
    tasks: [
      {
        id: "TSW_1000",
        title: "Online shop, admin panel",
      },
    ],
  },
  {
    id: "EMP_10008",
    firstName: "Yousef",
    lastName: "Amini",
    personnelCode: "98008810",
    position: "Backend",
    tasks: []
  },
];

const tasksTitle = prompt("Title of new task: ");
const IDOftasksOwner = prompt("Owner's ID of new task: ");

const EMPLOYEE_ID = "EMP_100";
const TASK_ID = "TSW_100";

const emp = employees.find((employee) => employee.id === IDOftasksOwner);
if (emp) {
  // Is found
  const { tasks: localTasks, ...rest } = emp;
  const task = {
    id: `${TASK_ID}${tasks.length}`,
    title: tasksTitle,
  };
  emp.tasks.push({ ...task });
  tasks.push({ ...task, owner: { ...rest } });
} else {
  alert("Employee didn't find!");
}

console.log(tasks);
console.log(employees);
