
console.log("Custom Marketing ops scripts");
const marketingOpsOnPageShow = (data) => {
  
  if (adobe) {
    console.log(JSON.stringify(data));
    adobe.target.getOffer({
      "mbox": "target-global-mbox",
      "params": {
         "user.categoryId": "shoes",
         "profile.age": 27,
         "profile.gender": "male"
      },
      "success": function(offer) {
            adobe.target.applyOffer( {
               "mbox": "target-global-mbox",
               "offer": offer
            } );
      },
      "error": function(status, error) {
          console.log('Error', status, error);
      }
    });



  }
}
 