 /* eslint-disable global-require */
import { configure } from '@kadira/storybook';

const loadStories = () => {
  require('../stories/index');
  require('../stories/icon_menu');
  require('../stories/case_list');
  require('../stories/case_form');
  require('../stories/case_list_table_rows');
  require('../stories/side_bar');
};

configure(loadStories, module);
