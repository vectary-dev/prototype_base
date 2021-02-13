import React from "react"
import LabeledSwitch from "../../containers/LabeledSwitch"

import {TexturePropertyProvider} from "../../context/texturePropertyContext"
import { defaultInputs } from "../../TestData/generators"

export default {
    title: 'Components/Containers/Text Switch',
    component: LabeledSwitch,
    parameters: {
        backgrounds: {
            default: "Almost White",
            values: [
              { name: 'Almost White', value: '#F7F7F7' },
              { name: 'Almost Black', value: '#252525' },
            ],
        },
    },
    argTypes: {
        label: { 
            description: "The name of the property",
            table: {
                defaultValue: {
                    summary: "Switch"
                }
            },
            control: { type: "text" }
        },
    

    input: {
        description: "Expect an object that defines the inputs. See [Generators/defaultInputs], in this case it ignores the first argument, so '%' would have the same effect as '$' ",
        table: {
            defaultValue: {
                summary: "defaultInputs.single('%', false)"
            }
        },
        control: {type: 'object'}
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

    padding: {
        description: "adds extra padding to the component",
        table: {
            defaultValue: {
                summary: "true"
            }
        },
        control:{type: 'boolean'}
       },

    }
}


const Template = (args) => <TexturePropertyProvider >
                              <div className="w_prop h-full items-center flex flex-col overflow-y-scroll overflow-x-hidden hideScrollBar select-none dark:bg-almostBlack">
                                  <LabeledSwitch {...args} />
                               
                              </div>
                            </TexturePropertyProvider>


 
export const Single = Template.bind({});
Single.args = {


    input: defaultInputs.single("%", false)

};

export const Double = Template.bind({});
Double.args = {


    input: defaultInputs.double("%", false)

};

export const DoubleAxis = Template.bind({});
DoubleAxis.args = {


    input: defaultInputs.double("%", true)

};

export const TripleAxis = Template.bind({});
TripleAxis.args = {


    input: defaultInputs.triple("%", true)

};

