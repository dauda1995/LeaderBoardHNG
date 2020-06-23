$(document).ready(function () {

    let users_array = [];
    let sorted_Array = [];
   // act("./db.json")
    // let scoreContainer = document.getElementById('scores');


    

    $('.addBtn').click(function () {
        var myFile = $('#myInput').val();
        act(myFile)


    })


    function act(filePath) {
        users_array = []
       $("#name").html("")
       $("#score").html("")
       $("#social").html("")

       
        $.getJSON(filePath, function (data) {
            $("#error").html("")

            $.each(data.users, function (i, single) {
                users_array[i] = {
                    username: single.username,
                    points: single.id,
                    social: single.email

                }

                console.log(single.id)
                sortArray()




                $('#name').append(`<br><td>${users_array[i].username}</td></br> `);
                $('#score').append(`<br><td>${users_array[i].points}</td></br> `);
                $('#social').append(`<br><td><a href = "https://www.twitter.com">${single.email}</a></td></br> `);


                //  $('#scores').innerHTML.join(`<h1>${users_array}`)



                // console.log(users_array[i])
            })


        }).fail(function () {
            console.log("An error has occurred.");
            $('#error').html('<p>Sorry, Wrong path</p>');
        });
    }

    function sortArray(){

        users_array.sort(function(a, b){
            var scoreA = a.points, scoreB = b.points
            if(scoreA < scoreB)
                return -1
            if(scoreA > scoreB)
                return 1
            return 0        
        })

        
       
    }


})