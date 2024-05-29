
console.log("Custom Marketing ops scripts");
const marketingOpsOnPageShow = (data) => {
  
  if (adobe) {
    console.log(JSON.stringify(data));
    adobe.target.getOffers({
        request: {
          "prefetch": {
            "views": [
              {
                "parameters": {
                  "ad": "1"
                },
                "profileParameters": {
                  "age": 23,
                  "gender": "male",
                  "categoryId": "shoe"
                }
              }
            ]
          }
        }
      });

    adobe.target.getOffers({
        mbox: 'target-global-mbox',
        request: {
            execute: {
                pageLoad: {
                    "parameters": {
                        "ad": "1"
                      },
                      "profileParameters": {
                        "age": 23,
                        "gender": "male",
                        "categoryId": "shoe"
                      }
                }
            }
        }
    }).then(response => adobe.target.applyOffers({ response: response }))
        .then(() => console.log("Success getOffers applyOffers"))
        .catch(error => console.log("Error", error));

  }
}
 