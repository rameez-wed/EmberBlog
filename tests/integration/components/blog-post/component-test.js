import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | blog-post', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the blog title correctly for a component', async function (assert) {
    this.set('blogs', [{
      id: '5',
      title: 'test-title5',
      description: 'test-description5',
    }]);
    this.set('onTap', () => {
      assert.ok("clicked");
    });
    await render(hbs`{{blog-list blogs=blogs onPostSelected=onTap}}`);
    assert.equal('test-title5', this.element.querySelector('[data-test-blog-title]').textContent.trim(), "Title is correct");

  });

  test('it renders the blog and the click action works correctly', async function (assert) {
    this.set('blogs', [{
      id: '5',
      title: 'test-title5',
      description: 'test-description5',
    }]);
    
    this.set('onTap', () => {
      assert.ok("Element click successful");
    });
    await render(hbs`{{blog-list blogs=blogs onPostSelected=onTap}}`);
    await click('[data-test-blog-title]')

  });
  });

