import cac from "cac";
import { createDevServer } from "./dev";

const version = require("../../package.json").version;

const cli = cac('docgr').version(version).help();

cli.command('dev [root]', 'start dev server').action(async (root) => {
  const server = await createDevServer(root);
  await server.listen();
  // 控制台输出服务器启动后的地址
  server.printUrls();
})

cli.command('build [root]', 'build in production').action((root) => {
  console.log(root)
})

cli.parse();