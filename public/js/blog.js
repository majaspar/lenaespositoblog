

const shareLink = encodeURI(window.location.href);
const msg = encodeURIComponent('Hey, I found this article');
const title = encodeURIComponent(document.querySelector('title').textContent);

// console.log([shareLink, msg, title])

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${shareLink}`;


const twitterLink = document.querySelector('.twitterLink');
twitterLink.href = `https://www.twitter.com/share?&url=${shareLink}&text=${msg}&hashtags=lenaesposito,lenaespositoblog,webdeveloper,webdesigner`;


const whatsappLink = document.querySelector('.whatsappLink');
whatsappLink.href = `https://api.whatsapp.com/send?text=${shareLink}`;
