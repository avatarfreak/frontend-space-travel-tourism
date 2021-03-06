import React from 'react'


const useBackgroundImage = (bgImg: string) => {
   const [image, setImage] = React.useState<string>('home');

   React.useLayoutEffect(() => {
      // Remove all the classes
      document.body.className = '';

      if (!bgImg) {
         return document.body.classList.add('home')
      }
      else {
         setImage(bgImg);
         return document.body.classList.add(image)
      }
   }, [bgImg, image])

   return null;
}

export default useBackgroundImage

