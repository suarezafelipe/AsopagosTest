$('#Test').click(function () {
    var testItem = {
            Key: "1234",
            merchantId: "512321",        
        };

    $.ajax({
        url: 'http://localhost:5500/api/ModuloPagos',
        type: "POST",
        contentType: "application/json",
        data: {jsonData: JSON.stringify(testItem)},
        success: function (data) {
            alert(data);
        },
        error: function (error) {
            var x = error; //break here for debugging.
        }
    });
});
