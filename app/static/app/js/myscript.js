$('.plus-cart').click(function(){
    var id=$(this).attr("pid").toString(); 
    var eml = this.parentNode.children[2] 
    console.log("pid =",id) 
    $.ajax({
        type: "GET",
        url:"/pluscart",
        data:{
            prod_id:id
        },
        success:function(data){
            console.log("data = ",data);
            eml.innerText=data.quantity
            document.getElementById("amount").innerText=data.amount
            document.getElementById("totalamount").innerText=data.totalamount
        }
    })
})


$('.minus-cart').click(function(){
    var id=$(this).attr("pid").toString(); 
    var eml = this.parentNode.children[2] 
    console.log("pid =",id) 
    $.ajax({
        type: "GET",
        url:"/minuscart",
        data:{
            prod_id:id
        },
        success:function(data){
            eml.innerText=data.quantity
            document.getElementById("amount").innerText=data.amount
            document.getElementById("totalamount").innerText=data.totalamount
        }
    })
})


$('.remove-cart').click(function(){
    var id=$(this).attr("pid").toString(); 
    var eml = this
    $.ajax({
        type: "GET",
        url:"/removecart",
        data:{
            prod_id:id
        },
        success:function(data){
            
            document.getElementById("amount").innerText=data.amount
            document.getElementById("totalamount").innerText=data.totalamount
            eml.parentNode.parentNode.parentNode.parentNode.remove()
        }
    })
})


$('.plus-wishlist').click(function(){
    var id=$(this).attr("pid").toString(); 
    $.ajax({
        type: "GET",
        url:"/pluswishlist",
        data:{
            prod_id:id
        },
        success:function(data){
            //alert(data.message)
            window.location.href = `http://localhost:8000/product-detail/${id}`
        }
    })
})


$('.minus-wishlist').click(function(){
    var id = $(this).attr("pid").toString();
    var button = $(this);

    $.ajax({
        type: "GET",
        url: "/minuswishlist",
        data: {
            prod_id: id
        },
        success: function(data){
            button.removeClass("btn-danger minus-wishlist")
                  .addClass("btn-success plus-wishlist")
                  .html('<i class="fas fa-heart fa-lg"></i>');
            alert(data.message);  // Optional: Show the success message to the user
        },
        error: function(xhr, status, error){
            alert("Error removing from wishlist: " + xhr.responseJSON.message);
            console.error("Error details: ", error);
        }
    });
});

