export async function onRequest(context) {
  const { request } = context;
  const data = await request.json();
  const { username, password } = data;

  const user = await context.env.USERS.get(username);
  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  const storedUser = JSON.parse(user);
  // Verify password (use a secure comparison in production)
  const passwordMatches = storedUser.hashedPassword === password;

  if (!passwordMatches) {
    return new Response("Invalid credentials", { status: 401 });
  }

  // Generate session token (JWT or similar)
  const token = btoa(`${username}:${password}`); // Simple token, use JWT in production

  return new Response(JSON.stringify({ token }), { status: 200 });
}
