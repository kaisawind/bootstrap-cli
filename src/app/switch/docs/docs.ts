export const DOCS = {
  size: {
    html: require('!!raw-loader?lang=markup!../switch-size/switch-size.component.html'),
    component: require('!!raw-loader?lang=typescript!../switch-size/switch-size.component.ts')
  },
  colors: {
    html: require('!!raw-loader?lang=markup!../switch-colors/switch-colors.component.html'),
    component: require('!!raw-loader?lang=typescript!../switch-colors/switch-colors.component.ts')
  },
  animation: {
    html: require('!!raw-loader?lang=markup!../switch-animation/switch-animation.component.html'),
    component: require('!!raw-loader?lang=typescript!../switch-animation/switch-animation.component.ts')
  },
  disabled: {
    html: require('!!raw-loader?lang=markup!../switch-disabled/switch-disabled.component.html'),
    component: require('!!raw-loader?lang=typescript!../switch-disabled/switch-disabled.component.ts')
  },
  text: {
    html: require('!!raw-loader?lang=markup!../switch-text/switch-text.component.html'),
    component: require('!!raw-loader?lang=typescript!../switch-text/switch-text.component.ts')
  }
};
