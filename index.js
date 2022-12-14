const http = require("http");

const PORT = 3000;
const friends = [
  {
    id: 0,
    name: "John",
  },
  {
    id: 1,
    name: "Jane",
  },
  {
    id: 2,
    name: "Jack",
  },
];
const server = http.createServer((req, res) => {
  let items = req.url.split("/");

  if (items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "/messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello World</li>");
    res.write("<li>What is up?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
