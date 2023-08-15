# Plates Co Sales System Proof of Concept

This is a proof of concept for the new sales system of Plates Co, a leading provider of dinner plates. The goal of this project is to implement a simple basket system that allows customers to add products to their basket, calculate the total cost considering delivery charges and special offers.

## How it Works

The implementation consists of an HTML file (`index.html`), a CSS file (`plates.css`), and a JavaScript file (`index.js`).

- The `index.html` file contains the product cards with their images, names, and prices. Each card has an "Add" button that triggers the addition of the product to the basket.
- The `plates.css` file provides basic styling for the product cards and the layout.
- The `index.js` file contains the JavaScript logic for managing the basket, calculating the total amount, applying delivery charge rules, and handling special offers.

## Assumptions Made

1. **Product Catalogue:** The product catalogue is defined as a JavaScript object named `productCatalogue`, where each product is represented with a unique product code, name, and price.

2. **Delivery Charges:** Delivery charges are based on the total amount spent. If the total amount is under $50, the delivery charge is $4.95. If the total amount is under $90, the delivery charge is $2.95. Orders of $90 or more have free delivery.

3. **Special Offers:** The initial special offer is "buy one red plate, get the second half price." The special offers are defined in the `specialOffers` array. Each offer consists of the product code and offer type.

4. **Decimal Precision:** The total amount is displayed with 2 decimal places (e.g., $37.85) using the `toFixed(2)` method.

5. **UI Interactions:** The user can click the "Add" button on the product cards to add items to the basket. The updated basket contents and total amount are displayed dynamically on the UI.

## How to Use

1. Open the `index.html` file in a web browser.
2. Browse the product cards and click the "Add" button to add products to the basket.
3. The basket's contents and total amount, including delivery charges and special offers, will be displayed on the UI.

## Possible Future Improvements

- Enhanced Styling: Improve the styling and layout for a more visually appealing user interface.
- Additional Special Offers: Implement more complex special offers to cater to different promotion strategies.
- User Interaction: Allow users to adjust quantities or remove items directly from the basket.
- Error Handling: Implement error handling for cases where the product code is not found or other unexpected scenarios.

## Conclusion

This proof of concept provides a basic example of how the sales system works, including delivery charges and special offers. It demonstrates the core functionality and can be further expanded and refined based on specific business requirements.
