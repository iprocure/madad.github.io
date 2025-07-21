import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const { event, email, additionalData } = await request.json();

    // Validate required fields
    if (!event) {
      return NextResponse.json(
        { error: 'Event name is required' },
        { status: 400 }
      );
    }

    // Send event to Google Analytics 4
    const measurementId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
    const apiSecret = process.env.GA_API_SECRET; // You'll need to set this in your environment

    if (measurementId && apiSecret) {
      const gaPayload = {
        client_id: generateClientId(),
        events: [
          {
            name: event,
            parameters: {
              email: email || '',
              ...additionalData
            }
          }
        ]
      };

      await axios.post(
        `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
        gaPayload,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    return NextResponse.json(
      { message: 'Analytics event tracked successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Failed to track analytics event' },
      { status: 500 }
    );
  }
}

// Generate a simple client ID for analytics
function generateClientId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}
