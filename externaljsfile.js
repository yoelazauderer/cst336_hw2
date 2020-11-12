// JavaScript File
        
        /* global $ */
        
        $(document).ready(function() {
                
            //Global variables
            var subtotal = 0.00; 
            var tax;
            var shipping;
            var total;
            var prices = [79, 110, 49, 34, 260, 62, 48, 58, 99];
                
            function addToCart(index){
                let qtyResponse = $(`#quantity${index}`).val();
                $(`#p${index}cquantity`).append(qtyResponse);
                let totalprice = prices[`${index-1}`] * qtyResponse;
                $(`#p${index}ctotalprice`).append(totalprice);
                subtotal += prices[`${index-1}`] * qtyResponse;
                tax = subtotal * 0.0725;
                shipping = (subtotal > 99) || (subtotal <= 0) ? 0.00:6.95;
                total = subtotal + tax + shipping;
                $("#subtotal").html(`Subtotal: $${subtotal.toFixed(2)}`);
                $("#tax").html(`Tax: $${tax.toFixed(2)}`);
                $("#shipping").html(`Shipping: $${shipping.toFixed(2)}`);
                $("#total").html(`Total: $${total.toFixed(2)}`);
                $(`#item${index}`).css("display", "block");
            }
            
            function removeFromCart(index){
                let qtyResponse = $(`#quantity${index}`).val();
                subtotal -= prices[`${index-1}`] * qtyResponse;
                tax = subtotal * 0.0725;
                shipping = (subtotal > 99) || (subtotal <= 0) ? 0.00:6.95;
                total = subtotal + tax + shipping;
                $("#subtotal").html(`Subtotal: $${subtotal.toFixed(2)}`);
                $("#tax").html(`Tax: $${tax.toFixed(2)}`);
                $("#shipping").html(`Shipping: $${shipping.toFixed(2)}`);
                $("#total").html(`Total: $${total.toFixed(2)}`);
                $(`#item${index}`).css("display", "none");
            }
                    
            
            // Add item 1 to cart
            $("#btn1").on("click", function() {
                addToCart(1);
            });
                
            // Add item 2 to cart
            $("#btn2").on("click", function() {
                addToCart(2);
            });
            
            // Add item 3 to cart
            $("#btn3").on("click", function() {
                addToCart(3);
            });
            
            // Add item 4 to cart
            $("#btn4").on("click", function() {
                addToCart(4);
            });
            
            // Add item 5 to cart
            $("#btn5").on("click", function() {
                addToCart(5);
            });
            
            // Add item 6 to cart
            $("#btn6").on("click", function() {
                addToCart(6);
            });
            
            // Add item 7 to cart
            $("#btn7").on("click", function() {
                addToCart(7);
            });
            
            // Add item 8 to cart
            $("#btn8").on("click", function() {
                addToCart(8);
            });
            
            // Add item 9 to cart
            $("#btn9").on("click", function() {
                addToCart(9);
            });
                
            // Remove item 1 from cart
            $("#remove1").on("click", function() {
                removeFromCart(1);
            });
                
            // Remove item 2 from cart
            $("#remove2").on("click", function() {
                removeFromCart(2);
            });
            
            // Remove item 3 from cart
            $("#remove3").on("click", function() {
                removeFromCart(3);
            });
            
            // Remove item 4 from cart
            $("#remove4").on("click", function() {
                removeFromCart(4);
            });
            
            // Remove item 5 from cart
            $("#remove5").on("click", function() {
                removeFromCart(5);
            });
            
            // Remove item 6 from cart
            $("#remove6").on("click", function() {
                removeFromCart(6);
            });
            
            // Remove item 7 from cart
            $("#remove7").on("click", function() {
                removeFromCart(7);
            });
            
            // Remove item 8 from cart
            $("#remove8").on("click", function() {
                removeFromCart(8);
            });
            
            // Remove item 9 from cart
            $("#remove9").on("click", function() {
                removeFromCart(9);
            });
            
            //Add Promo Code
            $("#btnpromo").on("click", function() {
                let promostring = $("#promo").val().toUpperCase();
                if (promostring == "BLACKFRIDAY") {
                    subtotal = subtotal * 0.75;
                    tax = subtotal * 0.0725;
                    shipping = (subtotal > 99) || (subtotal <= 0) ? 0.00:6.95;
                    total = subtotal + tax + shipping;
                    $("#subtotal").html(`Subtotal: $${subtotal.toFixed(2)}`);
                    $("#tax").html(`Tax: $${tax.toFixed(2)}`);
                    $("#shipping").html(`Shipping: $${shipping.toFixed(2)}`);
                    $("#total").html(`Total: $${total.toFixed(2)}`);
                    document.getElementById("btnpromo").disabled = true;
                }
            });
                
        })//ready