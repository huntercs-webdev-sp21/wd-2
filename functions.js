// forEach

Array.prototype.myEach = function(callback) {
   for(let i = 0; i < this.length; i++){
    callback(this[i]);
   }
  return;
};

let a = [1,2,3,4,5];
console.log("myEach");
a.myEach(b=>console.log(b*2));
console.log()

// Map

Array.prototype.myMap = function(callback) {
  let ret = [];
  for(let i = 0; i < this.length; i++){
    ret[i] = callback(this[i]);
  }
  return ret;
};

console.log("myMap");
let aMap = a.myMap((b)=>b * 2);
console.log(aMap);
console.log()

// Filter

Array.prototype.myFilter = function(callback) {
   let ret = [];
  for(let i = 0; i < this.length; i++){
    if(callback(this[i])) ret.push(this[i]);
  }
  return ret;
};

console.log("Filter a < 3");
let aFil = a.myFilter((b)=>b < 3);
console.log(aFil);
console.log()

// Some (Any)

Array.prototype.mySome = function(callback) {
  for(let i = 0; i < this.length; i++){
    if(callback(this[i])) return true;
  }
  return false;
};


console.log("Some a < 5");
console.log(a.mySome((b)=>   b < 5));
console.log("Some a > 5");
console.log(a.mySome((b)=>   b > 5));
console.log()

// Every

Array.prototype.myEvery = function(callback) {
  for(let i = 0; i < this.length; i++){
    if(!callback(this[i])) return false;
  }
  return true;
};

console.log("Every a < 5");
console.log(a.myEvery((b)=>   b < 5));
console.log("Every a > 5");
console.log(a.myEvery((b)=>   b > 5));
console.log("Every a < 6");
console.log(a.myEvery((b)=>   b < 6));
console.log()

// Reduce

Array.prototype.myReduce = function(callback) {
  let accum = this[0];
  for(let i = 1; i < this.length; i++){
    accum = callback(accum,this[i]);
  }
  return accum;
};

console.log("Reduce");
console.log(a.myReduce((accum, b) => accum + b));
console.log()

// Includes

Array.prototype.myIncludes = function(item, fromIndex=0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] == item) {
      return true;
    }
  }
  return false;
}

console.log("Includes")
console.log(a.myIncludes(1))    // true
console.log(a.myIncludes(-1))   // false
console.log(a.myIncludes(1, 1)) // false
console.log()

// indexOf

Array.prototype.myIndexOf = function(item, fromIndex=0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] == item) {
      return i;
    }
  }
  return -1;
}

console.log("IndexOf")
console.log(a.myIndexOf(3))    // 2
console.log(a.myIndexOf(-1))   // -1
console.log(a.myIndexOf(1, 1)) // -1
console.log()

// Push

Array.prototype.myPush = function(...items) {
  for (let i = 0; i < items.length; i++) {
    this[this.length] = items[i];
  }
}

console.log("Push")
let b = [];
console.log(b) // []
b.myPush(1) 
console.log(b) // [1]
b.myPush(2, 3) 
console.log(b) // [1, 2, 3]
console.log()

// lastIndexOf

Array.prototype.myLastIndexOf = function(item, fromIndex=this.length-1) {
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] == item) {
      return i;
    }
  }
  return -1;
}

console.log("lastIndexOf")
console.log(a.myLastIndexOf(1))    // 0
console.log(a.myLastIndexOf(6))    // -1
console.log(a.myLastIndexOf(5, 3)) // -1
console.log()

// Object.keys()

Object.prototype.grabKeys = function() {
  const keys = [];
  for (let key in this) {
    keys.push(key);
  }
  return keys;
}

console.log("Object.keys")
const obj = {
  "a": 1,
  "b": 2,
  "c": 3
}
console.log(obj.grabKeys()) // ['a','b','c', 'grabKeys']
console.log()

// Object.values()

Object.prototype.grabValues = function() {
  const values = [];
  for (let key in this) {
    values.push(this[key]);
  }
  return values;
}

console.log("Object.values")
console.log(obj.grabValues()) // [1,2,3, Function, Function]
