import { supabaseServer } from '@/app/lib/supabase/server'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    console.log("receive un message ")
    const evt = await verifyWebhook(req)

    console.log(evt + " for user id: " + " ----- ")
    // const { id } = evt.data
    const eventType = evt.type

    
    if(eventType === 'user.created') {
        console.log("object created:")
        await supabaseServer.from('users').insert({
            external_id: evt.data.id,
            username: evt.data.username,
            imageUrl: evt.data.image_url
        })
    }
    else if(eventType === 'user.deleted') {
        console.log("object deleted:")
        await supabaseServer.from('users').delete().eq('external_id', evt.data.id)
    }


    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}