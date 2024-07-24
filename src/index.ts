import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => {
    return {
      status: {
        message: "hello elysia",
        code: 200,
      },
      data: null
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
