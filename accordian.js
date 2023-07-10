// const accord=document.querySelectorAll('.accordian__container')

// accord.forEach( item => {
// const title =item.querySelector('.accordian__container__title')

// title.addEventListener('click', ()=> {
//     for( i=0; i<accord.length;i++){
//         if(accord[i]!=item){
//             accord[i].classList.remove('active');
//         }
//         else{
//         item.classList.toggle('active');
//         }

//     }

// });
// })
var acc = document.getElementsByClassName("accordian__container__title");
        var i;
        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {

            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
            panel.style.display = "none";
            } else {
            panel.style.display = "block";
            }
        });
        }