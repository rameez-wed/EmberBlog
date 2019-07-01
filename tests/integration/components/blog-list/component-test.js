import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | blog-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders right number of elements in the list', async function (assert) {
    this.set('blogs', [{
      id: '5',
      title: 'test-title5',
      description: 'test-description5',
    }
      , {
        id: '5',
        title: 'test-title5',
        description: 'test-description5',
      }
  ]);
    this.set('onTap', () => {
      assert.ok("clicked");
    });
    await render(hbs`{{blog-list blogs=blogs onPostSelected=onTap}}`);
    let query = this.element.querySelectorAll('[data-test-blog-title]').length;
    assert.equal(2, this.element.querySelectorAll('[data-test-blog-title]').length, "List has the correct number of elements");
  });
});
