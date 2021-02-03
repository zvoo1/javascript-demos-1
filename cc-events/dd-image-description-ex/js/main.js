//Put your solution in this file
var featureLink = document.querySelector('p.city-intro a');
function featureLinkHandler (evt)
{
    let featureImage = document.querySelector('img.feature')
    featureImage.src = featureLink.href;
    featureImage.classList.remove('hidden');

    evt.preventDefault();
}
featureLink,addEventListener('click', featureLinkHandler)   

