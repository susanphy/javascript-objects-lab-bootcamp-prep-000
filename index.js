var recipes = {breakfast: 'oatmeal'};

function updateObjectWithKeyAndValue(object, key, value){
;
object[key] = value;
Object.assign({}, object, { [key]: value });
updateObjectWithKeyAndValue(object, 'chocolate', '1 cup')
   return object ;


}

