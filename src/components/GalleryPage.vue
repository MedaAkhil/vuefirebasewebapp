<template>
    <div>
        This is image sapce
    </div>
    <section class="center-imgslider">
        <div class="slider">
            <img class="active" src="https://b-new.be/wp-content/uploads/2013/06/FB-600x338.png" alt="Image 1">
            <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg" alt="">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Image 3">
            <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg" alt="Image 4">
            <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg" alt="Image 5">
            <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg" alt="Image 6">
            <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg" alt="Image 7">
        </div>
    </section>
</template>




<script>
// const images = document.querySelectorAll('.slider img');
//         let currentImageIndex = 0;

//         function showNextImage() {
//             images[currentImageIndex].classList.remove('active');
//             currentImageIndex = (currentImageIndex + 1) % images.length;
//             images[currentImageIndex].classList.add('active');
//         }

//     setInterval(showNextImage, 1000);
export default {
    name: 'GalleryPage',
  data() {
    return {
      users: [],
    }
  },
 
}  
</script>









<style>
        .center-imgslider {
            height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .slider {
            background-color: black;
            width: 70%;
            height: 70%;
            overflow: hidden;
            position: relative;
        }

        .slider img {
            
            height: 100%;
            /* aspect-ratio: 16/1; */
            position: absolute;
            opacity: 0;
            transition: opacity 1s ease-in-out;
        }

        @media (min-width:380px) {
            .slider img {
                height: 200px;
            }
        }
        
        .slider img.active {
            opacity: 1;
        }

        
        .center-imgslider{
            height: 95vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider {
            width: 900px;
            height: 500px;
            overflow: hidden;
            position: relative;
        }
        
        .slider img {
            width: 100%;
            height: 100%;
            position: absolute;
            opacity: 0;
            transition: opacity 1s ease-in-out;
        }
        
        .slider img.active {
            opacity: 1;
        }
        @media (max-width:900px){
            .slider {
                width: 700px;
                height: 450px;
            }
        }
        @media (max-width:600px){
            .slider {
                width: 500px;
                height: 300px;
            }
        }
        @media (max-width:400px){
            .slider {
                width: 95%;
                height: 200px;
            }
        }
        @media (max-width:300px){
            .slider {
                width: 300px;
                height: 200px;
            }
        }
    </style>