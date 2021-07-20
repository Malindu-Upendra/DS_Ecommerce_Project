import React, { useRef, useEffect } from "react";
import axios from "axios";

export default function Paypal(props) {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: props.toPay,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          await axios.post(`http://localhost:5000/Payment/${props.email}`)
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [props.toPay,props.email]);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
