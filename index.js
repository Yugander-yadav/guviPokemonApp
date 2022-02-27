container=document.querySelector(".container")
movess="Moves: "
abilities="Abilities: "
weight=""
pokemonData=[]
async function  getData(){
 
 await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
.then((response)=>response.json())
.then((data)=>{
    for (let a of data.results){
        pokemonData.push(a)
    }
    return pokemonData
})
.then((data)=>{
    pcp=""
    var urls=[]
    for (let a of data){
     urls.push(a.url) 
    }
    return urls

})
.then(async (u)=>{
    pok=[]
    for (let s of u){
    await fetch(s).then((response)=> response.json())
     .then((data)=>{
        let a={
            "name":data.name,
            abilities:data.abilities,
            moves:data.moves,
            weight:data.weight
        }
         pok.push(a)
     })
    
    }
  
  return pok 
}).then(async (zz)=>{
    samList=[]
    for (let list of zz ){
        names="Name: "
        abilitiesz="Abilities: "
        movez="Moves: "
        names+=list.name

        for (let ab of list.abilities){
            abilitiesz+=`${ab.ability.name},`
        }
     
        
        for (let ab of list.moves){
            movez+=`${ab.move.name},`

        }
      
         samList.push({
            "name":names,
            "weight":list.weight,
            "abilities":abilitiesz,
            "moves":movez
            
        })
    
    }
    console.log(samList)
    for (let a of samList){
        container.innerHTML+=`<div class="PokemonContainer">
        <h3 class="name">${(a.name).toUpperCase()}</h3>
        <p class="weight">Weight:${a.weight}</p>
        <p class="ability">${a.abilities} </p>
        <p class="move">${a.moves} </p>

        
        </div>`
    }

})




}
 getData()

function createDom(m,a,w){

}