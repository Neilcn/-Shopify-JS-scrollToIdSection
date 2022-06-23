<script>
//Select all links have classname .categories-link
document.querySelectorAll('.categories-link').forEach(elem => elem.addEventListener('click',function(e){
e.preventDefault();
//Extract URL from link href
const urlString = this.href;
//Extract the target section id from URL string
const targetId = urlString.substr(urlString.indexOf("#"));
const secCoords = document.querySelector(targetId).getBoundingClientRect();
//Scroll to section but 200 higher
   window.scrollTo({
     top: secCoords .top + window.pageYOffset - 200,
     behavior: 'smooth',
   });
}));
</script>
