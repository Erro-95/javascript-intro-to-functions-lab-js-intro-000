function shout(arg){
  return arg.toUpperCase()
}



function whisper(arg){
  return arg.toLowerCase()
}

function logShout(arg){
  console.log(arg.toUppercase())
}

function logWhisper(arg){
  console.log(arg.toLowerCase())
}

function sayHiToGrandma(arg){
  if (arg === arg.toLowerCase()){
    return "I can't hear you!"
  }
  else if (arg === arg.toUpperCase()){
    return "YES INDEED!"
  }
  else if (arg === "I love you, Grandma."){
    return "I love you, too."
  }
}

// returns "I can't hear you!" if `string` is lowercase
//     6) returns "YES INDEED!" if `string` is uppercase
//     7) returns "I love you, too." if `string` is "I love you, Grandma."`
