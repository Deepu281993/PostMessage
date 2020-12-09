import Realm from 'realm';

class Post extends Realm.Object {}
Post.schema = {
  name: 'Post',
  properties: {
    user_id: 'int?',
    id: 'int?',
    title: 'string?',
    body: 'string?',
  },
};

export const schemasArray = [Post.schema];

export default new Realm({
  schema: schemasArray,
  schemaVersion: 0,
});
