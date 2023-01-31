const search = ()=>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const product = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("h2");

    for(var i = 0; i<pname.length; i++) {
        let eachProduct = product[i].getElementsByTagName("h2")[0];
        
        if(eachProduct) {
            let textValue = eachProduct.innerHTML.toUpperCase();
            
            if(textValue.indexOf(searchBox)>-1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";

            }
        }
    }
}