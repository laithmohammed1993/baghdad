import assets from 'assets-ideas';
// let images = [];
// function getImages(images=[]){
//   let url = document.querySelector('.megaPhotoImgContainer div img')?.getAttribute('src');
//   console.log(url);
//   if( typeof url === 'string' && url.length > 0){
//     if( !images.includes(url) ){
//       document.querySelector('.megaPhotoImgContainer a:first-child').click();
//       return getImages([ ...images, url ])
//     }else{ return JSON.stringify(images); }
//   } 
// };
// getImages()


export default {
    ...assets
}