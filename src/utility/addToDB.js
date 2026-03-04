import Swal from "sweetalert2";

const getStoredCart = () => {
    const storedCartSTR = localStorage.getItem("cartList");

    if (storedCartSTR) {
        const storedCartData = JSON.parse(storedCartSTR);
        return storedCartData;
    }
    else {
        return [];
    }
}

// const addToStoredDB = (product) => {

//     const storedCartData = getStoredCart();

//     const existingPrduct = storedCartData.find(item => item._id === product._id)

//     if (existingPrduct) {
//         existingPrduct.quantity += product.quantity;
//         console.log("hello")
//         alert("bhai ei id already exist ")
//     }
//     else {
//         storedCartData.push(product);
//         const data = JSON.stringify(storedCartData);
//         localStorage.setItem("cartList",data)

//     }

// }

const addToStoredCart = (id) => {

    const storedCartData = getStoredCart();

    if (storedCartData.includes(id)) {
        console.log("hello")


        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Product already in cart!",
        });;
    }
    else {
        storedCartData.push(id);
        const data = JSON.stringify(storedCartData);
        localStorage.setItem("cartList", data)

    }

}

export { addToStoredCart, getStoredCart };