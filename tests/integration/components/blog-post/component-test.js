import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | blog-post', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the blog title correctly', async function (assert) {
    this.set('blogs', [{
      id: '5',
      title: 'test-title5',
      description: 'test-description5',
    }]);

  });
});
