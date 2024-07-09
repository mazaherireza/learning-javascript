const user = {
  username: "rezamazaheri",
  firstName: "Reza",
  lastName: "Mazaheri",
};

const INTERVAL = 2_000;

const isLogin = ({ username }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Do Something
      if (username.startsWith("r")) resolve(true);
      else reject(false);
    }, INTERVAL);
  });
};

const getCourses = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Do Something
      console.log(`Username is: ${username}.`);
      resolve(["Introduction to JavaSciprt", "Introduction to Python"]);
    }, INTERVAL);
  });
};

const getCourseInfo = (title) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Do Something
      console.log(`Title is: ${title}`);
      resolve({
        title,
        duration: "8h 45m",
        instructor: "Ramtin Khosravi",
      });
    }, INTERVAL);
  });
};

async function execute() {
  const flag = await isLogin(user);
  if (flag) {
    const courses = await getCourses(user.username);
    const course = await getCourseInfo(courses[0]);
    console.log(course);
  }
}
execute();
