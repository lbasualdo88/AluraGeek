const input = document.getElementById("input-busqueda")
const lupa = document.getElementById("img-lupa")
    lupa.addEventListener('click', ()=>{
        const name = input.value.toUpperCase();
window.location.href = `/productoDescrip.html?name=${name}`; 
})
