var recipes = {breakfast: 'oatmeal'};

function updateObjectWithKeyAndValue(object, key, value){
;
object[key] = value;
   return Object.assign({}, object, { [key]: value }) ;


}
