import gulp from "gulp";

import { path } from "./src/gulp/config/path.js";
global.app = {
  path:path,
  gulp:gulp
}

import { copy } from "./src/gulp/tasks/copy.js";
import { reset } from "./src/gulp/tasks/reset.js";
import { html } from "./src/gulp/tasks/html.js";

const complexTasks = gulp.parallel(copy, html);

const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.files, html);
}

const dev = gulp.series(reset, complexTasks, watcher);

gulp.task("default", dev);