const p1 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reject({ message: "p1 is cancel" });
    }, 2000);
  });
};
const p2 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "p2 is sucess" });
    }, 3000);
  });
};
const p3 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "p3 is ok" });
    }, 3000);
  });
};
const p4 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reject({ message: "p4 is cancel" });
    }, 3000);
  });
};

Promise.any([p1(), p2(), p3(), p4()])
  .then((data) => {
    console.log("data:", data);
  })
  .catch((err) => {
    console.log("error:", err);
  });
