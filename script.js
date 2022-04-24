console.log("running")
document.querySelector('.close').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if( document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.open').style.display = 'inline';  
        document.querySelector('.close').style.display = 'none';  
    }
    else{
        document.querySelector('.open').style.display = 'none'; 
        setTimeout(()=>{
            document.querySelector('.close').style.display = 'inline';  
        },400)
    }
})
