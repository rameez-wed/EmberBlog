import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | posts', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  
  test('I can view the posts', async function(assert) {
    this.server.createList('post', 10);

    await visit('/posts');

    
    assert.dom('[data-test-blog-title]').exists({ count: 10 });
  });


  // test("I see post Title detail route", await function (assert) {
  //   let post = this.server.create('post',
  //     title: 'Post 1'
  // });

  // await visit(`/posts/${post.id}`);

  // assert.dom('h1').hasText('Post 2');
  // });

});


