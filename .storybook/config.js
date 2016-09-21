 /* eslint-disable global-require */
import { configure } from '@kadira/storybook';

const loadStories = () => {
  require('../stories/index');
  require('../stories/icon_menu');
  require('../stories/case_list_table');
  require('../stories/case_form');
};

configure(loadStories, module);
