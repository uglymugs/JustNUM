/* eslint-disable import/prefer-default-export */
import dpdRun from '../lib/dpd_run';

export const addNote =
  dpdRun(dpd.notes.post);
