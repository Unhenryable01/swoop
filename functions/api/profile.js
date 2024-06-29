export async function onRequest(context) {
  const { request } = context;
  const token = request.headers.get("Authorization").split(" ")[1];
  const [username, password] = atob(token).split(":");

  const user = await context.env.USERS.get(username);
  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  return new Response(user, { status: 200 });
}
