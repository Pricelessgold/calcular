var newOperation = 0

function getNumbers(x){
 if (newOperation == 0){
 var existingNumber =  document.getElementById("answer").innerHTML
 var values = existingNumber + x
 document.getElementById("answer").innerHTML = values
 }
 else {
  document.getElementById("answer").innerHTML = x
  newOperation = 0
 }

 validate();
 
}

function allClear(){
 
  document.getElementById("answer").innerHTML = ""
  document.getElementById("record").innerHTML = ""
}
function operation(y){
  var existingNumber = document.getElementById("answer").innerHTML
  var values = existingNumber + y
  document.getElementById("answer").innerHTML = values

}
function calculate(){
  //var values = retrieve existing value in answer
  var values = document.getElementById("answer").innerHTML 
  document.getElementById("record").innerHTML =  values +" = " + eval(values)
 var result = eval(values)
document.getElementById("answer").innerHTML = result
newOperation = 1
}

function sqrt(){
  var existingNumber = document.getElementById("answer").innerHTML
  var sqrt= Math.sqrt(existingNumber)
  document.getElementById("answer").innerHTML = sqrt
 
}

function backspace(){
  var values =document.getElementById("answer").innerHTML
var clear = values.slice(0, -1)
document.getElementById("answer").innerHTML = clear
}

function validate(){
  var existingNumber = document.getElementById("answer").innerHTML
 lastCharacter =  existingNumber.charAt(existingNumber.length-1);
if(lastCharacter=="."){
    
    document.getElementById("dot").disabled = true
  }
  else{
    document.getElementById("dot").disabled = false
  }

  if((lastCharacter == '+') || (lastCharacter=='-') || (lastCharacter==  '*') || (lastCharacter== '/')){
 
    document.getElementById('multiply').disabled = true
      document.getElementById('divide').disabled = true
      document.getElementById('minus').disabled = true
      document.getElementById('plus').disabled = true
    }
    else{
      document.getElementById('multiply').disabled = false
      document.getElementById('divide').disabled = false
      document.getElementById('minus').disabled = false
      document.getElementById('plus').disabled = false
     }

    
     
}
   /*function decimal(){
  var existingNumber = document.getElementById("answer").innerHTML
  lastCharacter =  existingNumber.charAt(existingNumber.length-1);
    
     if(lastCharacter=="+"){  
      var dot = existingNumber + 0. 
      var dot = document.getElementById("dot").innerHTML 
      document.getElementById("answer").innerHTML= existingNumber + dot


    }
    else{
      document.getElementById("dot").disabled = false
    }
  }*/