window.addEventListener("load",()=>{
    preloader.style.display="none";
  
  });



  
button.addEventListener("click",()=>{
    button.classList.add("m3p");
    button.innerText="Converted";
    const input1=document.getElementById("input").value;
    const improved=input1.slice(17,);
    console.log(improved);
    link.src=`https://api.vevioz.com/api/widget/mp3/${improved}`

})