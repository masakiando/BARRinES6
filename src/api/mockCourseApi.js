import delay from './delay';
//このファイルは、以下のハードコードされたデータを使用してWeb APIをモックします。
// setTimeoutを使用して、AJAX呼び出しの遅延をシミュレートします。
//すべての呼び出しが約束を返します。
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];
// str文字列 find検索値 replace 変更値
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  // course.titleを取り出し' 'がある場合その箇所を'-'に親ます。
  return replaceAll(course.title, ' ', '-');
};
//こうやって書けばcourses取れる！！
class CourseApi {
  static getAllCourses() {
    debugger;
    return new Promise((resolve, reject) => {
      // 指定された遅延の後に、コードの断片または関数を実行します。
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    debugger;
    // courseを複製します。
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      // 指定された遅延の後に、コードの断片または関数を実行します。
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`タイトルには ${minCourseTitleLength} 文字以上の入力が必須です。`);
        }
        // UPDATE courses内からcourse.idと同じidを持つ配列Indexを取得する。
        // spliceでcoursesから上で取得したIndexの配列から１個分削除する。
        // 同じIndex位置にユーザーから届いたcourseを入れる。つまり置換する。
        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          //新規
          //courseにidを追加する。
          //courseにwatchHrefを追加する。
          //coursesにcourseを加える。
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }
        debugger;
        // 結果を返します。
        resolve(course);
        console.log(course);
        // 遅延時間。
      }, delay);
    });
  }
  // deleteしたらcoursesでなくcourseIdを返して
  // クライアント側のデータはreducerでcoursesをフィルターして
  // courseIdを取り除く方が良い。実際のデータベースではその方が良い
  static deleteCourse(courseId) {
    debugger;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => course.id == courseId);
        courses.splice(indexOfCourseToDelete, 1);
        debugger;
        resolve(Object.assign([], courses));
      }, delay);
    });
  }
}

export default CourseApi;
