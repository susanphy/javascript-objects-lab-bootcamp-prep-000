var recipes = {breakfast: 'oatmeal'};

function updateObjectWithKeyAndValue(object, key, value){
;
object[key] = value;
var newObj = Object.assign({}, object, { [key]: value });
   return newObj ;
}



function deleteFromObjectByKey(object, key) {
var obj= {key:'value'};
  var newObj = Object.assign([], obj);
  delete newObj.key;
  return newObj;
}
