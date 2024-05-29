
console.log("Custom Marketing ops scripts");
const marketingOpsOnPageShow = (data) => {

  if (adobe) {
    console.log(JSON.stringify(data));

    let params = {}
    if (window.location.href.indexOf('css') > 0) {
      params = {
        "user.categoryId": "shoes",
        "profile.age": 27
      }
    } else if (window.location.href.indexOf('websites') > 0) {
      params = {
        "user.categoryId": "websites",
        "profile.age": 27
      }
    }

    adobe.target.getOffer({
      "mbox": "target-global-mbox",
      "params": params,
      "success": function (offer) {
        adobe.target.applyOffer( {
           "mbox": "target-global-mbox",
           "offer": offer
        } );
      },
      "error": function (status, error) {
        console.log('Error', status, error);
      }
    });
  }

}
