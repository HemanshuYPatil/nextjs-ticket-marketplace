import { NextResponse } from "next/server";
import { api } from "@/convex/_generated/api";
import { getConvexClient } from "@/lib/convex";

export async function POST(req: Request) {

    const convex = getConvexClient();
    
    const data = req.body;
    console.log("Webhook data:", data);

  try {
    const event = await req.json();

    console.log("Received Cashfree Webhook:", event);

    if (!event.payment_id) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }


    try {
        const result = await convex.mutation(api.events.purchaseTicket, {
          eventId: event.eventId,
          userId: event.userId,
          waitingListId: event.waitingListId,
          paymentInfo: {
            paymentIntentId: event.payment_intent as string,
            amount: event.amount_total ?? 0,
          },
        });
        console.log("Purchase ticket mutation completed:", result);
      } catch (error) {
        console.error("Error processing webhook:", error);
        return new Response("Error processing webhook", { status: 500 });
      }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
