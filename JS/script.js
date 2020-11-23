
function nav() {
    content1.style.display = "none";
    content2.style.display = "flex";
    document.getElementById('navicon').style.display = 'none'
    document.getElementById('close').style.display = 'block'
}
function closenav() {
    console.log('iyyi')
    content1.style.display = "block";
    content2.style.display = "none";
    document.getElementById('close').style.display = 'none';
    document.getElementById('navicon').style.display = 'block'
}