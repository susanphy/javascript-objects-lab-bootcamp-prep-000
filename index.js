var recipes = {breakfast: 'oatmeal'};

function updateObjectWithKeyAndValue(object, key, value){
;
object[key] = value;
   return object.assign({},updateObjectWithKeyAndValue,{key:value}) ;

}
