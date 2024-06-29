export async function onRequest(context) {
  const { request } = context;
  const data = await request.json();
  const { username, password } = data;

  // Hash password (you can use a library like bcrypt for hashing)
  const hashedPassword = new TextEncoder().encode(password); // Simple hashing, use a stronger method in production

  // Save user to KV store or a database
  await context.env.USERS.put(username, JSON.stringify({ username, hashedPassword }));

  return new Response("User registered", { status: 201 });
}
