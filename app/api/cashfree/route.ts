import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { customer_email, customer_name, customer_phone, amount } = await req.json();

  const clientId = "TEST102403622d3a4c5f69ba8ecadd7426304201";
  const clientSecret = "cfsk_ma_test_aab52085772190d09a6257a9c63b051c_c3937c1d";

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: "Cashfree API credentials are missing" },
      { status: 500 }
    );
  }

  const linkId = `order_${Date.now()}`; // Unique link_id

  const options = {
    method: "POST",
    headers: {
      "x-api-version": "2022-09-01",
      "x-client-id": clientId,
      "x-client-secret": clientSecret,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      link_id: linkId, // ✅ Added this field
      customer_details: {
        customer_email,
        customer_name,
        customer_phone,
      },
      link_amount: amount,
      link_currency: "INR",
      link_purpose: "Product Purchase",
      link_notify: {
        send_email: true,
        send_sms: true,
      },
      link_meta: {
        return_url: `https://yourwebsite.com/payment-success`,
      },
      
    }),
  };

  try {
    const response = await fetch("https://sandbox.cashfree.com/pg/links", options);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Payment link creation failed" }, { status: 500 });
  }
}
