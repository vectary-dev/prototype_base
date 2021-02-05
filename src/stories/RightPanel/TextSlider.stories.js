import React from 'react';

import { Button } from '../Button';
import TextSlider from "../../containers/TextSlider"
import {TexturePropertyProvider} from "../../context/texturePropertyContext"
import "../../styles/index.css"

export default {
  title: 'UI Elements/Right Panel/Text Slider',
  component: TextSlider,
argTypes: {
    labelType: { 
        description: "This decides the styling of the label. Has preset parameters",
        table: {
            defaultValue: {
                summary: "true"
            }
        },
        control: { type: "select", options: ["title", "normal"] }
    },


    unit: {
        description: "The unit after the value of the progress value",
        table: {
            defaultValue: {
                summary: "%"
            }
        },
        control: {type: "text" }},


    propName: {
        description: "The name of the property",
        table: {
            defaultValue: {
                summary: "Parameter"
            }
        },
        control: {type: "text"}},


    active: {
        description: "Determines if the slider is in an active state or not",
        table: {
            defaultValue: {
                summary: "true"
            }
        },
        control: {type: "boolean"}}, 


    minimum: {
        description: "The Minimum value of the slider",
        table: {
            defaultValue: {
                summary: "0"
            }
        },
        control: {type: "number"}},


    maximum: {
        description: "The Maximum value of the slider",
        table: {
            defaultValue: {
                summary: "100"
            }
        },
        control: {type: "number"}},


    hasButton: {
        description: "Determines if the slider displays a button or not",
        table: {
            defaultValue: {
                summary: "true"
            }
        },
        control: {type: "boolean"}},


    emptyButtonSpace: {
        description: "Fills the space of the button with margin -- used for props that are in the Panel but have no button",
        table: {
            defaultValue: {
                summary: "false"
            }
        },
        control: {type: "boolean"}}
  },
};

const Template = (args) => <TexturePropertyProvider >
                              <div className="w_prop h-full items-center flex flex-col overflow-y-scroll overflow-x-hidden hideScrollBar select-none dark:bg-almostBlack">
                                  <TextSlider {...args} />
                               
                              </div>
                            </TexturePropertyProvider>
  
export const active = Template.bind({});
active.args = {
    unit: "%",
    decimal: false,
    minimum: 0,
    maximum: 100,
    hasButton: true,
    emptyButtonSpace: false,
    propName: "Parameter",
    active: true,
    labelType: "normal",

  
};



export const inactive = Template.bind({});
inactive.args = {

    unit: "%",
    decimal: false,
    minimum: 0,
    maximum: 100,
    hasButton: true,
    emptyButtonSpace: false,
    propName: "Parameter",
    active: false,
    labelType: "normal",
  
};



export const degrees = Template.bind({});
degrees.args = {

    unit: "°",
    decimal: false,
    minimum: 0,
    maximum: 360,
    hasButton: true,
    emptyButtonSpace: false,
    propName: "Parameter",
    active: true,
    labelType: "normal",
  
};



export const digits = Template.bind({});
digits.args = {

    unit: " ",
    decimal: true,
    minimum: 0,
    maximum: 1,
    hasButton: true,
    emptyButtonSpace: false,
    propName: "Parameter",
    active: true,
    labelType: "normal",
  
};

active.parameters = {
    backgrounds: {
      themes
    }
  }

inactive.parameters = {
    backgrounds: {
      themes
    }
  }

degrees.parameters = {
    backgrounds: {
      themes
    }
  }

digits.parameters = {
  backgrounds: {
    themes
  }
}


const themes = {
  default: "Almost White",
    values: [
      { name: 'Almost White', value: '#F7F7F7' },
      { name: 'Almost Black', value: '#252525' },
    ],
}