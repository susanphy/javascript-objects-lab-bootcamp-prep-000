var recipes = {breakfast: 'oatmeal'};

function updateObjectWithKeyAndValue(object, key, value){
;
object[key] = value;
Object.assign({}, object, { [key]: value });
   return object ;
}

updateObjectWithKeyAndValue(object, 'chocolate', '1 cup')
