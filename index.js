var recipes = {breakfast: 'oatmeal'};

function updateObjectWithKeyAndValue(object, key, value){
object.assign({},updateObjectWithKeyAndValue,{key:value});
object[key] = value;
   return object ;

}
