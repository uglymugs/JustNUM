 /* eslint-disable global-require */
import { configure } from '@kadira/storybook';
import '../app/scss/main.scss';

const loadStories = () => {
  require('../stories/index');
  require('../stories/icon_menu');
  require('../stories/case_list_table');
  require('../stories/case_form');
  require('../stories/side_bar');
};

configure(loadStories, module);
