function success(){

}

function error(){

}

$(document).ready(function(){
    $('#fsForm').on('submit', function(e){
        e.preventDefault();

        $.ajax({
            url: 'https://formspree.io/xoqkljkl',
            method: 'POST',
            data:{
                name: $('#fsfName').val(),
                _replyto: $('#fsfEmail').val(),
                message: $('#fsfMessage').val()
            },
            dataType: "json"
        })
        .done(function(data){
            $('#fsfAlert').removeClass('hidden').addClass('alert-success')
            $('#fsfAlert .form-message').html('Your message has been successfully sent. Thanks!')
        })
        .fail(function(error){
            $('#fsfAlert').removeClass('hidden').addClass('alert-danger')
            $('#fsfAlert .form-message').html('An error occured while sending your message. Please try again.')
        })

    });
});