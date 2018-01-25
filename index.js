var recipes = {breakfast: 'oatmeal'};

function updateObjectWithKeyAndValue(object, key, value){
;
object[key] = value;
Object.assign({}, object, { [key]: value });
   return object ;
}



function deleteFromObjectByKey(object, key) {
var obj= {foo:'bar'};
  var newObj = Object.assign([], obj);
  newObj;
  delete newObj.foo;
  return Obj
}
