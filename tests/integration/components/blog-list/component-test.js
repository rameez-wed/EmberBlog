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
    }]);
    await render(hbs`{{blog-list blogs=blogs}}`);
    assert.equal('test-title5', this.element.querySelector('[data-test-blog-title]').textContent.trim(), "List has the correct number of elements");
  });
});
