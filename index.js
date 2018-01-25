var recipes = {breakfast: 'oatmeal'};

function updateObjectWithKeyAndValue(object, key, value){
;
var obj= {key:'value'};

var newObj = Object.assign({}, object, { [key]: value });
   return newObj ;
}



function deleteFromObjectByKey(object, key) {
var obj= {key:'value'};
  var newObj = Object.assign([], obj);
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
