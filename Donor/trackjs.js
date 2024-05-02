const alertloc=document.getElementById("alertloctrack");
const urlParams = new URLSearchParams(window.location.search);
const data = urlParams.get('data');
if (data === 'example') {
    alertloc.innerHTML='<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div> <strong>Success!</strong> Donation Fulfilled. Thanks for your generosity!</div>';
}