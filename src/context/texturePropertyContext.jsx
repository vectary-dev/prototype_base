import React, { createContext, useReducer } from "react";
import combineReducers from 'react-combine-reducers';

import{ValueDragCursor} from "../img/Symbols/cursors/cursor-valueDrag-vertical.svg"

import { MaterialPropertyReducer } from "../reducers/MaterialPropertyReducer";
import { MetaDataReducer, defaultMetaData } from "../reducers/MetaDataReducer";
// import { TextureTypes } from "../TestData/DefaultData";

export const TexturePropertyContext = createContext();


export const TexturePropertyProvider = (props) => {
    const [globalStateReducer, initialGlobalState] = combineReducers({
        MetaData: [MetaDataReducer, rawData.MetaData],
        MaterialPorperties: [MaterialPropertyReducer, rawData.MaterialPorperties]
    });
    const [globalState, dispatch] = useReducer(globalStateReducer, initialGlobalState);
    console.log(rawData.MaterialPorperties)
    return (
        <TexturePropertyContext.Provider value={{ globalState, dispatch }}>
            {props.children}
        </TexturePropertyContext.Provider>
    );
}


const rawData = 
{
    "MetaData": {
      "activeTexturePopup": "59648c7a-7f8b-46d0-ab10-624e636a9e72",
      "WorkspaceRef": {
        "current": {}
      },
      "grwothRef": {
        "current": ""
      }
    },
    "MaterialPorperties": [
      {
        "id": "436fa335-87f5-47c2-bd49-33649a3bf301",
        "name": "Base",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "fc61ae24-cff4-4e40-80bf-f9c3587ba737",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "a96c6008-ac18-493c-a9c3-e601e6f875bc",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "ab336bc7-4e49-4245-96cd-e47cde30adb5",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "ff4bccd8-a4ae-4ddb-b361-ccc19fbe8f22",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "74d204ba-74f9-477c-9ad4-a2e967090d55",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "39236ed3-87f5-438b-a9f6-142fabfe0adc",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "b17dd8dd-438e-498d-8275-59934adcb9d4",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "612c3338-61af-4733-bcf2-5e0568714ddf",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "f01c491e-8a17-421e-80dd-0fe6205dc325",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "d13793d2-c611-4d40-a996-ee04fb7f2219",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "44c02bdc-c407-410c-94b5-c499f23a457e",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "0ae6f83e-6485-4b67-ac8e-4ccefa2f8f3e",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "be04fa43-c8a1-45ec-9bc7-798a536fbc75",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "10901cee-07a2-46be-9e7e-3d5a029e72ea",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "6fc6ef7e-d2d5-434b-8aab-5947fd7509d7",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "eec95d6e-5eac-41e3-a883-7e2a6bcc7d60",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "4e3e4fcc-db48-42d8-b697-a72db4932dd8",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "ccb3111c-75d4-4566-baf0-f9dda7020d34",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "1599e6e1-e87f-47fa-804a-e87679f83436",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "4c0c4f51-26b7-4008-a104-697a842a1b60",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "62062307-7eab-4f26-8e43-68a5d7976eb2",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "84986fcd-6665-4ea9-81fa-49fe354734a3",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "c90eab90-702c-46e8-b9d5-dad7b2e8c304",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "912d8aa5-e84f-4462-a612-77300efb9456",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "3be2c033-71f6-4bc9-a32e-c766b192f1e4",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "3d91ed97-9a9e-4b52-976e-d5076918bdf1",
        "name": "Roughness",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "87a4828b-907e-4482-a21c-a46e474db556",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "7b08f5b7-7b5c-482c-a76c-18f1ee45854a",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "c655a261-09ed-4a5b-9c11-4ca2863e2fce",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "8ede8c7d-9160-471f-a54e-8cc6387c07c0",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "cf20fc88-8265-4e9a-9e7f-f21fcdf7f835",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "ea4506b7-ee78-4f0c-92dd-96cfd6a65ebe",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "d2493e11-805e-4e0a-8f3c-503b1de8444b",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "f63ba4a6-901d-4c11-b950-08752094c2a8",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "2bc261f4-1a0b-470f-aefd-d77025708763",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "7a3218e7-ca03-496d-b908-35d6b0bb370d",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "da0aa271-4c6a-4c60-9973-83f91e99d7c6",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "5181ac27-287b-405b-9bdb-d4537244f588",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "f2cb9e0f-dffd-4f5f-8b9c-7e866f29841b",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "c3176040-56a9-45df-80e2-e58ed36ff12d",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "e8da6848-3a52-4365-9b58-600d4c77e73c",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "55bade65-94c1-437b-adc9-da983c3342ef",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "e12c66b5-4b14-4676-aa67-d67a32a43b7d",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "68be8137-a8d4-4642-a51c-e21b39c91fbf",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "1f0b33ae-5eb9-4cf8-a416-a766b73da291",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "b8bd1c5a-f00c-4c1c-b8d7-59d7111248b3",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "e493ce10-da34-4741-9d5d-45e9c5d09af9",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "0c76472b-4807-409e-b32a-bbb52e002d24",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "ffe8ea65-1ecb-4f88-abf8-0819006032e9",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "c598d2b1-dc3f-4480-8ffe-30bd277d6492",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "43932d85-507a-4c2e-8c05-8fb08d5aa336",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "59648c7a-7f8b-46d0-ab10-624e636a9e72",
        "name": "Metalness",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "d16e758e-ef77-4c20-b458-478a8dd919a1",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "95f53859-2844-4471-bd86-2f973d096e5e",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "1901564f-1e36-4a92-940e-560c47bcd2e4",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "09f27b68-5103-47a6-ad78-fe290dede4ac",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "9dbc4819-c60d-4971-8a40-5a357932b9b1",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "a987d95b-3384-449c-891e-6c375bc6a5a3",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "b217e5ce-4f3d-45b3-99d9-1169417ae3e5",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "aa89ee24-5fc0-4fce-a8d2-0023fc7a1964",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "bdf3e57d-9199-4fde-89b4-7edce8763595",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "f879ad43-87ef-4ad3-a7af-b8e21ef32be1",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "3fcea7b9-e407-464d-a70b-9d36fd8440ad",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "f91bb71c-51e3-498a-b917-b009d9687c4f",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "3058a371-178e-40a2-87da-673b210b1455",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "e7ce7a26-e344-4354-8374-bc66be255b79",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "82696dc8-f25c-49e4-922f-5a4e9d72b99e",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "531f4f1f-a615-4dcc-9b29-36007ce8f183",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "70cbee9f-7687-4d70-9183-b62516e26210",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "afb6b3f1-128d-48ca-92f0-8bc69c86669c",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "7ae0637c-f1f1-4d00-9e3e-397407b51e0a",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "c6124072-e967-41cb-b576-fff441d07cf7",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "df749300-8a87-48e1-bdea-d09f179cfa27",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "c7508b0e-397a-4923-ba30-daad7d766e6a",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "f40db68a-8d78-4fbf-8411-37ab7a9d6a2b",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "0dc8306f-0420-4a4b-b8aa-b1f9ff25781e",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "f08354d7-a0d3-4ab6-a477-bd6c85815589",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "ee10465e-0b17-4d84-9059-42d8a7168ff5",
        "name": "Opacity",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "e768b71c-ac53-407f-8c17-cc49cdb63d0e",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "1e2c9d1c-edb5-4ff3-a2e1-c410011b1969",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "7bc39a42-e68a-4f1e-b0b4-0b4f246a6ef6",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "0463c71a-0cb6-459f-9890-5744c6db0bf2",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "18ce41d0-8845-461a-bc83-4f001d9f93a7",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "34fc19fa-3f45-45bd-9b32-d3eb8d71a3f3",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "09e980b3-f33e-41d1-9095-78a7c6dffb73",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "a1786489-07f8-45c9-8cc7-c3a0d9077e0c",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "3fc24495-f182-4dff-bac8-6bd4ca236a7f",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "5b84d309-d200-4156-bb5e-5210eac0415f",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "a08d2898-dcf8-4927-8a68-c3b42d7e9fbe",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "1f38ea10-7b64-41c5-a75d-dd372e339293",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "cf6013db-539e-4a2c-84fa-e6a93ce06b38",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "55ea693e-a58e-4543-8049-7ea719c404f5",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "cfde8562-31b5-4b3e-9ed3-ab5e84cd8716",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "6bcbde91-cff2-4da2-835f-9a1d6f9d8128",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "af195050-3098-467f-93d3-e6451a425f0b",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "767bd18d-490b-457a-87cc-fbbeae0c472b",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "ac4fba38-25aa-4d37-9f10-4c4df0e2bf0d",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "43444271-f22c-4058-b099-973c7a0212a1",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "02b3c23b-2ef1-4614-83f4-4242c3d73271",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "38e4337f-ebff-4945-a57c-f269ae519da7",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "3e84ada7-fe27-446f-ac3b-755deef1dbe9",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "414f2659-5cd9-468f-89ef-e63c5ae92af1",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "e61ea442-331f-4832-aa28-4111cf1be952",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "20cbd9f7-fe21-4210-8816-6aa9ccdd22ff",
        "name": "Emission",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "051998fa-1a9d-4026-a091-6072dd35bf03",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "9e4757c3-3009-4465-b72b-8169c602bd4a",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "891f4abc-1075-4edb-b0ae-fb0a0eed325e",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "bfc285d3-a8d6-4c46-8e3c-b2dc53c8e42b",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "4bdc2a03-e9b7-4f7c-9d14-9b2e28177fb0",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "bfe1087b-3c32-4bfa-9c59-154ae2050e46",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "b8dd24e1-fd95-4687-9817-8b625b919a79",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "16003736-ff03-492a-9d64-89a1a744d42d",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "3d847a58-df4a-481f-bcd9-54276a20402a",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "c16549ef-1f8e-41f7-8758-2bf7f79922e4",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "f4a779e2-668e-4a32-ae72-5166c420777e",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "daf53dce-9c78-430c-9a33-06d6ebdd1255",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "453c5b28-0a2d-4cca-ab69-1176bde4e9f5",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "cb946250-448c-4bcf-b52e-fed0716afceb",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "c12cdec2-c91d-4a43-b0d0-061c0bf7802f",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "4fd009f3-b12e-4251-817b-576f7e04228c",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "ae864257-edb2-4727-a92f-b872f0ccaed4",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "e511d285-c357-473a-a7bc-7ed6778a26cb",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "d2020187-a9c5-4356-b89f-3b3bcf0d8d6f",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "22c0293f-a95e-412b-9df4-e80d7cabfe27",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "839a2e2c-69c8-49c1-b224-ddff3b0959c8",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "a3f4cd73-3303-49ed-b525-ac396f098dbd",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "2c200792-3077-48bf-8d10-b09b08d893bc",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "224ae180-0f01-4f35-afc4-dc095f59a6c9",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "4ef90b28-1403-4a40-8646-9aecbe3a6d44",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "0042039a-7322-42da-b72f-1b8ce7f7a6d2",
        "name": "Normal",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "e46be1c3-8c20-49a8-93e5-0f0d08c14e1d",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "5d183746-6015-43c2-98dd-3e974f1997c5",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "46b1df7f-34f4-40b9-a2a1-ba04ca162c14",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "88f6dccb-32ff-414f-91f8-77c867db120b",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "d376190e-1656-4ef2-b5f4-fdc07289ab01",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "132cb93d-955d-45db-a29f-9cd1a0179837",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "6923f9aa-1b97-477e-916e-0d814ec413ef",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "ad93f297-e80e-46ef-b7c3-7751ec5c4f87",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "a236a5ff-5ebc-4c90-9916-3882a92b01ed",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "2649d883-de59-4027-917e-4520e213642f",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "f1c43402-3905-4e26-856d-9fcd0ff5bfab",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "9d760297-2232-4fc3-a162-c2e51ad14359",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "921be5c6-2e42-4c40-9094-e7c9aec2eba9",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "646c6fb9-2edb-4be5-ad67-d421348cb204",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "86fddf54-99d6-4c4d-9417-38a2aef2eb55",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "a785522b-86c9-4c16-aaa5-8051b3f50a0b",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "b4845527-928d-4f8a-8b19-eb8aad734756",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "38fd5c56-8110-465a-bb1d-66faaf68d2c7",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "a349dbd7-579a-461c-9375-c584790b186c",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "3d24963d-0777-4d27-94cd-3d0faa660b7a",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "80ccd8ef-179f-4b07-a32a-910f5bec39a8",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "d13bf4e5-0391-4b8b-b23e-8e69921c64fb",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "f0a032ad-174a-49cd-8137-b750d3d0c9b4",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "e3f69a5a-3f3a-47a7-b649-339523992dc1",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "11f67a85-0303-4a9d-ba19-ab3a452aec7f",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "361b9325-49bb-4569-8e6a-9cabfeeafd1a",
        "name": "Metalness",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "a15f0b48-02a7-4bdc-b9fb-ac670e9a566e",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "6bcec9e2-58e4-468c-b6b1-4638060bd6d2",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "2fa8bf63-55e7-4fbf-9e23-0ab586743090",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "92348c07-c696-4e36-9615-0efa2ff016b0",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "f192df7f-db8e-42d6-b38d-2ffe335e067d",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "4737ed4a-4c0a-45e7-b3a6-1f7751cf6003",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "3f51602f-0d04-44f3-93fb-2b7cad57546a",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "924f066d-b560-4d75-8e53-ccd909eda67f",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "f8e91807-de9d-47cc-8a5e-df9151f48fe8",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "687a7b3c-454f-41d4-9c92-70a0ac76d1a2",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "0529ae57-f0f1-4ce7-81f5-e3152d80c122",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "c4ae8db2-87e9-4b91-9799-d7f36b9f8293",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "d4764a77-e7df-4bc0-9ede-27bf5a5525df",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "e311ff6c-e116-4eda-8918-ebe9d7b7cfb4",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "85527053-6038-4af4-972a-7713d9d4738b",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "067d8cd7-610e-40c4-92c7-fb03e48cbcc6",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "0aec5912-a8eb-4ff9-9b23-9305e82679e6",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "3dac5b85-eeff-400b-8c8b-60f8db483972",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "89cab407-d76b-413e-9efc-9b87ee3d9cc8",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "e0ec56b9-adf9-4b9f-827e-6e1b377fe110",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "a6a39ff1-2db1-4b56-a728-f7392533e77c",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "7d99a171-2428-46a4-848e-8b11567806a5",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "234668d7-ad81-4a59-b92c-e8c32a6922b7",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "6d13c750-6c5a-46cc-9422-c105bb2a4351",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "ecd7c263-9881-43c1-8533-9a4e039a9854",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "fc61ae24-cff4-4e40-80bf-f9c3587ba737",
        "name": "Hue",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "42864f26-a4ec-4627-9855-e1bda3cf15c0",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "c4d14436-d8a1-43d3-ae63-4bd92c80dcae",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "a39853c4-2401-42df-91a7-1ee65d657440",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "26030308-234c-4751-88ec-4f4b40ba2f6a",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "cf2b24f8-4b76-42d8-ac9e-eba6089f36b0",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "e1287302-f3d7-4c83-bb72-f9c7853bfc0d",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "e6486468-4905-4c79-a4af-fd3bdb9b9be1",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "06567423-1e6d-4a10-ba08-9cf6dcb18a23",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "284698a1-b6bf-437e-9cf1-facad9fb96a5",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "e66305d2-0dde-4e1b-b476-6f8eb47a8ff3",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "c7a6c512-7605-4227-a0f2-5d159c0ed672",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "f392709c-ecb6-4bba-ac62-fe0f06aadcef",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "deebc8c5-80e1-4b44-9583-c5e3679ae53e",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "3382126b-2614-4776-8ba5-0be96e893cb4",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "927bb23e-241b-4082-977f-0c81bef1c25b",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "62986a43-fd45-4d9e-b390-6d6a4ca50d27",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "3dfd1202-2705-498c-ac70-fb2b48b167e1",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "13661911-7760-473b-b960-eee4eb80748b",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "de4e78f0-e454-46cb-bf82-cf6de2348b49",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "8f123098-acc1-4036-b18e-834881938eea",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "53cabc84-ac77-40ab-b763-e7fc0b99dd0c",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "10c34f3f-062b-4451-9598-7adec3313c6c",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "fed5a43c-6da4-4266-aebe-b8eb1ab8cae3",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "cea2dd2a-2bff-472c-ad27-6424e9932cc9",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "a58dad8b-e108-4aaf-89e6-38cf8015816d",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "a96c6008-ac18-493c-a9c3-e601e6f875bc",
        "name": "Saturation",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "1c490de6-59cc-498a-887f-cb76207362d5",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "d18b9f63-d14d-4cbe-8c44-b5a0f599fa04",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "844bbbfa-e33d-4c16-b404-1debc2f4f7fe",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "179c4187-898f-4425-9d43-4b1922b4f8cb",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "79a84664-eb63-4078-a8af-643aa2e7de81",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "c0360f25-c658-482e-9b5e-177a9a369456",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "a66e295d-ca77-4d6d-807c-84f553cb4da7",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "cb858257-7d88-4dff-8ba5-8f8f2c5ada9f",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "f3910c5f-8e80-4c78-9cd0-ad89c0e458f9",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "4ccb4ac6-af61-465d-ad51-041be10b061a",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "53c0a241-5996-432a-bfac-9d5564e366e5",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "ed021921-a3a4-4db8-ae5e-867c6780ff95",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "897b76f1-b451-4325-8341-53a09597b29b",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "1b7c27b9-33dc-4417-a58f-16785938090f",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "e3d47924-4f0a-4e3b-85bb-65e8af51ae84",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "d20915ef-af9e-45b2-9abc-ccea6261b352",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "ce6e6515-3259-49f4-a074-d42e88073c88",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "48a8261f-a0ee-46fe-b33d-4613527f29fe",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "aee86656-00b6-4374-b97b-a642389746fe",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "851bf552-64cc-41b5-be78-e6a951e705c6",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "5ece0727-57db-493b-87c0-8b25d458236c",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "f053226d-e316-45d5-9440-64ba7dac032b",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "6a27368f-3866-465a-81cc-629de0dd8a0a",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "97c3c8f3-27fa-4de9-8289-cbabd9d2b6b6",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "b4aeb722-6365-4046-8676-34f4e6f7259d",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "ab336bc7-4e49-4245-96cd-e47cde30adb5",
        "name": "Brightness",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "2f7fb014-8e07-431b-90ce-34aaeb15df8a",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "8ca1df1b-8d3d-4595-a1ab-3a8d784b3145",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "c1cf233f-110a-4155-be4e-62b01b28bb05",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "18fc11e8-666f-4775-b19e-c142050a22a6",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "0e628174-bb34-4440-bb7f-5ceadbbf4e84",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "7a5fc2a2-c6f9-4966-92a9-4c82f355d5e2",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "74da5fab-c738-4d96-879d-ec18684d2ebd",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "32273075-d5ed-4439-851b-648f79f7af0f",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "d291821a-b44a-49dd-b9dc-6e4531f32c4a",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "474cb626-1806-4fb9-977f-b4e0928eee5b",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "dfe82f6d-53df-4ed0-b9d9-4470c13898d4",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "2e1ef6a4-280c-4bc1-b0ea-92004df833aa",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "e31c4ec8-5e24-40a8-8b15-e16c5d14c2df",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "f3a2d8bd-f433-432c-a430-fbef0bf9a634",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "fc8c2d92-74e5-4d43-beed-942f2cfb7284",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "a617e3ca-704d-4d49-ab2c-2a0a9644e9d0",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "d49116be-a75d-4117-93ee-41ad60dd7c81",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "e37117d6-f8ba-4bac-acb5-ecbd5bd28984",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "b5a9b562-6695-473a-b599-cfb46afe3914",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "72b5f679-faf3-450f-aa35-edb2101f7f62",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "b7009022-c004-45e6-ba35-8931c2a6f041",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "a8dc0486-35e9-4290-aedc-25f1f04cafde",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "7fa576fc-0536-4585-b310-c736928e9834",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "07efa551-2325-44bc-b7f7-13002e9daae1",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "c8516897-d997-4024-b914-0da202cd0004",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "ff4bccd8-a4ae-4ddb-b361-ccc19fbe8f22",
        "name": "Contrast",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "049a2cf4-5aea-4ec5-a310-f245ac3320d2",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "a859b8a4-94f3-4b62-a504-9e4e7f32a75d",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "41c2958d-496a-4a2e-9a80-b0370df25333",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "aaf64aae-d7a2-49cb-b8e9-6e1d967c240d",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "93a037e5-8298-4107-8213-4e432624c08b",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "416f6554-8998-4fb4-9ab6-a270c3c3f328",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "ff52bb01-7159-45fa-804d-c6409733df29",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "8b155d01-f06d-42d4-bd00-d423958d4f49",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "0058bcaf-5026-4fee-8380-d9d746d3c225",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "1d4f5ed1-6166-4a02-8961-218914775649",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "7de5dc44-30a7-477b-a512-93c6bebe2d3e",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "434e4716-1917-4885-955a-1cc6de35f88e",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "fb9734b8-baa3-4dbd-98e9-3482815f4378",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "5be6caf6-657b-4137-9916-3f045cd907f3",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "529ee0ce-85b7-486e-8911-eced81f49fe2",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "b661dd09-c41f-4e0c-ae49-a79ba5fb06fb",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "27ccb29e-7790-45f3-a755-d8329c5ff409",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "14ad7bd6-15c4-407f-850a-ff29e3809402",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "9bff6a98-28a7-4346-bb81-499ff9771c24",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "8efaa4c8-4c21-4f04-b190-d82ac0420d09",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "cd055936-811a-4171-8bd6-d4084a082a32",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "78b2ed6d-9a5d-423e-9a8a-eb3e67f4aff0",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "a6c70486-ff60-4052-acbd-92f5fd7ad5e3",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "5f9ca441-8097-4239-8d2b-3bbc876fdd31",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "944b01bf-4fda-4813-be4a-7a2a26a69294",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "d16e758e-ef77-4c20-b458-478a8dd919a1",
        "name": "Hue",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "a3bba381-c5f3-4a6a-987c-875ce072f48b",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "03a65f44-3984-402c-8bc0-57e98418eb73",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "9bc8560d-59c1-4964-9a74-008db1260b00",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "eb4a0922-f07d-4813-a806-3ea5382047f8",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "afc3eac9-b062-4e23-ac9d-3deceda92665",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "91c9b7c7-1b36-4735-bd32-5c586b4420f6",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "23d93feb-b28a-4b35-b4d7-9df680eb3382",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "bb12dee1-e465-4873-bc30-a2feaeec66d9",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "dff196d3-7aa6-466d-b67a-710993c170b8",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "6fdee140-f6f4-40f4-92e9-cd4b45231b77",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "124ccf15-4726-4d84-b363-d09202e2c4aa",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "3c47ad49-50f5-407f-b37d-792a92f743a0",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "a2723b48-047a-44db-b3a0-fc73aa37adc8",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "f3f0f8a2-cc46-42da-9e0c-661e9fc82a0a",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "e80dae9e-bf39-44ea-914d-e5f7fb8abda7",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "0c9df5a5-43f4-4789-a243-d0814cdee91b",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "ffc7ebe4-40a4-41d3-8e00-221afdacca70",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "a21751f9-7f6f-4739-ba7d-e8fb7f242bd9",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "786990a4-d2de-4074-8cfe-f99f53baedc4",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "d927d6a9-8090-4824-8d32-c45510bd1779",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "c77a4627-6430-4b49-a7be-ec52edf210a6",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "253a7b57-7f4b-424e-9aca-9759cdc04903",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "cde9ed01-1c8c-4fab-ab91-5f2b3587efa5",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "142e8e49-a870-4f6b-8c96-9019ebf90611",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "e63d20c2-569c-4373-8e4c-134076c836b5",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "95f53859-2844-4471-bd86-2f973d096e5e",
        "name": "Saturation",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "e5f38cb1-26e5-411c-b601-22f50a765764",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "8aa8fe45-8397-4d06-87eb-b68229f7235a",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "a0fc33bf-0ae8-4d66-af5d-39779cf438cb",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "8da9db2a-5e61-4209-bfd8-22195d30c87e",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "b41e185b-3099-47df-8bbf-0f816443f790",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "4ea376bf-2e35-4894-85de-e6b4108736ed",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "b14d1d65-32fb-4253-b82d-430fdf9843c1",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "c79e4bb7-2b37-4372-8cba-d17dccab7548",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "37a5792d-1093-4427-a526-a3a150fad6ea",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "a10def55-e150-40a2-ac89-65e855b54fff",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "083751de-e1d7-49d1-89e3-a352b51381ea",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "245351ca-2f75-47d4-a9d4-2be2046d596c",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "132b55c3-dc35-467a-9a06-404705d79e90",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "1d084a02-fefe-49f0-8bce-eef72797fcb0",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "f501f216-8fcb-449e-a6c1-a26c2ab0ba20",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "4714a692-8fd0-4aba-89e9-82d33a8feadb",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "caf2f10c-541e-41d8-8fe5-c83be4cf0e8b",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "5e765038-84aa-4f65-a997-8bb55194082f",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "17b08f2c-cbe7-49fb-9449-8d9d0e3d4db3",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "88af671f-84e8-4419-9e22-1be6756710aa",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "6bbf2d19-e236-4078-a70c-ea7ba817f226",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "bf52cc68-f1d7-48d5-809d-3e95189981a1",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "667fe7bb-de0f-4b56-b359-bb86f774a1e6",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "2cebd0c7-a840-4aca-baa7-ac994a8c6cb0",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "e13b8de8-f38c-4da8-a3eb-facca7c08810",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "1901564f-1e36-4a92-940e-560c47bcd2e4",
        "name": "Brightness",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "fbe519a0-8647-4c89-bef4-0a6a3110af32",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "567f25d9-d07f-4b53-b4d9-db70890890cb",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "c501b8bf-5a64-4b63-ba39-028438848a72",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "74cadeb3-dd4a-48b9-8954-b73abbb6629e",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "43d9111a-deee-4084-b6b1-7cb1ebc13f7a",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "6e222791-6571-45c7-899a-9db434713d47",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "c062b60f-5ff3-45be-b891-1d39b39685c8",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "e3a7390c-0760-4c93-ba6e-2f309f7523b5",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "34c52ab5-f4ed-45cc-b260-6e486ea9faa3",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "e224d9ad-016e-4ba5-8b7e-e55424df09c8",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "826a7155-c73f-4160-9c69-7f01ab761d23",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "23370623-8f7e-4dba-8c9f-e7a3a2c0f582",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "1fbc8574-7f98-422f-a875-ad5b372d7bfe",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "a59d12cf-22f2-422a-a403-fea3e7453a95",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "8193ba04-3f2f-453b-8854-e3afb94bf65e",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "697bc54f-c85a-4d0d-8c0c-8be5b59952c3",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "727ad848-b3ce-46c4-8fcf-19a6acce6af9",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "ab1a94e0-ec2a-42ae-8914-a466bce111af",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "9c3fd600-08b8-4c1b-92a6-0708da95a375",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "d284a103-8c7f-48e8-aaea-b13c29a4d39e",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "455cdb16-6da5-41db-a712-d68392eaee3e",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "3e793639-92f6-4c10-920b-9d45c7445cdf",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "7484c344-ae05-496e-ab8f-8a05b3ca60c4",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "72bb93ae-0c34-4593-afb0-e8fa8b9c478c",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "72b474a2-7c25-4c7d-8ac8-39d3866e0e4e",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      },
      {
        "id": "09f27b68-5103-47a6-ad78-fe290dede4ac",
        "name": "Contrast",
        "textureTypes": [
          {
            "name": "Image",
            "active": true,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "ec08789e-4f3e-4344-b447-b84349e460fd",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "6caf5159-ac01-4ea4-96af-5c507baea6d9",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "9f78e618-029e-4dff-aa2a-1049eb63fd70",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "3b2aeacb-84ec-4eaa-85e6-df6e69548246",
                    "type": "slider",
                    "unit": "°",
                    "max": 180,
                    "min": -180,
                    "progress": -180,
                    "rigid": true,
                    "label": "Contrast"
                  },
                  {
                    "id": "b231e5e8-1e3e-407e-9dc2-88c40ac67a01",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "single",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "e01a7d97-018c-407c-8fa1-c3c0752cdf2c",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "34ea9813-e747-40e5-a24a-32c9b4f491f2",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "1b0b256e-23d0-4604-a200-beae116e3d99",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "72362359-17b5-40b1-aa2d-a2ebfd7befba",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              },
              {
                "name": "Overlay",
                "properties": [
                  {
                    "id": "9db570e2-438f-4d39-90a8-c97f3b512aa0",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "c289933c-ede3-43ad-a0d7-7dedc2d8e3e5",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "e94735ce-9406-4994-bc99-52990657986d",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "53fb42eb-a65f-48f7-a5c7-71d401acfa44",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Gradient",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "112d1672-dfd2-475d-965d-b2a4059e2603",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "d189286e-e463-4925-952c-5956d4234b53",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "274e4419-cdb0-4dd7-8b2e-dffcdba2f8c3",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "4dfbc6b7-ca62-4689-9c97-64aa1b5019da",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              },
              {
                "name": "Transform",
                "properties": [
                  {
                    "id": "e34713cf-1fc2-43d6-afb8-003bc28a6a90",
                    "type": "number",
                    "label": "Tiling",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "69fabc76-25f1-4f20-b183-417ede28aafa",
                    "type": "number",
                    "label": "Offset",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "double",
                      "iterable": null,
                      "unit": null
                    }
                  },
                  {
                    "id": "0ec8ae4b-e32b-49f8-9f0f-761b17d09477",
                    "type": "number",
                    "label": "Rotation",
                    "labelType": "normal",
                    "hasButton": false,
                    "input": {
                      "type": "single",
                      "iterable": null,
                      "unit": "°"
                    }
                  },
                  {
                    "id": "03f49f0f-a24d-447b-8695-2661b6b1f69d",
                    "type": "switch",
                    "label": "Invert",
                    "input": {
                      "type": "double",
                      "on": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid",
            "active": false,
            "tabTypes": [
              {
                "name": "Adjust",
                "properties": [
                  {
                    "id": "8ab55456-b0fa-43df-b6d3-6b48dd960c7a",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Hue"
                  },
                  {
                    "id": "ea8f25cb-7141-4e57-b928-711f262ecf14",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Saturation"
                  },
                  {
                    "id": "5a5219a7-f7d1-42ec-bea2-512ef0cd2ee2",
                    "type": "slider",
                    "unit": "°",
                    "colorSlider": true,
                    "max": 180,
                    "min": -180,
                    "rigid": true,
                    "label": "Brightness"
                  },
                  {
                    "id": "78b73397-8f59-48b1-9277-3d7651457816",
                    "type": "number",
                    "hasButton": true,
                    "input": {
                      "type": "colorPicker"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "images": [
          {
            "name": "texture_001.png",
            "src": "https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg",
            "active": true
          },
          {
            "name": "texture_002.png",
            "src": "https://image.shutterstock.com/z/stock-photo-white-crick-wall-texture-background-229832425.jpg",
            "active": false
          }
        ]
      }
    ]
  }