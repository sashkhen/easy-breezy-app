import camelCase from 'lodash/camelCase';

export const createConsts = (module, consts) => consts.reduce((acc, constName) =>
  Object.assign({}, acc, {
    [constName]: `${module}/${constName}`,
  }), {});

export const createActions = consts => Object.keys(consts).reduce((acc, constName) =>
  Object.assign({}, acc, {
    [camelCase(constName)]: payload => ({
      type: consts[constName],
      payload,
    }),
  }), {});
