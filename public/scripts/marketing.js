
console.log("Custom Marketing ops scripts");


const triggerMarketingEvents = () => {
  console.log("triggerMarketingEvents")
}

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}


const triggerPurchaseEvents = (price) => {
  console.log("triggerPurchaseEvents : " + price)
  const purchaseId = uuidv4()
  const priceRandom =  Math.floor(Math.random() * (10000 - 1000) + 100) / 100

  alloy("sendEvent", {
    "xdm": {
      "_experience": {
        "decisioning": {
          "propositions": [{
            "scope": "orderConfirmation"
          }],
          "propositionEventType": {
            "display": 1
          }
        }
      },
      "eventType": "decisioning.propositionDisplay",
      "decisionScopes": [
        "orderConfirmation"
      ],
      "commerce": {
        "order": {
          "purchaseID": purchaseId,
          "purchaseOrderNumber": "VAU" + (new Date().getTime().toString()),
          "currencyCode": "EUR",
          "priceTotal": priceRandom
        },
        "purchases": {
          "value": 1
        }
      }
    },
    "data": {
      "__adobe": {
        "target": {
          "track": {
            "scopes": ["orderConfirmation"],
            "type": ""
          },
          "orderId": purchaseId,
          "orderTotal": priceRandom,
          "productPurchasedId": purchaseId + "-product"

        }
      }
    }
  }
  )
}


const populatePageData = () => {
  // simulate params based on the current website...

  const title = document.title;
  let params = { "pageTitle": title };
  if (title.indexOf('css') > 0) {
    params = {
      "user.categoryId": "shoes",
      "profile.age": 19
    }
  } else if (title.indexOf('pricing') > 0) {
    params = {
      "user.categoryId": "websites",
      "profile.age": 27
    }
  } else if (title.indexOf('websites') > 0) {
    params = {
      "user.categoryId": "websites",
      "profile.age": 27
    }
  } else if (title.indexOf('websites') > 0) {
    params = {
      "user.categoryId": "websites",
      "profile.age": 27
    }
  }
  return params;
}

const marketingOpsOnPageShow = (data) => {

  adobeDataLayer.push(populatePageData())

  if (alloy) {
    console.log("using alloy");

  } else if (adobe) {
    console.log("using at.js");

    let params = {}

    adobe.target.getOffer({
      "mbox": "target-global-mbox",
      "params": adobeDataLayer.getState(),
      "success": function (offer) {
        adobe.target.applyOffer({
          "mbox": "target-global-mbox",
          "offer": offer
        });
      },
      "error": function (status, error) {
        console.log('Error', status, error);
      }
    });
  }
}