import examplesRouter from './api/controllers/examples/router';
import topicRouter from './api/controllers/topic/router';

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/topic', topicRouter);
}
