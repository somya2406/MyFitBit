$("#add_food").submit(function(event){
alert("data inserted successfully");
})

if(window.location.pathname=="/")
{
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
        var request={
            "url":`http://localhost:3000/api/foodlist/${id}`,
            "method":"DELETE"
        }
        if(confirm("do you really want to delete this record")){
            $.ajax(request).done(function(response){
                alert("data delted successfully");
               location.reload();
            })
        }
    })
}