const tasks = [
  {
    id: "TSW_1000",
    title: "Design and Implementation of landing page",
    flag: "F",
    owner: {
      id: "EMP_10013",
      firstName: "Reza",
      lastName: "Mazaheri",
      personnelCode: "99001088",
      position: "Frontend",
    },
  },
  {
    id: "TSW_1001",
    title: "Online shop, admin panel",
    flag: "F",
    owner: {
      id: "EMP_10013",
      firstName: "Reza",
      lastName: "Mazaheri",
      personnelCode: "99001088",
      position: "Frontend",
    },
  },
  {
    id: "TSW_1002",
    title: "Online shop, admin panel",
    flag: "B",
    owner: {
      id: "EMP_10008",
      firstName: "Yousef",
      lastName: "Amini",
      personnelCode: "98008810",
      position: "Backend",
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
        title: "Design and Implementation of landing page",
        flag: "F",
      },
      {
        id: "TSW-1001",
        title: "Online shop, admin panel",
        flag: "F",
      },
    ],
  },
  {
    id: "EMP_10008",
    firstName: "Yousef",
    lastName: "Amini",
    personnelCode: "98008810",
    position: "Backend",
    tasks: [
      {
        id: "TSW-1002",
        title: "Online shop, admin panel",
        flag: "B",
      },
    ],
  },
];

const tasksTitle = prompt("Title of new task: ");
// ID of Task's Owner
const IDOftasksOwner = prompt("Owner's ID of new task: ");

const getFlag = (position = "Frontend") => {
  switch (position) {
    case "Frontend":
      return "F";
    case "Backend":
      return "B";
    case "UI/UX":
      return "UI/UX";
    case "Test":
      return "T";
    default:
      return "Unknown";
  }
};

const EMPLOYEE_ID = "EMP_";
const TASK_ID = "TSW_";

const emp = employees.find((employee) => employee.id === IDOftasksOwner);

if (emp) {
  const { tasks: employeesTasks, ...rest } = emp;

  const TASK_POSTFIX = tasks.length + 1000;

  const flag = getFlag(emp.position);

  const task = {
    id: `${TASK_ID}${TASK_POSTFIX}`,
    // Task's Title
    title: tasksTitle,
    flag,
  };

  emp.tasks.push({ ...task });
  tasks.push({ ...task, owner: { ...rest } });
} else {
  alert("Employee didn't find!");
}

console.log(tasks);
console.log(employees);
