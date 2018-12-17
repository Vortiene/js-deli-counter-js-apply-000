var katzDeliLine = [];

 let i = 0
function takeANumber(){
 i++
  return i
}
function nowServing(katzDeliLine){
if (katzDeliLine.length>0) {
  return "Currently serving "+katzDeliLine.shift()+"."
} 
else {
  return "There is nobody waiting to be served!"}
}
var lineList = "The line is currently: "
<<<<<<< HEAD
function currentLine(line){
  if (line.length>0){
    let i = 0; while (i < line.length){
      lineList = lineList+(i+1)+". "+line[i]
       if (i < line.length-1){lineList = lineList+", "}
      i++
   }
=======
function currentLine(KatzDelilineatzDeliLine){
  if (KatzDeliline.length>0){
    let i = 0; while (i < KatzDeliline.length){
      lineList = lineList+(i+1)+". "+KatzDeliline[i]
    i++}
>>>>>>> 2e9640e330a8ee04e6fb0d64ebf9f10147624614
    return lineList
  }
  else return "The line is currently empty."
}