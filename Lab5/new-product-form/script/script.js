function showLoginFields() {
    console.log("Website URL: " + document.getElementById("website-url").value);
    console.log("Email Id: " + document.getElementById("exampleInputEmail1").value);
    console.log("Password: " + document.getElementById("exampleInputPassword1").value);
    return false;
}

function newProductFields() {
    console.log("test");
    try {
        alert("Product Number: " + document.getElementById("product-number").value +"\n"
        + "Product Name: " + document.getElementById("name").value+"\n"
        +"Unit Price: " + document.getElementById("unit-price").value+"\n"
        + "Quntity in Stock: " + document.getElementById("quntity-in-stock").value+"\n"
        + "Supplier: " + document.getElementById("supplier").value+"\n"
        + "Date Supplied: " + document.getElementById("date-supplied").value);
    } catch (error) {
        alert(error)
    }
     return false;
}