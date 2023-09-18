import { Endpoints } from '../../types';

export const getCart: Endpoints['getCart'] = async (
  context,
  params
) => {
  console.log('getCart has been called');

  return {
    "appliedCoupons": [],
    "billingAddress": null,
    "customerEmail": null,
    "id": "cart",
    "lineItems": [
      {
        "attributes": [
          {
            "label": "40",
            "name": "size",
            "value": "40"
          },
          {
            "label": "White",
            "name": "color",
            "value": "white"
          }
        ],
        "id": "1",
        "image": {
          "alt": "Athletic mens walking sneakers",
          "url": "/images/product.webp"
        },
        "name": "Athletic mens walking sneakers",
        "quantity": 1,
        "sku": "product-1",
        "slug": "athletic-mens-walking-sneakers",
        "totalPrice": {
          "currency": "USD",
          "amount": 100.99,
          "precisionAmount": "2"
        },
        "unitPrice": {
          "isDiscounted": true,
          "regularPrice": {
            "currency": "USD",
            "amount": 100.99,
            "precisionAmount": "2"
          },
          "value": {
            "currency": "USD",
            "amount": 89.95,
            "precisionAmount": "2"
          }
        }
      }
    ],
    "shippingAddress": null,
    "shippingMethod": {
      "description": "Credit card",
      "estimatedDelivery": "0.00",
      "id": "credit-card-1",
      "name": "Credit card",
      "price": {
        "currency": "USD",
        "amount": 0,
        "precisionAmount": "2"
      }
    },
    "subtotalDiscountedPrice": {
      "currency": "USD",
      "amount": 89.95,
      "precisionAmount": "2"
    },
    "subtotalRegularPrice": {
      "currency": "USD",
      "amount": 100.99,
      "precisionAmount": "2"
    },
    "totalCouponDiscounts": {
      "currency": "USD",
      "amount": 20,
      "precisionAmount": "2"
    },
    "totalItems": 1,
    "totalPrice": {
      "currency": "USD",
      "amount": 89.95,
      "precisionAmount": "2"
    },
    "totalShippingPrice": null,
    "totalTax": {
      "currency": "USD",
      "amount": 1.38,
      "precisionAmount": "2"
    }
  };
};
