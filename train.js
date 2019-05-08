

$(document).ready(function () {
    //access firebase

    $("#save").on("click", function (e) {
        e.preventDefault();

        var trainName = $("#trainName").val().trim();
        var trainDestination = $("#trainDestination").val().trim();
        var firstTime = $("#firstTime").val().trim();
        var frequency = $("#frequency").val().trim();
        console.log(trainName);

        database.ref().push({
            trainName: trainName,
            trainDestination: trainDestination,
            firstTime: firstTime,
            frequency: frequency
        });

        // database.ref().push({
        //     trainName, trainDestination, firstTime, frequency
        // })

    });

    database.ref().on("child_added", function (snapshot) {
        var data = snapshot.val();
        if (!data) {
            return;
        }
        var tFrequency = data.frequency;
        var firstTime = data.firstTime;
        var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted);
        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);
        var tRemainder = diffTime % tFrequency;
        console.log(tRemainder);


        var minutesAway = tFrequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + minutesAway);
        var nextArrival = moment().add(minutesAway, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextArrival).format("hh:mm"));

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

    // Assumptions
    // var tFrequency = 3;
    // // Time is 3:30 AM
    // var firstTime = "03:30";
    // // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    // console.log(firstTimeConverted);
    // // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);
    // // Time apart (remainder)
    // var tRemainder = diffTime % tFrequency;
    // console.log(tRemainder);
    // // Minute Until Train
    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));







});