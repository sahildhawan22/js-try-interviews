function inventoryList() {
  // write your code here
  this.items = [];
  this.add = function (name) {
    if (!this.items.includes(name)) {
      this.items.push(name);
    }
  };
  this.remove = function (name) {
    if (this.items.includes(name)) {
      this.items = this.items.filter((item) => item !== name);
    }
  };

  this.getList = function () {
    return this.items;
  };
}

//let inventory = new inventoryList();
inventory.add("Shirt");
inventory.add("Trouser");
console.log(inventory.getList());
inventory.remove("Shirt");
console.log(inventory.getList());
