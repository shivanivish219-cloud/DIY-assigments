function sampleOne() {
  console.log("firstAnswer this :", this);
}
const sampleTwo = () => {
  console.log("secondAnswer this:", this);
};
// normal call
sampleOne();
sampleTwo();

sampleOne.call({ name: "tarun", city: "bhopal" });
sampleTwo.call({ name: "tarun", city: "bhopal" });

// apply
sampleOne.apply({ name: "riya", city: "indore" });
sampleTwo.apply({ name: "riya", city: "indore" });

// bind
const bindNormal = sampleOne.bind({
  name: "mahek",
  city: "mumbai",
  age: "25yr",
});
const bindArrow = sampleTwo.bind({
  name: "Tarun",
  city: "Bhopal",
  age: "35yr",
});

bindNormal();
bindArrow();
