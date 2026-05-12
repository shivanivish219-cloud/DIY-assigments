const p1 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "p1 is success" });
    }, 3000);
  });
};

const p2 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "p2 is success" });
    }, 5000);
  });
};

const p3 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reject({ message: "p3 is cancel" });
    }, 3000);
  });
};

const p4 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "p4 is success" });
    }, 5000);
  });
};
const p5 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "p5 is success" });
    });
  });
};

// using .then & .catch

Promise.all([p1(), p2(), p3(), p4(), p5()])
  .then((data) => {
    console.log("data:", data);
  })
  .catch((err) => {
    console.log("error:", err);
  });

//   promise with all sucess data works
Promise.all([p1(), p2(), p4(), p5()])
  .then((data) => {
    console.log("data:", data);
  })
  .catch((err) => {
    console.log("error:", err);
  });
