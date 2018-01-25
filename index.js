var recipes = {breakfast: 'oatmeal'};


function updateObjectWithKeyAndValue(object, key, value){
   return object.assign({}, object, { prop2: [value] });
  }



function deleteFromObjectByKey(object, key) {
var obj= {key:'value'};
  var newObj = Object.assign({}, obj,{key});
delete newObj.key;
  return newObj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key]=value;
  return object;
}
function destructivelyDeleteFromObjectByKey (object, key){
  var obj= {key:'value'};
    var newObj = Object.assign({}, obj);

    return newObj;
}
