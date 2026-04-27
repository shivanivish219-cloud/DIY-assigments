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
    }, 1500);
  });
};

const p3 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reject({ message: "p3 is cancel" });
    }, 2000);
  });
};

const p4 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "p4 is success" });
    }, 4000);
  });
};

// sbse phle result ana bhale hi success ho ya fail

Promise.race([p1(), p2(), p3(), p4()])
  .then((data) => {
    console.log("data:", data);
  })
  .catch((err) => {
    console.log("error:", err);
  });
