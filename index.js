var recipes = {breakfast: 'oatmeal'};

function updateObjectWithKeyAndValue(object, key, value){
;
object[key] = value;
Object.assign({}, object, { [key]: value });
   return object ;
}



function deleteFromObjectByKey(object, key) {
var obj= {key:'value'};
  var newObj = Object.assign([], obj);
  delete newObj.key;
  return newObj;
}
