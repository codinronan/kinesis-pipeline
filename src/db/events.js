import dynamoose from 'dynamoose';

import constants from '../constants';

/**
 * Schema for below table
 */
const Schema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
  },
  payload: {
    type: Object,
  },
}, {
  timestamps: true,
  saveUnknown: true,
});

/**
 * Table definition
 */
export default dynamoose.model(constants.EVENT_TABLE_NAME, Schema);
