

let link = document.getElementById('wcc')
let boton = document.getElementById('btn');
// let attri = getAttributesNames(link);

boton.addEventListener('click', getAttributes );
function getAttributes(){
    let arr = [];
    arr.push(link.getAttribute("href"));
    arr.push(link.getAttribute("hreflang"));
    arr.push(link.getAttribute("rel"));
    arr.push(link.getAttribute("target"));
    arr.push(link.getAttribute("type"));
alert(arr);
}