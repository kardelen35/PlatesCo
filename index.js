document.addEventListener("DOMContentLoaded", () => {
  const productCatalogue = {
    R01: { name: "Red Plate", price: 32.95 },
    G01: { name: "Green Plate", price: 24.95 },
    B01: { name: "Blue Plate", price: 7.95 },
  };

  const deliveryChargeRules = [
    { threshold: 90, charge: 0 },
    { threshold: 50, charge: 2.95 },
    { threshold: 0, charge: 4.95 },
  ];

  const specialOffers = [{ productCode: "R01", offerType: "half_price" }];

  const basket = {
    items: [],
    add(productCode) {
      this.items.push(productCode);
    }, // add plates to basket

    total() {
      const totalAmount = this.items.reduce(function (total, productCode) {
        return total + productCatalogue[productCode].price; //The price of each product is added to the previous total.
      }, 0);

      const deliveryCharge = deliveryChargeRules.find(function (rule) {
        return totalAmount >= rule.threshold;
      }).charge; //Appropriate delivery charge is found according to teh total amount

      let discountedAmount = totalAmount;
      specialOffers.forEach(function (offer) {
        if (
          basket.items.includes(offer.productCode) &&
          offer.offerType === "half_price"
        ) {
          discountedAmount -= productCatalogue[offer.productCode].price / 2;
        }
      });

      return discountedAmount + deliveryCharge;
    },
  };

  const addButton = document.querySelectorAll(".btn.btn-primary");
  addButton.forEach(function (button) {
    button.addEventListener("click", function () {
      const productCode = button.getAttribute("data-product-code");
      basket.add(productCode);
      updateBasketContents();
    });
  });

  function updateBasketContents() {
    const basketTotalElement = document.getElementById("basket-total");
    const deliveryChargeElement = document.getElementById("delivery-charge");

    if (basketTotalElement && deliveryChargeElement) {
      const totalAmount = basket.total().toFixed(2);

      const deliveryCharge = deliveryChargeRules
        .find((rule) => totalAmount >= rule.threshold)
        .charge.toFixed(2);

      basketTotalElement.textContent = `Total Amount: $${totalAmount}`;
      deliveryChargeElement.textContent = `Delivery Charge: $${deliveryCharge}`;
    }
  }
});
