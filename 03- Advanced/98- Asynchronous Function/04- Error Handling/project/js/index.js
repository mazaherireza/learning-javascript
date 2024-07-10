import { user } from "./user.js";

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
  try {
    await isLogin(user);
    const courses = await getCourses(user.username);
    const course = await getCourseInfo(courses[0]);
    console.log(
      `Information of course "${course.title}": Instructor: ${course.instructor}, Duration: ${course.duration}`
    );
  } catch (error) {
    console.error(error);
  }
}
execute();
