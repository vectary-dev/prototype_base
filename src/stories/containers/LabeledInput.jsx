import React, { useEffect, useState, useRef, useContext, useLayoutEffect } from "react"

import { TexturePropertyContext } from "../../context/texturePropertyContext"

import DownArrow from "../../img/Symbols/Sprites/ArrowDown.svg"
import ValueDragCursor from "../..//img/Symbols/cursors/cursor-valueDrag-vertical.svg";


import { defaultInputs, generateInputs, payloadGenerator } from "../../TestData/generators"

import colorPicker from "../../img/Symbols/Sprites/PipetteColor.svg"

import Plus from "../../img/Symbols/Sprites/Plus.svg"

import ColorPlaceholder from "../../img/colorPlaceholder.png"

import Link from "../../img/Symbols/Sprites/Link.svg"
import Unlink from "../../img/Symbols/Sprites/Unlink.svg"

import TextureButton from "../../components/TextureButton"

import { AnisotropyDefaults } from "../../TestData/DefaultData"


import { TextureTypes, defaultImages } from "../../TestData/DefaultData"
import { v4 as uuidv4 } from 'uuid';
import Dropdown from "../../components/dropdown"

function LabeledInput(props) {
    const {
        id,
        label = "Input",
        labelType,
        input = defaultInputs.single("%"),
        type,
        icon,
        path,
        hasButton
    } = props
    const mainProperty = props.mainProperty !== undefined ? props.mainProperty : true
    const [inputs, setInputs] = useState([])
    const { globalState, dispatch } = useContext(TexturePropertyContext)
    const [openPopup, setOpenPopup] = useState(false)
    const [localLabel, setLocalLabel] = useState("")

    const [buttonIcon, setButtonIcon] = useState(Plus)
    const [reducedValue, setReducedValue] = useState([])

    const [toggleDorpdown, setToggleDropdown] = useState(false)

    const payload = payloadGenerator(label)
    const grwothRef = useRef(null);



    const newId = id ? id : uuidv4()

    useEffect(() => {
        dispatch({
            type: "ADD_WORKSPACE_REF", payload: {
                ref: "",
                grwothRef: grwothRef
            }
        })
    }, [grwothRef]);

    useEffect(() => {
        console.log(mainProperty)
        type == "colorPicker" ? setLocalLabel(input.iterable[0].label) : setLocalLabel(label)

        switch (icon) {

            case "colorPicker":
                setButtonIcon(colorPicker)
                break;
            case "dropdown":
                setButtonIcon(DownArrow)
                break;
            case "solid":
                setButtonIcon(ColorPlaceholder)
                break;
            case "link":
                setButtonIcon(Link)
                break;
            case "plus":
                setButtonIcon(Plus)
                break;
            default:
                setButtonIcon(Plus)
        }

        dispatch({
            type: "ADD_ONE_PROP", payload: {
                id: newId,
                name: label,
                textureTypes: TextureTypes(),
                images: defaultImages
            }
        })

        setInputs(generateInputs(input, type || null))
        console.log(input)
    }, [])

    useEffect(() => {
        const globalStateCopy = globalState

        if (path) {
            const loadEditedProperties = globalState.MaterialPorperties[path.activeProperty].textureTypes[path.activeTexture].tabTypes[path.activeTab]
            const editedPropertyProgress = loadEditedProperties.properties.filter(x => x.id === id)[0]
            console.log(editedPropertyProgress.progress, editedPropertyProgress.id)
            //setProgress(editedPropertyProgress.progress)
        }

        if (globalStateCopy.MaterialPorperties.length > 0 && id === undefined && openPopup && (icon === undefined || icon === "empty")) {

            dispatch({
                type: "ADD_ACTIVE_MATERIAL_POPUP", payload: {
                    id: globalStateCopy.MaterialPorperties.filter(x => x.name == label)[0].id
                }
            })
        }
        else if (openPopup && icon === "dropdown") {
            setToggleDropdown(!toggleDorpdown)
        } else if (icon === "link") {
            if (openPopup) {
                setButtonIcon(Unlink)
            } else {
                setButtonIcon(Link)
            }
        }


    }, [openPopup])

    useEffect(() => {
        if (input !== undefined && type === "colorPicker") {
            const newList = []
            for (const [key, value] of Object.entries(input.iterable)) {
                newList.push({
                    name: value.label
                })
            }

            setReducedValue(newList)
        }
    }, [input])


    return (
        <div className={`w-full h_24 flex ${type === "colorPicker" ? "mt-5" : "my-2"} ${mainProperty ? "my-2" : "my-4"} text-almostBlack  `}>
            <img ref={grwothRef} src={ValueDragCursor} className="absolute z-50 hidden" />

            <div className={` w-full flex items-center justify-between relative`}>

                {type !== "colorPicker" ?


                    <p className={`${labelType === "title" ? "font-semibold" : "font-normal"} normal-font`}>{localLabel}</p>

                    :
                    <div
                        onClick={() => { setToggleDropdown(!toggleDorpdown) }}
                        className={`  h-full  flex justify-center items-center normal-font`}>
                        <div className="flex bg-lightGrey  h-full items-center px-1 rounded">
                            {localLabel}
                            <img className="" src={DownArrow} />
                        </div>
                        <Dropdown
                            setToggleDropdown={setToggleDropdown}
                            list={reducedValue}
                            defaultState={true}
                            style={{
                                width: "48px",
                                marginLeft: "-117px",
                                marginTop: "16px"
                            }}
                            className={`absolute z-10 w-28  bg-almostBlack text-almostWhite ${!toggleDorpdown && "hidden"}`} />

                            <div className="flex m-1">

                            {inputs  && inputs.map((inp) => {
                                return inp
                            })}

                            </div>
                    </div>
                    

                }


                <div className={`flex ${type === "buttonless" && "pr-8"}`}>
                    <div className="flex">

                        {(inputs && type !== "colorPicker") && inputs.map((inp) => {
                            return inp
                        })}

                    </div>
                    {hasButton && <TextureButton
                        type={icon === undefined || icon !== "dropdown" && "transparent"}
                        openPopup={openPopup}
                        className={`${!mainProperty ? "ml-1" : "ml-2"}`}
                        img={buttonIcon}
                        alt=""
                        setOpenPopup={setOpenPopup} />}
                    {icon === "dropdown" && <Dropdown
                        setToggleDropdown={setToggleDropdown}
                        list={AnisotropyDefaults}
                        defaultState={toggleDorpdown}
                        style={{ marginTop: "-4px" }}
                        className={`absolute z-10 w-28 bg-almostBlack text-almostWhite ${!toggleDorpdown && "hidden"}`} />}
                </div>

            </div>


        </div>
    )
}


export default LabeledInput
