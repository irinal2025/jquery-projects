$(document).ready(function () {
    $('#testButton').on('click', function () {
        $('#testResult').hide().text('It works! jQuery is in action!').slideDown(1000);
        $(this).prop('disabled', true);
    });
});
