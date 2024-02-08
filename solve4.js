function password(userInfo) {
    if (!userInfo.hasOwnProperty('name') || !userInfo.hasOwnProperty('birthYear') || !userInfo.hasOwnProperty('siteName')) {
        return "invalid";
    }
    if (userInfo.birthYear.toString().length !== 4) {
              return "invalid";
   }
   let siteNameCapitalized = userInfo.siteName.charAt(0).toUpperCase() + userInfo.siteName.slice(1);
   let generatedPassword = `${siteNameCapitalized}#${userInfo.name}@${userInfo.birthYear}`;
  
   return generatedPassword;
      }
      console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" } ));
     
