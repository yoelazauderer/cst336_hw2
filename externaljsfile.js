// JavaScript File
//<script>
        /* global $ */
        
        $(document).ready(function() {
                
                //Global variables
                var subtotal = 0.00; 
                var tax = subtotal * 0.0725;
                var shipping = (subtotal > 99) || (subtotal <= 0) ? 0.00:6.95;
                var total = subtotal + tax + shipping;
                
                var cartArray = [];
                
                function addToCart() {
                    //code
                }
                function removeFromCart() {
                    //code
                }
                
                // $("#item1Buy").on("click", function() {
                //     var quantity = $("#item1Qty").val();
                //     addItem("Shoes", 1, quantity);
                // })
                
                $("#subtotal").html(`Subtotal: $${subtotal}`);
                $("#tax").html(`Tax: $${tax}`);
                $("#shipping").html(`Shipping: $${shipping}`);
                $("#total").html(`Total: $${total}`);
                
                const product1 = {
                    //quantity: document.getElementById("quantity1").value,
                    price: 79.00,
                };
                
                $("#b1").on("click", function() {
                    var temp = ("#b1").val();
                    subtotal += product1.price * temp;
                    $("#subtotal").html(`Subtotal: $${subtotal}`);
                    
                })
                
                // function updateVal(){
                //     var input = document.getElementById("quantity1").value;
                //     //var temp = product1.price * input;
                //     //subtotal = subtotal + product1.price;
                //     subtotal = subtotal + input;
                //     $("#subtotal").html(`Subtotal: $${subtotal}`);
                // }
  
           })//ready
    
//</script>