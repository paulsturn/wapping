
    // Firbase setup
    const firebaseConfig = {
        apiKey: "AIzaSyCzxIGI9VCw6UPIugT52qu-VXTP0LG_C54",
        authDomain: "beyond-4ea43.firebaseapp.com",
        databaseURL: "https://beyond-4ea43-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "beyond-4ea43",
        storageBucket: "beyond-4ea43.appspot.com",
        messagingSenderId: "671124225167",
        appId: "1:671124225167:web:644d0c53052364fa0d44fa"
      };
      
      firebase.initializeApp(firebaseConfig);
      
      const storage = firebase.storage();
      // const firestore = firebase.firestore();
      
      // Function to upload image
      function uploadImage() {
        // Get image element
        const imageElement = document.querySelector('#imageContainer img');
        
        // Get image source URL
        const imageUrl = imageElement.src;
        
        // Create a Blob from the image URL
        fetch(imageUrl)
          .then(response => response.blob())
          .then(blob => {
            // Create a storage reference
            const storageRef = storage.ref(`team_images/${new Date().getTime()}_${imageElement.alt}`);
            
            // Upload blob
            storageRef.put(blob).then(snapshot => {
              console.log('Uploaded file!');
              
              // Get download URL
              // storageRef.getDownloadURL().then(downloadURL => {
              //   console.log('File available at', downloadURL);
                
              //   // Save download URL to Firestore
              //   saveImageToFirestore(downloadURL);
              // }).catch(error => {
              //   console.error('Error getting download URL:', error);
              // });
            }).catch(error => {
              console.error('Error uploading file:', error);
            });
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });
      }
      
      // Function to save image URL to Firestore
      function saveImageToFirestore(downloadURL) {
        firestore.collection('images').add({
          url: downloadURL
        }).then(docRef => {
          console.log('Image URL saved to Firestore:', docRef.id);
        }).catch(error => {
          console.error('Error saving image URL to Firestore:', error);
        });
      }
      