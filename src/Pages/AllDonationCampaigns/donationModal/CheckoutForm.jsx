/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";


import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckoutForm = ({ donationAmount, donationDetails, onClose }) => {


  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);


  useEffect(() => {
    if (donationAmount > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: donationAmount })
        .then((res) => {
        
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, donationAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
    
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);

      if (paymentIntent.status === "succeeded") {
     
        setTransactionId(paymentIntent.id);

        const payment = {
          donorEmail: user.email,
          donatedAmount: donationAmount,
          transactionId: paymentIntent.id,
          donationDate: new Date().toISOString(),
          donationId: donationDetails._id,
          petImage: donationDetails.image,
          petName: donationDetails.name,
        };

        const res = await axiosSecure.post(`/donate`, payment);
       

        if (res.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for donating",
            showConfirmButton: false,
            timer: 1500,
          });
          // close modal
          onClose();
         
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="font-semibold px-3 lg:px-5 py-1 lg:py-2 rounded-full
                text-sm lg:text-base 
               bg-lBtn dark:bg-dBtn my-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Donate
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-600">
            {" "}
            Your transaction id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
