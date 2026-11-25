import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import { auth } from '@/lib/auth'

export async function POST() {
     const userSession = await auth.api.getSession({
        headers: await headers()
    })
    if(!userSession) {
        return <div>Not authenticated</div>
    }
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: 'price_1UfUrQENuCysII7ZAlvLmXa2',
          quantity: 1,
        },
      ],
      mode: 'payment',
       customer_email:userSession?.user.email,
      metadata:{
userId:userSession?.user.id
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      // Provide a name (for example, hosted_web_0001) to label this Checkout integration and measure its conversion independently
     integration_identifier: 'equip_web_001',
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}