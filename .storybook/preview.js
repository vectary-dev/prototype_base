import { themes } from '@storybook/theming';


export const parameters = {
  backgrounds: {
    default: "Almost White",
    values: [
      { name: 'Almost White', value: '#F7F7F7' },
      { name: 'Almost Black', value: '#252525' },
    ],
},
  actions: { argTypesRegex: "^on[A-Z].*" },
}