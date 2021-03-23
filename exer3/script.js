
document.getElementById('submit').addEventListener('click',function volumeOfSphere(){
    let Radius = parseFloat(document.getElementById('radius').value);
    document.getElementById('volume').value = (4/3) * Math.PI * Math.pow(Radius, 3);
})