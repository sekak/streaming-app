import { supabaseServer } from '@/lib/supabase/server'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)
    const eventType = evt.type
    
    if(eventType === 'user.created') {
        await supabaseServer.from('users').insert({
            external_id: evt.data.id,
            username: evt.data.username,
            imageUrl: evt.data.image_url
        })
    }
    else if(eventType === 'user.deleted') {
        await supabaseServer.from('users').delete().eq('external_id', evt.data.id)
    }
    else if(eventType === 'user.updated') {
        await supabaseServer.from('users').update({
            username: evt.data.username,
            imageUrl: evt.data.image_url,
        }).eq('external_id', evt.data.id)
    }


    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}