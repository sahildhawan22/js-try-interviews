let apiData = [
  {
    animal: "7:Oliver",
    type: "cat:grey",
  },
  {
    animal: "2:Leo",
    type: "cat:black",
  },
  {
    animal: "8:Milo",
    type: "cat:black",
  },
  {
    animal: "3:Charlie",
    type: "cat:orange",
  },
  {
    animal: "9:Max",
    type: "cat:white",
  },
  {
    animal: "1:Jack",
    type: "cat:grey",
  },
  {
    animal: "4:Simba",
    type: "cat:white",
  },
  {
    animal: "6:Loki",
    type: "cat:white",
  },
  {
    animal: "11:Buddy",
    type: "bird:yellow",
  },
  {
    animal: "5:Charlie",
    type: "bird:yellow",
  },
  {
    animal: "13:Sunshine",
    type: "bird:red",
  },
  {
    animal: "10:Angel",
    type: "bird:red",
  },
  {
    animal: "12:Tiki",
    type: "bird:red",
  },
];

let newApi = apiData.map((item) => {
  let obj = {};
  let animalArr = item.animal.split(":");
  let id = animalArr[0];
  let name = animalArr[1];
  let typeArr = item.type.split(":");
  let animalType = typeArr[0];
  let color = typeArr[1];
  obj.id = id;
  obj.name = name;
  obj.animalType = animalType;
  obj.color = color;
  return obj;
});

//console.log(newApi);

let catGroup = newApi.filter((item) => item.animalType === "cat");
let birdGroup = newApi.filter((item) => item.animalType === "bird");

let sortedArr = [...catGroup, ...birdGroup];

for (let i = 0; i < sortedArr.length; i++) {
  for (let j = i + 1; j < sortedArr.length; j++) {
    if (parseInt(sortedArr[j].id) < parseInt(sortedArr[i].id)) {
      let t = {};
      t = sortedArr[i];
      sortedArr[i] = sortedArr[j];
      sortedArr[j] = t;
    }
  }
}

console.log(sortedArr);
