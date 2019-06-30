export default function (server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('post', 10).forEach(post => {
    server.createList('comment', 5, { post });
  });
}
