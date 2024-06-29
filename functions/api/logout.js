export async function onRequest(context) {
  // Invalidate any server-side session or token if you have one.
  // For this example, we're assuming client-side storage, so there's nothing to do server-side.

  return new Response("Logged out", { status: 200 });
}
