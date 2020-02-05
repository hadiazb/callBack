const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts =  { crossDomain:  true }

function obtenerPersonaje(id){
  return new Promise( (resolve, reject) =>{
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $
    .get(url, opts, function (data) {
      resolve(data)
    })
    .fail(() => reject(id))
  })
}

function onError(id){
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}


// var promesas = ids.map(function(id){
//   return obtenerPersonaje(id)
// })

async function obtenerPersonajes(){
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try{
    var person = await Promise.all(promesas) 
    console.log(person)
  } catch (id){
    onError(id)
  }

}

obtenerPersonajes()

// obtenerPersonaje(1)
//   .then(person =>{
//     console.log(`El personaje 1 es ${person.name}`);
//     return obtenerPersonaje(2)
//   })
//   .then(person =>{
//     console.log(`El personaje 2 es ${person.name}`);
//     return obtenerPersonaje(3)
//   })
//   .then(person =>{
//     console.log(`El personaje 3 es ${person.name}`);
//     return obtenerPersonaje(4)
//   })
//   .then(person =>{
//     console.log(`El personaje 4 es ${person.name}`);
//     return obtenerPersonaje(5)
//   })
//   .catch(onError)

obtenerPersonaje(1, function (person){
  console.log(`Hola yo soy el temible ${person.name} y mido ${person.height} metros`);
})
