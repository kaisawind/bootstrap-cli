export const DOCS = {
  usage: {
    md: require('html-loader!markdown-loader!./usage.md')
  },
  basic: {
    component: require('!!raw-loader?lang=typescript!./basic/basic'),
    html: require('!!raw-loader?lang=markup!./basic/basic.html')
  },
  types: {
    html: require('!!raw-loader?lang=markup!./types/types.html')
  }
};
