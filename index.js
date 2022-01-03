function newImage(image,left,bottom){
    let img = document.createElement('img')
   img.src = 'assets/' + image
   img.style.position = 'fixed'
   img.style.left = left
   img.style.bottom = bottom
   document.body.append(img)
   img.addEventListener('dblclick', function(){
    img.remove()
})
}
newImage('green-character.gif','100px','100px')
newImage('pine-tree.png', '450px','200px')
newImage('tree.png','200px','300px')
newImage('pillar.png','350px','100px')
newImage('crate.png','150px','200px')
newImage('well.png','500px','425px')
newImage('sword.png','500px','405px') 
newImage('shield.png','165px','185px')
newImage('staff.png','600px','100px')

document.body.style.backgroundImage = "url('assets/grass.png')";

