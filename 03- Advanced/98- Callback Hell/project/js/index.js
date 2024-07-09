const user = {
  username: "rezamazaheri",
  firstName: "Reza",
  lastName: "Mazaheri",
};

const INTERVAL = 1_000;

const isLogin = ({ username }, callback) => {
  setTimeout(() => {
    // Do Something
    if (username.startsWith("r")) {
      callback(true);
      return true;
    }
    callback(false);
    return false;
  }, INTERVAL);
};

const getCourses = (username, callback) => {
  setTimeout(() => {
    // Do Something
    console.log(`Username is: ${username}.`);
    callback(["Introduction to JavaSciprt", "Introduction to Python"]);
  }, INTERVAL);
};

const getCourseInfo = (title, callback) => {
  setTimeout(() => {
    // Do Something
    console.log(`Title is: ${title}`);
    callback({
      title,
      duration: "8h 45m",
      instructor: "Ramtin Khosravi",
    });
  }, INTERVAL);
};

isLogin(user, (result) => {
  console.log(result);
  getCourses(user.username, (coursers) => {
    console.log(`username course(s): ${coursers}`);
    getCourseInfo(coursers[0], (information) => {
      console.log(
        `Information of course ${coursers[0]}: ${information.instructor}, ${information.duration}`
      );
    });
  });
});
