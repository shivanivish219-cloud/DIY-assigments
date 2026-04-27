const p1 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "p1 is successful" });
    }, 2000);
  });
};
const p2 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reject({ message: "p2 is unsuccessful" });
    }, 2000);
  });
};
const p3 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "p3 is successful" });
    }, 2000);
  });
};

// use .then & .catch and also define promise(p)
const p = Promise.allSettled([p1(), p2(), p3()]);
p.then((data) => {
  console.log("data:", data);
});
p.catch((err) => {
  console.log("error:", err);
});
