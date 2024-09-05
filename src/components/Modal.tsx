import { useCallback, useEffect, useState } from 'react'

import './Modal.css'

import { checkProperties, ModalType } from '../common'
import React from 'react'
import AsyncSelect from 'react-select/async'
import { TreeSelect } from 'antd'

interface fieldProps {
    type: ModalType
    label: string
    id: string
    selectOptions?: string[]
    inputType?: string
    asyncDefault?: any
    asyncLoad?: (inputValue: string) => Promise<any>
    nodeOptions?: any
}

interface modalProp {
    closeModal: () => void
    onSubmit: (newRow: any) => void
    defaultValue: any
    modalFields: fieldProps[]
    formBase: any
}

export const Modal = (props: modalProp) => {
    const { closeModal, onSubmit, defaultValue, modalFields, formBase } = props
    const [formState, setFormState] = useState(defaultValue || formBase)
    const [errors, setErrors] = useState('')

    const validateForm = useCallback(() => {
        if (checkProperties(formState)) {
            setErrors('')
            return true
        } else {
            const errorFields = Object.entries(formState)
                .filter(([_, value]) => !value)
                .map(([key]) => key)
            setErrors(errorFields.join(', '))
            return false
        }
    }, [setErrors, formState])

    const handleChange = useCallback(
        (
            event:
                | React.ChangeEvent<HTMLInputElement>
                | React.ChangeEventHandler<HTMLSelectElement>
        ) => {
            setFormState((prevForm: any) => ({
                ...prevForm,
                [event.target.name]: event.target.value,
            }))
        },
        []
    )

    const handleChange2 = useCallback(
        (e) => {
            setFormState((prevForm: any) => ({
                ...prevForm,
                id: e.value,
                name: e.label,
            }))
        },
        [setFormState]
    )

    const handleChange3 = useCallback(
        (e) => {
            setFormState((prevForm: any) => ({
                ...prevForm,
                test: e,
            }))
        },
        [setFormState]
    )

    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault()

            if (!validateForm()) return

            onSubmit(formState)

            closeModal()
        },
        [onSubmit, closeModal, formState]
    )

    const generateFields = (field: fieldProps) => {
        const {
            type,
            id,
            label,
            selectOptions,
            inputType,
            asyncDefault,
            asyncLoad,
            nodeOptions,
        } = field
        switch (type) {
            case ModalType.Select:
                return (
                    <div className="form-group" key={id}>
                        <label htmlFor={id}>{label}</label>
                        <select
                            name={id}
                            id={id}
                            onChange={handleChange}
                            value={formState[id]}
                        >
                            <option disabled value="">
                                -- select an option --
                            </option>
                            {selectOptions?.map((option) => (
                                <option value={option} key={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                )
            case ModalType.Input:
                return (
                    <div className="form-group" key={id}>
                        <label htmlFor={id}>{label}</label>
                        <input
                            type={inputType}
                            name={id}
                            onChange={handleChange}
                            value={formState[id]}
                        />
                    </div>
                )
            case ModalType.AysncSelect:
                return (
                    <div className="form-group" key={id}>
                        <label htmlFor={id}>{label}</label>
                        <AsyncSelect
                            cacheOptions
                            defaultOptions={asyncDefault}
                            loadOptions={asyncLoad}
                            name={id}
                            onChange={handleChange2}
                            defaultValue={{
                                label: formState.name,
                                value: formState.id,
                            }}
                        />
                    </div>
                )
            case ModalType.TreeSelect:
                return (
                    <>
                        <p>
                            Enter the test name in the textbox if not found in
                            dropdown
                        </p>
                        <div className="form-group" key={id}>
                            <label htmlFor={id}>{label}</label>
                            <TreeSelect
                                style={{ minWidth: '200px' }}
                                value={formState[id]}
                                dropdownStyle={{
                                    maxHeight: 400,
                                    overflow: 'auto',
                                }}
                                treeData={nodeOptions}
                                placeholder="Please select"
                                onChange={handleChange3}
                            />
                        </div>
                        <div className="form-group" key={id}>
                            <label htmlFor={id}> Test Name</label>
                            <input
                                type="text"
                                name={id}
                                onChange={handleChange}
                                value={formState[id]}
                            />
                        </div>
                    </>
                )
            default:
                return null
        }
    }

    const handleModalClick = useCallback(
        (e) => {
            if (e.target.className === 'modal-container') closeModal()
        },
        [closeModal]
    )

    return (
        <div className="modal-container" onClick={handleModalClick}>
            <div className="modal">
                <form>
                    {modalFields.map((field: fieldProps) =>
                        generateFields(field)
                    )}
                    {errors && (
                        <div className="error">{`Please include: ${errors}`}</div>
                    )}
                    <button
                        type="submit"
                        className="btn"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
