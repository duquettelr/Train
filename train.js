var database = firebase.database.ref();

$(document).ready(function () {
    //access firebase

    $("#save").on("click", function (e) {
        e.preventDefault();

        var trainName = $("#trainName").val().trim();
        var trainDestination = $("#trainDestination").val().trim();
        var firstTime = $("#firstTime").val().trim();
        var frequency = $("#frequency").val().trim();
        console.log(trainName);

        database.push({
            trainName: trainName,
            trainDestination: trainDestination,
            firstTime: firstTime,
            frequency: frequency
        });

        // database.ref().push({
        //     trainName, trainDestination, firstTime, frequency
        // })

    });

    database.on("child_added", function (snapshot) {
        var data = snapshot.val();
        if (!data) {
            return;
        }

        var nextArrival = "I dont know yet";
        var minutesAway = "need to calculate";
        var html = `
                <tr>
                    <td>${data.trainName}</td>
                    <td>${data.trainDestination}</td>
                    <td>${data.frequency}</td>
                    <td>${nextArrival}</td>
                    <td>${minutesAway}</td>
                </tr>
                `;


        $("#trainSection").append(html);


    });


    //on submit get inputs
    //save the inputs to the firebase
    //updates the listing for the train
    // get the prediction working







});