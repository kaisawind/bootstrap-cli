export const DOCS = {
  usage: require('html-loader!markdown-loader!./usage.md'),
  basic: {
    component: require('!!raw-loader?lang=typescript!./basic/basic'),
    html: require('!!raw-loader?lang=markup!./basic/basic.html')
  }
};
