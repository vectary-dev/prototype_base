import React from "react"
import LabeledInput from "./LabeledInput"
import {TexturePropertyProvider} from "../../context/texturePropertyContext"
import { defaultInputs } from "../../TestData/generators";

import "../../styles/index.css"

export default {
    title: 'Components/Containers/Labeled Input',
    component: LabeledInput,
    description: "ads",
  argTypes: {
      input: {
            description: "Expect an object that defines the inputs. See [Generators/defaultInputs]",
            table: {
                defaultValue: {
                    summary: "defaultInputs.single('%', false)"
                }
            },
            control: {type: 'object'}
            },

       label: {
        description: "Label of the input. (it is hidden if type is set to 'colorPicker')",
        table: {
            defaultValue: {
                summary: "Input"
            }
        },
        control: {type: 'text'}
       },

       labelType: {
        description: "Decides the type of the label, e.g. title, normal text",
        table: {
            defaultValue: {
                summary: "title"
            }
        },
        control:{type: 'select', options: ["title", "normal"]}
       },

       hasButton: {
        description: "Decides if the button has a button or not",
        table: {
            defaultValue: {
                summary: "true"
            }
        },
        control:{type: 'boolean'}
       },

       mainProperty: {
        description: "If the input is in the popup or in the panel. Adjusts spacing",
        table: {
            defaultValue: {
                summary: "true"
            }
        },
        control:{type: 'boolean'}
       },

       type: {
        description: "Changes the arrangement of the elements",
        table: {
            defaultValue: {
                summary: " "
            }
        },
        control:{type: 'select', options: ["normal", "colorPicker", "buttonless"]}
       },

       icon: {
        description: "Chenge icon for the given input",
        table: {
            defaultValue: {
                summary: ""
            }
        },
        control: {type: "select", options: ["colorPicker", "plus", "dropdown", "solid", "link"]}
       },
      

      }
}


const Template = (args) => <TexturePropertyProvider >
                              <div className="w_prop h-full items-center flex flex-col  hideScrollBar select-none dark:bg-almostBlack">
                                 
                                  <LabeledInput {...args} />
                               
                              </div>
                            </TexturePropertyProvider>


export const Single = Template.bind({});
Single.args = {


    labelType:"title",
    hasButton: true,
    mainProperty: true,
   

};

export const Double = Template.bind({});
Double.args = {

    label: "Clearcoat",
    labelType:"title",
    hasButton: true,
    mainProperty: true,
    input: defaultInputs.double("%")

};

export const Triple = Template.bind({});
Triple.args = {

    label: "Clearcoat",
    labelType:"title",
    hasButton: false,
    mainProperty: true,
    input: defaultInputs.triple("%")

};

export const DoubleAxis = Template.bind({});
DoubleAxis.args = {

    label: "Clearcoat",
    labelType:"title",
    hasButton: false,
    mainProperty: true,
    input: defaultInputs.double("°", true)

};

export const TripleAxis = Template.bind({});
TripleAxis.args = {

    label: "Clearcoat",
    labelType:"title",
    hasButton: false,
    mainProperty: true,
    input: defaultInputs.triple(" ", true)

};


export const color = Template.bind({});
color.args = {

    label: "Clearcoat",
    labelType:"title",
    hasButton: true,
    type: "colorPicker",
    input: defaultInputs.color(),
    mainProperty: false,
    icon: "colorPicker"

};

export const Solid = Template.bind({});
Solid.args = {

    label: "Clearcoat",
    labelType:"title",
    hasButton: true,
    mainProperty: true,
    input: defaultInputs.double("%"),
    icon: "solid"

};

export const Dropdown = Template.bind({});
Dropdown.args = {

    label: "Clearcoat",
    labelType:"title",
    hasButton: true,
    mainProperty: true,
    input: defaultInputs.double("%"),
    icon: "dropdown"

};

export const Link = Template.bind({});
Link.args = {

    label: "Clearcoat",
    labelType:"title",
    hasButton: true,
    mainProperty: true,
    input: defaultInputs.double("%"),
    icon: "link"

};

Single.parameters = {
    backgrounds: {
        default: "Almost White",
        values: [
          { name: 'Almost White', value: '#F7F7F7' },
          { name: 'Almost Black', value: '#252525' },
        ],
    }
  }

  Double.parameters = {
    backgrounds: {
        default: "Almost White",
        values: [
          { name: 'Almost White', value: '#F7F7F7' },
          { name: 'Almost Black', value: '#252525' },
        ],
    }
  }

  Triple.parameters = {
    backgrounds: {
        default: "Almost White",
        values: [
          { name: 'Almost White', value: '#F7F7F7' },
          { name: 'Almost Black', value: '#252525' },
        ],
    }
  }

  DoubleAxis.parameters = {
    backgrounds: {
        default: "Almost White",
        values: [
          { name: 'Almost White', value: '#F7F7F7' },
          { name: 'Almost Black', value: '#252525' },
        ],
    }
  }

  TripleAxis.parameters = {
    backgrounds: {
        default: "Almost White",
        values: [
          { name: 'Almost White', value: '#F7F7F7' },
          { name: 'Almost Black', value: '#252525' },
        ],
    }
  }

  color.parameters = {
    backgrounds: {
        default: "Almost White",
        values: [
          { name: 'Almost White', value: '#F7F7F7' },
          { name: 'Almost Black', value: '#252525' },
        ],
    }
  }

  Dropdown.parameters = {
    backgrounds: {
        default: "Almost White",
        values: [
          { name: 'Almost White', value: '#F7F7F7' },
          { name: 'Almost Black', value: '#252525' },
        ],
    }
  }

  Link.parameters = {
    backgrounds: {
        default: "Almost White",
        values: [
          { name: 'Almost White', value: '#F7F7F7' },
          { name: 'Almost Black', value: '#252525' },
        ],
    }
  }

  Solid.parameters = {
    backgrounds: {
        default: "Almost White",
        values: [
          { name: 'Almost White', value: '#F7F7F7' },
          { name: 'Almost Black', value: '#252525' },
        ],
    }
  }