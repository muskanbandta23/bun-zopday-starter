const port = Number(process.env.PORT) || 3000;

const server = Bun.serve({
  port,
  routes: {
    "/": new Response(Bun.file("public/index.html")),
    "/api/hello": () =>
      Response.json({
        message: "Hello from Bun!",
        bun: Bun.version,
        time: new Date().toISOString(),
      }),
    "/health": new Response("ok"),
  },
  fetch() {
    return new Response("Not found", { status: 404 });
  },
});

console.log(`Listening on ${server.url}`);
