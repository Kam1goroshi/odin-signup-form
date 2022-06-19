const form = document.querySelector('.user-info-form');
document.getElementById("form-submit").addEventListener('click',(e) => {
    alert('clicked');
    form.submit();
});
