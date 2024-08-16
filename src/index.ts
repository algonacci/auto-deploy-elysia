import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => {
    return {
      status: {
        message: "Hello World from Elysia!",
        code: 200,
      },
      data: null,
    };
  })
  .listen(7003);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
