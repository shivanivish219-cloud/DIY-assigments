// How can we kill or complete a promise if it's taking more than expected time

// EXAMPLE OTP

const verifyOTP = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply("OTP verified");
    }, 8000);
  });
};
const killPromise = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reject("timeout OTP expired. try again");
    }, 3000);
  });
};

Promise.race([verifyOTP(), killPromise()])
  .then((data) => {
    console.log("data:", data);
  })
  .catch((kill) => {
    console.log("cancel:", kill);
  });
