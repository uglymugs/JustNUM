import uuid from 'uuid';
import { ADD_CASE, EDIT_CASE } from '../action_types';

export const addCase = (formData) =>
  ({
    type: ADD_CASE,
    formData,
    id: uuid.v1(),
  });

export const editCase = (caseId, formData) =>
  ({
    type: EDIT_CASE,
    formData,
    caseId,
  });
