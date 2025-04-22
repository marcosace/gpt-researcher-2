import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // Handle the WebSocket upgrade for Clerk
  const upgradeHeader = req.headers.get('Upgrade');
  
  if (upgradeHeader !== 'websocket') {
    return new Response('Expected Upgrade: websocket', { status: 426 });
  }

  return new Response(null, {
    status: 101,
    headers: {
      'Upgrade': 'websocket',
      'Connection': 'Upgrade',
      'Sec-WebSocket-Accept': req.headers.get('Sec-WebSocket-Key') || '',
    },
  });
}